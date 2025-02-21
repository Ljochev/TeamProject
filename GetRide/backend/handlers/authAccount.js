const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



const {
    newAccountValidate,
    updateAccountValidate,
    updatePasswordValidate,
    // contactMessageValidate,
    validateAccount,
} = require("../pkg/account/accountValidate");

const {
    createAccount,
    getAccountByEmail,
    getAccountById,
    updateAccount,
    deleteAccount,
} = require("../pkg/account/account");

const register = async (req, res) => {

    try {
        // ova ke bide validator za input polinjata
        // await validateAccount(req.body, newAccountValidate);
        const emailExist = await getAccountByEmail(req.body.email);
    if(emailExist) {
        return res.status(400).send({ message: "Account with this email already exists!" });
    }
    if (req.body.password !== req.body.confirmPassword) {
        return res
          .status(400)
          .send({ message: "Confirm password is not the same as password!" });
      }
      req.body.password = bcrypt.hashSync(req.body.password); // password is encoded and its unreadable for human
      const acc = await createAccount(req.body);
      return res.status(201).send(acc);

    } catch ( err ) {
        console.log(err);
        return res.status(500).send({ error: "Internal Server Error" });
      };
};


const login = async (req, res) => {
    try{
    const {email, password} = req.body;
    const account = await getAccountByEmail(email);
    if(!account) {
      return res.status(400).send("Account not found!");
    }
    if (!bcrypt.compareSync(password, account.password)) {
      return res.status(400).send({ message: "Wrong password"});
    }
    const payload = {
      name: account.name,
      email: account.email,
      id: account._id,
      exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60, // exparation 7 days
    };
    const token = jwt.sign(payload, `${process.env.jwt_secret}`); // jwt token is created
    return res.status(200).send({token});
  } catch(err) {
    console.log(err);
    res.status(err.status).send(err.error);
  };
  };


  const updateUserAccount =  async (req, res) => {
    try {
        // tuka ke bide validacija na podatoci za update
    //   await validateAccount(req.body, updateAccountValidate);
      let updatedAccount = await getAccountById(req.auth.id);
      if(updatedAccount) 
        { 
          await updateAccount(req.auth.id, req.body);
          updatedUser = await getAccountById(req.auth.id);
        return res.status(200).send(updatedUser); 
        } else { 
          return res.status(400).send("Account not found!"); 
        }
    } catch (err) {
    console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  };  

  const resetAccountPassword = async (req, res) => {
    try {
        // ova ke bide validacija na reset password
    //   await validateAccount(req.body, updatePasswordValidate);
      const {newPassword, confirmNewPassword} = req.body;

      const key = crypto.createHash('sha512').update(process.env.aes_256_secret).digest('hex').substring(0,32);
        const encIv = crypto.createHash('sha512').update(process.env.secretIV).digest('hex').substring(0,16);
        
            const buff = Buffer.from(req.params.resetToken, 'base64');
            const  newEncryptedData = buff.toString('utf-8');
            const decipher = crypto.createDecipheriv(process.env.encMethod, key, encIv);
            const decoded =  decipher.update(newEncryptedData, 'hex', 'utf8') + decipher.final('utf8');

            const decodedParsed = JSON.parse(decoded);

            if (decodedParsed && decodedParsed.exp + 30 >= new Date().getTime()/1000) {
              if (newPassword !== confirmNewPassword) {
                return res
                  .status(422)
                  .send({ status: false,  message: "The passwords you entered do not match. Please try again." });
              } else {
              const user = await getAccountById(decodedParsed.id);
              if (bcrypt.compareSync(newPassword, user.password)) {
                return res
                  .status(422)
                  .send({ status: false,  message: "New password cannot be the same as the old password! try again!" });
              }
                const newPasswordReset = bcrypt.hashSync(newPassword); // password is encoded and its unreadable for human
                await updateAccount(decodedParsed.id,{password: newPasswordReset});
                return res
                .status(200)
                .send({ status: true,  message: "Password has been updated, please login!" });
              }
            }
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  };

  const deleteUserAccount = async (req, res) => {
    try {
      const account = await getAccountById(req.body.id);
      // check if there is Account registered with this email
      if(account) {
        await deleteAccount(account._id);
        return res.status(200).send({message: `Account with email: ${account.email} was deleted`});
      } else {
        return res.status(400).send("account not found!");
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  };  

  const getUserAccountById = async (req, res) => {
    try {
      const account = await getAccountById(req.params._id);
      if(account) {
        return res.status(200).send(account);
      } else {
        return res.status(400).send("Account not found!");
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  };

  const checkEmail = async (req, res) => {
    const {email} = req.body;
    try {
      const existsEmail = await getAccountByEmail(email);
      // check if there is user registered with this email
      if (existsEmail) {
        return res.status(200).send({ message: true});
      } else {
        return res.status(200).send({ message: false});
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  };

  module.exports = {
    register,
    login,
    checkEmail,
    updateUserAccount,
    resetAccountPassword,
    deleteUserAccount,
    getUserAccountById,
  };