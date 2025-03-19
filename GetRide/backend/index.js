const express = require("express");
const cors = require("cors");
const path = require("path");
const { expressjwt: jwt } = require("express-jwt");

const {
  register,
  login,
  updateUserAccount,
  passwordLink,
  checkResetEmail,
  resetAccountPassword,
  deleteUserAccount,
  getUserAccountById,
  checkEmail,
} = require("./handlers/authAccount.js");
const { sendContactMail } = require("./handlers/mail.js");

require("dotenv").config();
require("./pkg/database/config");

const app = express();
// ovie ke bidat upotrebeni koga ke pravime password reset preku email
// app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  jwt({
    secret: process.env.jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // routes that do not require authentication
      "/api/account/register",
      "/api/account/login",
      "/api/account/checkEmail",
      "/api/send-contact-mail",
      "/api/account/passwordResetLink",
      // ruta za contact message
      // "/api/contactMessage",
      { url: /^\/api\/account\/checkResetToken\/.*/, methods: ["GET"] },
      { url: /^\/api\/account\/resetPassword\/.*/, methods: ["PUT"] },
    ],
  })
);

// registration, authentication, and authorization routes
app.post("/api/account/register", register);
app.post("/api/account/login", login);
app.put("/api/account/update", updateUserAccount);
app.post("/api/account/checkEmail", checkEmail);
app.post("/api/send-contact-mail", sendContactMail);
// Password reset routes
app.post("/api/account/passwordResetLink", passwordLink);
app.get("/api/account/checkResetToken/:resetToken", checkResetEmail);
app.put("/api/account/resetPassword/:resetToken", resetAccountPassword);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is up on ${process.env.PORT}`);
});
