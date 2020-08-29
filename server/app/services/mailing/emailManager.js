const client = require("redis").createClient();
require("./consumers/welcome");

module.exports = {
  /**
   * Send email to user
   * @param {"welcome"} template Name of the template to use for the email message
   * @param {Object} payload Mandatory datas
   * @returns {Void}
   */
  send: async (template, payload) => {
    switch (template) {
      case "welcome":
        console.log("Welcoming email");
        client.publish("welcome", JSON.stringify(payload));
        break;

      default:
        console.log("No valid template provided as first argument");
    }
  }
};
