import { toast } from "react-toastify";

import {
  FETCH_ALL_USERS,
  fetchAllUsersSuccess,
  fetchAllUsersError,
  CHECK_USER_SLUG,
  checkUserSlugSuccess,
  checkUserSlugError,
} from "../actions/userActions";

import {
  EDIT_PROFIL,
  editProfilSuccess,
  editProfilError,
  EDIT_PROFIL_AVATAR,
  editProfilAvatarSuccess,
  EDIT_PROFIL_SLUG,
  editProfilSlugSuccess,
  editProfilSlugError,
  editProfilSlugInput
} from "../actions/editProfilActions";

import axios from "axios";
import { httpClient } from "../../utils";

export const usersMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_ALL_USERS: {
      httpClient.get({
        url: `/users`
      }, false, store)
        .then(res => {
          const users = res.data.data;
          const usersWithType = users.map(user => {
            return {
              ...user,
              type: "member"
            };
          });
          store.dispatch(fetchAllUsersSuccess(usersWithType));
        })
        .catch(err => {
          store.dispatch(
            fetchAllUsersError(
              "Un problème est survenue lors du chargement de la liste des Utilisateurs"
            )
          );
          console.error(err);
        });
      break;
    }

    case EDIT_PROFIL: {
      /* On récupere les data editées depuis le store*/
      /* On retires celles que l'on utilise pas avec cette méthode : */
      const {
        id,
        avatarUrl, // a test
        createdAt,
        records,
        isAdmin,
        learnedLanguages,
        taughtLanguages,
        modifyTaughtLanguages,
        modifylearnedLanguages,
        password,
        confirm,
        ...editProfilData
      } = store.getState().user.editProfilData;

      const { allLanguagesList } = store.getState().languagesReducer;

      /*  Avec cette liste de languages, 
                on va chercher l'id dans notre allLanguagesList 
                pour renvoyer toutes les infos concernant cet ID 
            */
      const mapper = role => {
        return role.map(learnLanguageId => {
          return allLanguagesList.find(language => {
            return language.id === learnLanguageId && language;
          });
        });
      };

      /* On check si le param est un objet */
      var checkIsObject = array =>
        array.some(value => {
          return typeof value == "object";
        });

      /* On renvoie editprofildata, et on modifie deux propriétées avec certaines conditions */
      let finalData = {
        ...editProfilData,
        learnedLanguages: checkIsObject(learnedLanguages)
          ? learnedLanguages
          : mapper(learnedLanguages),
        taughtLanguages: checkIsObject(taughtLanguages) ? taughtLanguages : mapper(taughtLanguages)
      };

      /* On check si le form comporte une modification de mot de passe */
      if (password !== "" && confirm !== "") {
        finalData = {
          ...finalData,
          password,
          confirm
        };
      }
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/users/${id}`,
        data: finalData,
        headers: {
          Authorization: `Bearer ${store.getState().user.accessToken}`
        }
      })
        .then(res => {
          console.log(res);
          store.dispatch(editProfilSuccess(finalData));
          console.log("finalData", finalData);
          
          if (res.status === 200) {
              toast.info("Vos informations ont bien été enregistrées");
          }
        })
        .catch(err => {
          console.error(err);
          console.error(err.response);
          store.dispatch(editProfilError(/* Todo */));
          toast.info("Une erreur est survenue lors de la sauvegarde de votre profil");
        });
      break;
    }

    case EDIT_PROFIL_AVATAR: {
      const { currentUser, accessToken } = store.getState().user;
      const formData = new FormData();
      formData.append("avatar", action.payload);

      httpClient.post({
        url: `/users/${currentUser.id}/avatar`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }, store)
        .then(res => {
          const responseAvatarUrl = `${res.data.data.avatarUrl}?v=${Date.now()}`;
          // const newAvatarUrl = `${process.env.REACT_APP_API_URL}/${responseAvatarUrl}`;
          store.dispatch(editProfilAvatarSuccess(responseAvatarUrl));
        })
        .catch(err => {
          console.error(err);
        });
      break;
    }

    case CHECK_USER_SLUG: {
      const selectedLanguages = role => {
        const map = role.map((language, index) => {
          return language.id || index + 1;
        });
        return map;
      };

      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/users/${action.payload}`
      })
        .then(res => {
          const profilData = res.data.data;
          let profilUserData = {
            ...res.data.data,
            modifyTaughtLanguages: selectedLanguages(profilData.taughtLanguages),
            modifylearnedLanguages: selectedLanguages(profilData.learnedLanguages),
            avatarUrl: `${profilData.avatarUrl}?v=${Date.now()}`
          };
          store.dispatch(checkUserSlugSuccess(profilUserData));
        })
        .catch(err => {
          store.dispatch(checkUserSlugError(/* */));
          console.error(err);
        });
      break;
    }

    case EDIT_PROFIL_SLUG: {
      const { id, slug } = store.getState().user.editProfilData;

      axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/users/${id}/slug`,
        data: { slug },
        headers: {
          Authorization: `Bearer ${store.getState().user.accessToken}`
        }
      })
        .then(res => {
          console.log("res", res);
          store.dispatch(editProfilSlugSuccess(slug));
          setTimeout(() => {
            toast.info("Votre slug a bien été modifié");
          }, 300);
        })
        .catch(err => {
          if (err.response) {
            console.error(err);
            const errStatus = err.response.status;
            const errResponse = err.response.data.data;
            if (errStatus === 409) {
              // Proposition d'un autre slug
              store.dispatch(
                editProfilSlugError("Ce slug est déjà pris, voici un slug disponible")
              );
              // Mise à jour de l'input pour envoyé le slug proposé
              store.dispatch(editProfilSlugInput(errResponse));
            } else {
              store.dispatch(editProfilSlugError("Une erreur est survenue"));
            }
          }
        });
      break;
    }

    default:
      break;
  }
};
