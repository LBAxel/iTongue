const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const slugify = require("slugify");

const fsPromises = fs.promises;

const redis = require("../redis");
const userDatamapper = require("../db/user-datamapper");

const {
    SALT_ROUNDS,
    USER_ROLES,
    MIME_EXTENSION_MAP,
    PUBLIC_DIR,
    AVATARS_DIR
} = require("../constants");

module.exports = {
    showAll: async (_, res, next) => {
        try {
            const users = await userDatamapper.showAll({});

            res.json({ data: users });
        } catch (err) {
            next(err);
        }
    },

    showOne: async (req, res, next) => {
        const { id: userId, slug } = req.params;

        if ((userId && isNaN(userId)) || (slug && !/^[a-z\\d]+(-[a-z\\d]+)*$/.test(slug)))
            return res.status(400).json({
                errors: [{ msg: "Le paramètre reçu n'est pas valide" }]
            });

        try {
            const [field, value] = userId ? ["id", userId] : ["slug", slug];
            const user = await userDatamapper.showOne({
                [field]: { operator: "=", value: value }
            });
            if (!user) return next();
            res.json({ data: user });
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const { email, password, firstname, lastname } = req.body;

            const user = await userDatamapper.findOne(
                { email: { operator: "=", value: email } },
                false
            );

            if (user)
                return res.status(409).json({ errors: [{ msg: "L'adresse email existe déjà" }] });

            let userSlug = slugify(firstname + " " + lastname, { lower: true });
            const slugsRows = await userDatamapper.findSlugs(userSlug);
            const slugs = slugsRows.map(row => row.slug);

            if (slugs.includes(userSlug)) {
                const lastSuffixInDb = slugs[0].match(/\d+$/);
                const suffix = lastSuffixInDb ? parseInt(lastSuffixInDb[0], 10) + 1 : 1;
                userSlug += suffix;
            }

            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

            const result = await userDatamapper.insertOne({
                email,
                password: hashedPassword,
                firstname,
                lastname,
                slug: userSlug
            });

            res.json({ data: result });
        } catch (err) {
            next(err);
        }
    },

    deleteOne: async (req, res, next) => {
        const userId = req.params.id;
        if (isNaN(userId))
            return res.status(400).json({
                errors: [{ msg: "Le paramètre reçu n'est pas valide" }]
            });

        try {
            await userDatamapper.deleteOne(userId);
            res.status(204).json({});
        } catch (err) {
            next(err);
        }
    },

    addLanguage: async (req, res, next) => {
        const userId = req.params.id;
        const { language_id: languageId, role } = req.body;
        console.log(role);

        if (isNaN(userId) || isNaN(languageId) || !USER_ROLES.includes(role))
            return res.status(400).json({
                errors: [{ msg: "Au moins un des paramètres est invalide" }]
            });

        const userLanguage = { languageId, userId, role };

        const alreadyExists = await userDatamapper.findLanguage(userLanguage);
        if (alreadyExists) return res.status(409).json({ alreadyExists });

        try {
            const result = await userDatamapper.addLanguage(userLanguage);
            res.json({ data: result });
        } catch (err) {
            next(err);
        }
    },

    updateAvatar: async (req, res, next) => {
        if (!req.file)
            return res.status(400).json({ errors: [{ msg: "Le fichier image est manquant" }] });

        const userId = req.params.id;
        if (isNaN(userId))
            return res.status(400).json({
                errors: [{ msg: "Le paramètre reçu n'est pas valide" }]
            });

        const fileName = req.file.filename;
        const tempPath = path.resolve(req.file.path);
        const extension = MIME_EXTENSION_MAP[req.file.mimetype];

        try {
            const user = await userDatamapper.findByPk(userId);
            if (!user) return next();

            let avatarUrl, destPath;
            if (user.avatar_url) {
                avatarUrl = user.avatar_url;
                destPath = path.join(PUBLIC_DIR, avatarUrl + extension);
            } else {
                const destSubDir = fileName.split("").slice(0, 4).join("/");
                const destBaseName = fileName.substring(4);
                const destFileName = destBaseName + extension;

                avatarUrl = `${AVATARS_DIR}/${destSubDir}/${destBaseName}`;
                destPath = path.join(PUBLIC_DIR, AVATARS_DIR, destSubDir, destFileName);
            }

            const parentDir = path.dirname(destPath);
            if (!fs.existsSync(parentDir)) await fsPromises.mkdir(parentDir, { recursive: true });

            await fsPromises.rename(tempPath, destPath);

            if (!user.avatar_url) {
                await userDatamapper.setAvatarUrl(avatarUrl, user.id);
            }

            res.json({ data: { avatarUrl: avatarUrl } });
        } catch (renameErr) {
            try {
                if (fs.existsSync(tempPath)) await fsPromises.unlink(tempPath);
            } catch (unlinkErr) {
                next(unlinkErr);
            }

            next(renameErr);
        }
    },

    login: async (req, res, next) => {
        const { email, password } = req.body;

        try {
            const user = await userDatamapper.findOne({
                email: { operator: "=", value: email }
            });

            if (user && (await bcrypt.compare(password, user.password))) {
                const payload = {
                    id: user.id,
                    email: user.email,
                    slug: user.slug,
                    avatarUrl: user.avatar_url,
                    isAdmin: user.is_admin
                };

                const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: "20m"
                });
                const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);

                await storeRefreshToken(user, refreshToken);

                const keyMap = {
                    avatar_url: "avatarUrl",
                    is_admin: "isAdmin",
                    created_at: "createdAt"
                };

                const cleanEntries = Object.entries(user).map(([key, value]) => [
                    keyMap[key] || key,
                    value
                ]);

                const display_user = Object.fromEntries(cleanEntries);

                return res.json({
                    data: { accessToken, refreshToken, user: display_user }
                });
            }

            res.status(401).json({ errors: [{ msg: "Not allowed" }] });
        } catch (err) {
            next(err);
        }
    }
};

function storeRefreshToken(user, token) {
    return new Promise((resolve, reject) => {
        redis.client.hmset(redis.prefix + "refresh_tokens", user.id, token, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}
