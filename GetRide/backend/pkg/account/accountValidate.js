const { Validator } = require("node-input-validator");

const newAccountValidate = {
    name: "required|string",
    email: "required|email",
    password: "required|string",
    phone: "number",
    profileImage: "string"
};

const updateAccountValidate = {
    name: "string",
    email: "email",
    password: "string",
    phone: "number",
    profileImage: "string"
};

const updatePasswordValidate = {
    newPassword: "required|string",
    confirmNewPassword: "required|string"
};

// ovoj validator ke bide za kontakt message od  "contact us"

// const contactMessageValidate = {
//     fullName: "required|string",
//     email: "required|string",
//     message: "required|string"
// };

const validateAccount = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    newAccountValidate,
    updateAccountValidate,
    updatePasswordValidate,
    // contactMessageValidate,
    validateAccount,
};