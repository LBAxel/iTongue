/**
 * @file Send welcome email to users with their activation link
 */

const { client } = require("../../../redis");
const template = require("../templates/activateAccount");
const jwt = require("jsonwebtoken");
const EmailService = require("../transporter");

client.on("message", async function (_, message) {
  const payload = JSON.parse(message);
  const activatePath = jwt.sign(payload.email, process.env.ACTIVATE_USER_REGISTRATION_TOKEN);
  const activateLink = "http://localhost:3000/activate/" + activatePath;

  const mailOptions = {
    from: "bienvenue",
    to: payload.email,
    subject: template.getSubject(payload.firstname),
    text: template.getPlain(payload.firstname, activateLink),
    html: template.getHtml(payload.firstname, activateLink)
  };

  try {
    EmailService.sendMail(mailOptions);
    console.log(`Email sent to: ${payload.email}`);
  } catch (error) {
    console.log(error);
  }
});

client.subscribe("welcome");
