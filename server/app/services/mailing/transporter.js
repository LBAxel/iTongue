require("dotenv").config();
const nodemailer = require("nodemailer");
const mailgunTransport = require("nodemailer-mailgun-transport");

const mailgunConf = {
  pool: true,
  maxMessages: 100,
  maxConnections: 20,
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
};

const transport = mailgunTransport(mailgunConf);

/**
 * Send mail passing options in object
 * @param {Object} param0
 */
class EmailService {
  constructor() {
    this.emailClient = nodemailer.createTransport(transport);
  }

  sendMail({ from, to, subject, text, html }) {
    return new Promise((resolve, reject) => {
      this.emailClient.sendMail(
        {
          from: `"iTongue" <${from}@itongue.fr>`,
          to,
          subject,
          text,
          html
        },
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
}

module.exports = new EmailService();
