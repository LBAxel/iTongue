const searchDatamapper = require("../db/search-datamapper");

module.exports = {
  /**
   * Retrieves both matching expressions for users and irecords relations
   */
  find: async (req, res, next) => {
    try {
      const { query, type } = req.query;

      let results;

      switch (type) {
        case "all":
          const users = await searchDatamapper.findUsers(query)
          const irecords = await searchDatamapper.findRecords(query)
          results = { users, irecords };
          break;
        case "user":
          results = await searchDatamapper.findUsers(query);
          break;
        case "record":
          results = await searchDatamapper.findRecords(query);
          break;
      }

      res.json({ data: results });
    } catch (err) {
      next(err);
    }
  },

  todo: async (_, res) => {
    res.status(200).json({ data: "todo" });
  }
};
