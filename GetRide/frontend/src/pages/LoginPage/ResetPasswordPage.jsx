// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation, Link} from 'react-router-dom';
// import LogPage from '../../components/LogPageComps/LogPage';
// import InputWithLabel from '../../components/Input/InputWithLabel';
// import MyButton from '../../components/Button/MyButton';
// import CheckIcon from '../../assets/CheckIcon';
// import CloseIcon from '../../assets/CloseIcon';
// import EyeLook from '../../assets/eye_lookup.svg';
// import NoEyeLook from '../../assets/eye_no_lookup.svg';
// import styles from './ResetPasswordPage.module.css';

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

// const PasswordReset = () => {
//   const [email, setEmail] = useState('');
//   const [tokenExpirationTime, setTokenExpirationTime] = useState(0);
//   const [timer, setTimer] = useState(0);
//   const [message, setMessage] = useState('');
//   const [isToken, setIsToken] = useState(false);
//   const [resetToken, setResetToken] = useState(null);
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmNewPassword, setConfirmNewPassword] = useState('');
//   const [ lookNewPassword, setLookNewPassword] = useState(false);
//   const [ lookNewConfirm, setLookNewConfirm] = useState(false);
//   const [ tokenEmailCheck, setTokenEmailCheck ] = useState(false);

//   const [eightChar, setEightChar] = useState(false);
//   const [noNameEmail, setNoNameEmail] = useState(false);
//   const [numberSymbol, setNumberSymbol] = useState(false);
//   const [passMatch, setPassMatch] = useState(false);
//   const [passStrenght, setPassStrenght] = useState(false);

//   const query = useQuery();
//   const navigate = useNavigate();

//   const handleResetLink = async () => {
//     try {
//       const emailSendResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/account/passwordResetLink` , {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//         }),
//       });
//       const emailSent = await emailSendResponse.json();
//       if (emailSent) {
//         setMessage(`Password reset link sent to ${emailSent.accepted}! Please check your email.`);
//       } else {
//         setMessage(`Email was not sent to ${emailSent.rejected}`);
//       }
//     } catch (error) {
//       setMessage('');
//       console.log("This is the error: ", error);
//     }
//     };

//     const handleTokenEmailCheck = async (token) => {
//       try {
//         const userResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/account/checkResetToken/${token}` , {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const user = await userResponse.json();
//         setEmail(user.email);
//         const expirationTime = Math.floor(user.exparation - new Date().getTime()/1000);
//         setTokenExpirationTime(expirationTime);
//         setTimer(expirationTime);
//       } catch (error) {
//         console.log("This is the error: ", error);
//       }
//       };

//       const handleResetPassword = async () => {
//         try {
//           if(newPassword === confirmNewPassword) {
//             const passwordResetResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/account/resetPassword/${resetToken}` , {
//               method: 'PUT',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({
//                 newPassword,
//                 confirmNewPassword,
//               }),
//             });
//             const passwordReset = await passwordResetResponse.json();
//             if(passwordReset.status) {
//               alert(passwordReset.message);
//               navigate("/login");
//             } else {
//               alert(passwordReset.message);
//             }
//           } else {
//             alert("The passwords you entered do not match. Please try again.");
//           }
//         } catch (error) {
//           console.log("This is the error: ", error);
//         }
//         };

//     const handleLook = (e, type) => {
//       e.preventDefault();
//       if(type === "password") {
//         setLookNewPassword(!lookNewPassword);
//       } else if(type === "confirmPassword")
//         setLookNewConfirm(!lookNewConfirm);
//       };

//       useEffect(() => {
//         const token = query.get('resetToken');
//         if (token && isToken===false) {
//           setResetToken(token);
//           setIsToken(true);
//           console.log(token);
//         }
//       }, [query]);

//       useEffect(() => {
//         if (resetToken && !tokenEmailCheck) {
//           handleTokenEmailCheck(resetToken);
//           setTokenEmailCheck(true);
//         }
//       }, [resetToken, tokenEmailCheck]);

//       useEffect(() => {
//         if (tokenExpirationTime > 0 && timer > -1) {
//           const interval = setInterval(() => {
//             setTimer((prevTimer) => {
//               if (prevTimer <= 0) {
//                 clearInterval(interval);
//               }
//               return prevTimer - 1;
//             });
//           }, 1000);
//           return () => clearInterval(interval);
//         }
//       }, [tokenExpirationTime, timer]);

//     useEffect(() => {
//       (noNameEmail && eightChar && numberSymbol) ? setPassStrenght(true) : setPassStrenght(false);

//       ( newPassword.toUpperCase().includes(email.toUpperCase())) ?
//        setNoNameEmail(false) : setNoNameEmail(true);

//       /^.{8,}$/.test(newPassword) ? setEightChar(true) : setEightChar(false);

//       /[\d!@#$%^&*(),.?":{}|<>]/.test(newPassword) ? setNumberSymbol(true) : setNumberSymbol(false);

//       ((newPassword === confirmNewPassword) && newPassword ) ?  setPassMatch(true) : setPassMatch(false);

//     },[newPassword, confirmNewPassword]);

//   return (
//     <LogPage
//     logData={
//       resetToken && timer >0 ?
//       <div className={styles.password_reset_section}>
//      <h2>PASSWORD RESET</h2>
//       <span>Enter new password.</span>
//         <p>Time remaining: {Math.floor(timer / 60)} min {timer % 60 } sec</p>
//        <form  className={styles.password_reset_form} >
//        <div className={styles.password_input}>
//       <InputWithLabel
//       value={newPassword}
//       label='New Password'
//       id="newPassword"
//       onChange={(e) => setNewPassword(e.target.value)}
//       type={lookNewPassword ? "text" : "password"}
//       placeholder="********"
//       required
//       />
//       <img src={lookNewPassword ? NoEyeLook : EyeLook} onClick={(e) => handleLook(e,"password")}/>
//       </div>
//       <div className={styles.password_input}>
//       <InputWithLabel
//       value={confirmNewPassword}
//       label='Confirm new password'
//       id="confirmNewPassword"
//       onChange={(e) => setConfirmNewPassword(e.target.value)}
//       type={lookNewConfirm ? "text" : "password"}
//       placeholder="********"
//       required
//       />
//       <img src={lookNewConfirm ? NoEyeLook : EyeLook} onClick={(e) => handleLook(e,"confirmPassword")}/>
//       </div>

//       <span>{passStrenght ? <CheckIcon/> : <CloseIcon/>} Password Strength : {passStrenght ? "Strong" : "Weak"}</span> <br/>
//       <span>{noNameEmail ? <CheckIcon/> : <CloseIcon/>} Cannot contain your email address</span><br/>
//       <span>{eightChar ? <CheckIcon/> : <CloseIcon/>} At least 8 characters</span><br/>
//       <span>{numberSymbol ? <CheckIcon/> : <CloseIcon/>} Contains a number or symbol</span><br/>
//       <span >{passMatch ? <CheckIcon/> : <CloseIcon/>} Password match</span>

//       <MyButton
//       name={"Reset password"}
//       width={"100%"}
//       onClick={(e) => {e.preventDefault(), handleResetPassword()}}
//       />
//       <p>Go to<Link to="/login">Login</Link></p>
//       </form>
//       </div>
//         :
//         <div className={styles.password_reset_section}>
//      <h2>PASSWORD RESET</h2>
//      <span>Enter your email for reset link.</span>
//       <form  className={styles.password_reset_email} >
//      <InputWithLabel
//      value={email}
//      label='Email'
//      id="email"
//      onChange={(e) => setEmail(e.target.value)}
//      type="email"
//      placeholder="someone@somewhere.com"
//      required
//      />
//      <MyButton
//      name={"Send email"}
//      width={"100%"}
//      onClick={(e) => {e.preventDefault(), handleResetLink()}}
//      />
//      {message && <p >{message}</p>}
//      <p>Go to<Link to="/login">Login</Link></p>
//      </form>
//      </div>
//     }
//     />
//   )
// }

// export default PasswordReset

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link } from "react-router-dom";
import LogPage from "../../components/LogPageComps/LogPage";
import InputWithLabel from "../../components/Input/InputWithLabel";
import MyButton from "../../components/Button/MyButton";
import CheckIcon from "../../assets/CheckIcon";
import CloseIcon from "../../assets/CloseIcon";
import EyeLook from "../../assets/eye_lookup.svg";
import NoEyeLook from "../../assets/eye_no_lookup.svg";
import styles from "./ResetPasswordPage.module.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PasswordReset = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [tokenExpirationTime, setTokenExpirationTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("");
  const [isToken, setIsToken] = useState(false);
  const [resetToken, setResetToken] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [lookNewPassword, setLookNewPassword] = useState(false);
  const [lookNewConfirm, setLookNewConfirm] = useState(false);
  const [tokenEmailCheck, setTokenEmailCheck] = useState(false);

  const [eightChar, setEightChar] = useState(false);
  const [noNameEmail, setNoNameEmail] = useState(false);
  const [numberSymbol, setNumberSymbol] = useState(false);
  const [passMatch, setPassMatch] = useState(false);
  const [passStrenght, setPassStrenght] = useState(false);

  const query = useQuery();
  const navigate = useNavigate();

  const handleResetLink = async () => {
    try {
      const emailSendResponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/account/passwordResetLink`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const emailSent = await emailSendResponse.json();
      if (emailSent) {
        setMessage(
          `Password reset link sent to ${emailSent.accepted}! Please check your email.`
        );
      } else {
        setMessage(`Email was not sent to ${emailSent.rejected}`);
      }
    } catch (error) {
      setMessage("");
      console.log("This is the error: ", error);
    }
  };

  const handleTokenEmailCheck = async (token) => {
    try {
      const userResponse = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/api/account/checkResetToken/${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const user = await userResponse.json();
      setEmail(user.email);
      const expirationTime = Math.floor(
        user.exparation - new Date().getTime() / 1000
      );
      setTokenExpirationTime(expirationTime);
      setTimer(expirationTime);
    } catch (error) {
      console.log("This is the error: ", error);
    }
  };

  const handleResetPassword = async () => {
    try {
      if (newPassword === confirmNewPassword) {
        const passwordResetResponse = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/api/account/resetPassword/${resetToken}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              newPassword,
              confirmNewPassword,
            }),
          }
        );
        const passwordReset = await passwordResetResponse.json();
        if (passwordReset.status) {
          alert(passwordReset.message);
          navigate("/login");
        } else {
          alert(passwordReset.message);
        }
      } else {
        alert("The passwords you entered do not match. Please try again.");
      }
    } catch (error) {
      console.log("This is the error: ", error);
    }
  };

  const handleLook = (e, type) => {
    e.preventDefault();
    if (type === "password") {
      setLookNewPassword(!lookNewPassword);
    } else if (type === "confirmPassword") setLookNewConfirm(!lookNewConfirm);
  };

  useEffect(() => {
    const token = query.get("resetToken");
    if (token && isToken === false) {
      setResetToken(token);
      setIsToken(true);
      console.log(token);
    }
  }, [query]);

  useEffect(() => {
    if (resetToken && !tokenEmailCheck) {
      handleTokenEmailCheck(resetToken);
      setTokenEmailCheck(true);
    }
  }, [resetToken, tokenEmailCheck]);

  useEffect(() => {
    if (tokenExpirationTime > 0 && timer > -1) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(interval);
          }
          return prevTimer - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [tokenExpirationTime, timer]);

  useEffect(() => {
    noNameEmail && eightChar && numberSymbol
      ? setPassStrenght(true)
      : setPassStrenght(false);

    newPassword.toUpperCase().includes(email.toUpperCase())
      ? setNoNameEmail(false)
      : setNoNameEmail(true);

    /^.{8,}$/.test(newPassword) ? setEightChar(true) : setEightChar(false);

    /[\d!@#$%^&*(),.?":{}|<>]/.test(newPassword)
      ? setNumberSymbol(true)
      : setNumberSymbol(false);

    newPassword === confirmNewPassword && newPassword
      ? setPassMatch(true)
      : setPassMatch(false);
  }, [newPassword, confirmNewPassword]);

  return (
    <LogPage
      logData={
        resetToken && timer > 0 ? (
          <div className={styles.password_reset_section}>
            <h2>{t("passwordReset")}</h2>
            <span>{t("enterNewPassword")}</span>
            <p>
              {t("passwordTime")} {Math.floor(timer / 60)} min {timer % 60} sec
            </p>
            <form className={styles.password_reset_form}>
              <div className={styles.password_input}>
                <InputWithLabel
                  value={newPassword}
                  label={t("newPassword")}
                  id="newPassword"
                  onChange={(e) => setNewPassword(e.target.value)}
                  type={lookNewPassword ? "text" : "password"}
                  placeholder="********"
                  required
                />
                <img
                  src={lookNewPassword ? NoEyeLook : EyeLook}
                  onClick={(e) => handleLook(e, "password")}
                />
              </div>
              <div className={styles.password_input}>
                <InputWithLabel
                  value={confirmNewPassword}
                  label={t("confirmNewPassword")}
                  id="confirmNewPassword"
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  type={lookNewConfirm ? "text" : "password"}
                  placeholder="********"
                  required
                />
                <img
                  src={lookNewConfirm ? NoEyeLook : EyeLook}
                  onClick={(e) => handleLook(e, "confirmPassword")}
                />
              </div>
              <span>
                {passStrenght ? <CheckIcon /> : <CloseIcon />}{" "}
                {t("registerPageDescOne")}{" "}
                {passStrenght ? t("registerStrong") : t("registerWeak")}
              </span>{" "}
              <br />
              <span>
                {noNameEmail ? <CheckIcon /> : <CloseIcon />}{" "}
                {t("registerPageDescTwo")}
              </span>
              <br />
              <span>
                {eightChar ? <CheckIcon /> : <CloseIcon />}{" "}
                {t("registerPageDescThree")}
              </span>
              <br />
              <span>
                {numberSymbol ? <CheckIcon /> : <CloseIcon />}{" "}
                {t("registerPageDescFour")}
              </span>
              <br />
              <span>
                {passMatch ? <CheckIcon /> : <CloseIcon />}{" "}
                {t("registerPageDescFive")}
              </span>
              <MyButton
                name={t("passwordResetButton")}
                width={"100%"}
                onClick={(e) => {
                  e.preventDefault(), handleResetPassword();
                }}
              />
              <p>
                {t("loginDescTwo")}
                <Link to="/login">{t("login")}</Link>
              </p>
            </form>
          </div>
        ) : (
          <div className={styles.password_reset_section}>
            <h2>{t("passwordReset")}</h2>
            <span>{t("passwordResetDesc")}</span>
            <form className={styles.password_reset_email}>
              <InputWithLabel
                value={email}
                label={t("email")}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="someone@somewhere.com"
                required
              />
              <MyButton
                name={t("emailButton")}
                width={"100%"}
                onClick={(e) => {
                  e.preventDefault(), handleResetLink();
                }}
              />
              {message && <p>{message}</p>}
              <p>
                {t("loginDescTwo")}
                <Link to="/login">{t("login")}</Link>
              </p>
            </form>
          </div>
        )
      }
    />
  );
};

export default PasswordReset;
