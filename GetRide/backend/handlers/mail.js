const { transporter } = require("../pkg/mailer/mailer");
require("dotenv").config();
const ejs = require("ejs");
const path = require("path");

const sendContactMail = async (req, res) => {
  const { email, message } = req.body;
  try {
    const templatePath = path.join(
      __dirname,
      "..",
      "views",
      `contactMessage.ejs`
    );
    const html = await ejs.renderFile(
      templatePath,
      { email, message },
      { async: true }
    );

    await transporter.sendMail({
      from: {
        name: "Get Ride",
        address: req.body.email, 
      },
      to: "getride25@gmail.com",
      subject: `Нов контакт емаил од ${email}`,
      text: message,
      html: html,
    });
    return res.status(200).send({
      message: "Вашата порака е успешно испратена. Ќе ве контактираме наскоро",
    });
  } catch (error) {
    console.log("Error sending mail", error);
    return res.status(400).send({
      error: "Настана грешка при праќање на вашата порака. Обидете се повторно",
    });
  }
};

const sendResetEmail = async (to, subject, template, token) => {
  try {
    const templatePath = path.join(__dirname, '../views', `${template}.ejs`);

    const html = await ejs.renderFile(templatePath, {token}, { async: true });

    // Send the email
    const info = await transporter.sendMail({
      from: {
        name: "GetRide",
        address: process.env.MAIL_USER, 
      },
      to,
      subject,
      html,
  });

    console.log(`Email sent successfully. Info: ${JSON.stringify(info)}`);
    return JSON.stringify(info);
  } catch (err) {
    console.error('Error sending email:', err);
  }
};

module.exports = { 
  sendContactMail,
  sendResetEmail, };
