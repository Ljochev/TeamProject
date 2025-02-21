const mongoose = require("mongoose");

const accoutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    profileImage: {
      type: String,
      default: '',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("Account", accoutSchema, "account");

const createAccount = async (account) => {
  return await new Account(account).save();
};

const getAccountByEmail = async (email) => {
  return await Account.findOne({ email });
};

const getAccountById = async (id) => {
  return await Account.findOne({ _id: id });
};

const updateAccount = async (id, data) => {
  return await Account.updateOne({ _id: id }, data);
};

const deleteAccount = async (id) => {
  return await Account.deleteOne({ _id: id });
};

module.exports = {
  createAccount,
  getAccountByEmail,
  getAccountById,
  updateAccount,
  deleteAccount,
};
