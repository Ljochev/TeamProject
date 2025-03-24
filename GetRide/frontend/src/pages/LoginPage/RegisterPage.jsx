// import React, { useEffect, useState }  from 'react';
// import {useNavigate, Link } from 'react-router-dom';
// import LogPage from '../../components/LogPageComps/LogPage';
// import MyButton from '../../components/Button/MyButton';
// import InputWithLabel from '../../components/Input/InputWithLabel';
// import CheckIcon from '../../assets/CheckIcon';
// import CloseIcon from '../../assets/CloseIcon';
// import EyeLook from '../../assets/eye_lookup.svg';
// import NoEyeLook from '../../assets/eye_no_lookup.svg';
// import styles from './RegisterPage.module.css';

// const RegisterPage = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [editImg, setEditImg] = useState(false);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [ lookPassword, setLookPassword] = useState(false);
//   const [ lookConfirm, setLookConfirm] = useState(false);

//   const [passStrenght, setPassStrenght] = useState(false);
//   const [noNameEmail, setNoNameEmail] = useState(false);
//   const [eightChar, setEightChar] = useState(false);
//   const [numberSymbol, setNumberSymbol] = useState(false);
//   const [passMatch, setPassMatch] = useState(false);
//   const [emailAddressPattern, setEmailAddressPattern] = useState(false);

//   const navigate = useNavigate();

//     const handleLook = (e, type) => {
//       e.preventDefault();
//       if(type === "password") {
//         setLookPassword(!lookPassword);
//       } else if(type === "confirmPassword")
//         setLookConfirm(!lookConfirm);
//       };

//       const selectPicture = () => {
//         setEditImg(!editImg);
//       };

//       const handleImageUpload = (e) => {
//         if (e.target.files && e.target.files[0]) {
//           const reader = new FileReader();
//           reader.onload = (event) => {
//             setImage(event.target.result);
//           };
//           reader.readAsDataURL(e.target.files[0]);
//           setEditImg(false);
//         }
//       };

//     useEffect(() => {
//       (noNameEmail && eightChar && numberSymbol) ? setPassStrenght(true) : setPassStrenght(false);

//       (password.toUpperCase().includes(name.toUpperCase()) ||
//        password.toUpperCase().includes(email.toUpperCase())) ?
//        setNoNameEmail(false) : setNoNameEmail(true);

//       /^.{8,}$/.test(password) ? setEightChar(true) : setEightChar(false);

//       /[\d!@#$%^&*(),.?":{}|<>]/.test(password) ? setNumberSymbol(true) : setNumberSymbol(false);

//       ((password === confirmPassword) && password ) ?  setPassMatch(true) : setPassMatch(false);

//       /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ? setEmailAddressPattern(true) : setEmailAddressPattern(false);

//     },[password, confirmPassword]);

//     const registerAccount = async (e) => {
//         e.preventDefault();

//         const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//         if (!emailPattern.test(email)) {
//           alert("Please enter a valid email address.");
//           return; // Stops execution
//         }

//         if (password !== confirmPassword) {
//           alert("Passwords do not match.");
//           return;
//         }

//         try {
//           const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/account/register`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               name,
//               email,
//               password,
//               confirmPassword,
//               phone,
//               profileImage,
//             }),
//           });

//           if (!response.ok) {
//             let errorData;
//             try {
//               errorData = await response.json(); // Try parsing JSON
//             } catch {
//               errorData = { message: "An unknown error occurred." }; // Default error message
//             }

//             alert(errorData.message || "Registration failed.");
//             return; // Stops execution
//           }

//           const data = await response.json();

//           if (data.message) {
//             alert(`${email} is already taken, please proceed with login or use a different email.`);
//           } else {
//             alert(`Please check your email to verify: ${email}`);
//             navigate("/login");
//           }
//         } catch (error) {
//           console.error("This is the error: ", error.message);
//           alert("An error occurred while processing your request.");
//         }
//       };
//   return (
//      <LogPage
//     logData ={
//       <>
//      <form  className={styles.register_form} >
//        <InputWithLabel
//       value={name}
//       label={"Full Name"}
//       id="name"
//       onChange={(e) => setName(e.target.value)}
//       type="text"
//       placeholder="name"
//       required
//       />
//       <InputWithLabel
//       value={email}
//       label='Email'
//       id="email"
//       onChange={(e) => setEmail(e.target.value)}
//       type="email"
//       placeholder="someone@somewhere.com"
//       required
//       />
//       <InputWithLabel
//       value={phone}
//       style={{
//         width: "100%"
//       }}
//       label='Phone number*'
//       id="phone"
//       onChange={(e) => setPhone(e.target.value)}
//       type="text"
//       placeholder="xxx-xxx-xxx"
//       required
//       />
//       <div className={styles.password_input}>
//       <InputWithLabel
//       value={password}
//       label='Password'
//       id="password"
//       onChange={(e) => setPassword(e.target.value)}
//       type={lookPassword ? "text" : "password"}
//       placeholder="********"
//       required
//       />
//       <img src={lookPassword ? NoEyeLook : EyeLook} onClick={(e) => handleLook(e,"password")}/>
//       </div>
//       <div className={styles.password_input}>
//       <InputWithLabel
//       value={confirmPassword}
//       label='Confirm password'
//       id="confirmPassword"
//       onChange={(e) => setConfirmPassword(e.target.value)}
//       type={lookConfirm ? "text" : "password"}
//       placeholder="********"
//       required
//       />
//       <img src={lookConfirm ? NoEyeLook : EyeLook} onClick={(e) => handleLook(e,"confirmPassword")}/>
//       </div>

//       <span>{passStrenght ? <CheckIcon/> : <CloseIcon/>} Password Strength : {passStrenght ? "Strong" : "Weak"}</span> <br/>
//       <span>{noNameEmail ? <CheckIcon/> : <CloseIcon/>} Cannot contain your name or email address</span><br/>
//       <span>{eightChar ? <CheckIcon/> : <CloseIcon/>} At least 8 characters</span><br/>
//       <span>{numberSymbol ? <CheckIcon/> : <CloseIcon/>} Contains a number or symbol</span><br/>
//       <span >{passMatch ? <CheckIcon/> : <CloseIcon/>} Password match</span>

//       <MyButton
//       disabled={!(passStrenght && passMatch && emailAddressPattern)}
//       onClick={(e) => {e.preventDefault(), registerAccount()}}
//       name={"Register"}
//       width={"100%"}
//       />
//       </form>
//      <p>Already have account? <Link to="/login"> Login.</Link></p>
//       </>
//     }
//     />
// )
// }

// export default RegisterPage

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import LogPage from "../../components/LogPageComps/LogPage";
import MyButton from "../../components/Button/MyButton";
import InputWithLabel from "../../components/Input/InputWithLabel";
import CheckIcon from "../../assets/CheckIcon";
import CloseIcon from "../../assets/CloseIcon";
import EyeLook from "../../assets/eye_lookup.svg";
import NoEyeLook from "../../assets/eye_no_lookup.svg";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [editImg, setEditImg] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lookPassword, setLookPassword] = useState(false);
  const [lookConfirm, setLookConfirm] = useState(false);

  const [passStrenght, setPassStrenght] = useState(false);
  const [noNameEmail, setNoNameEmail] = useState(false);
  const [eightChar, setEightChar] = useState(false);
  const [numberSymbol, setNumberSymbol] = useState(false);
  const [passMatch, setPassMatch] = useState(false);
  const [emailAddressPattern, setEmailAddressPattern] = useState(false);

  const navigate = useNavigate();

  const handleLook = (e, type) => {
    e.preventDefault();
    if (type === "password") {
      setLookPassword(!lookPassword);
    } else if (type === "confirmPassword") setLookConfirm(!lookConfirm);
  };

  const selectPicture = () => {
    setEditImg(!editImg);
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setEditImg(false);
    }
  };

  useEffect(() => {
    noNameEmail && eightChar && numberSymbol
      ? setPassStrenght(true)
      : setPassStrenght(false);

    password.toUpperCase().includes(name.toUpperCase()) ||
    password.toUpperCase().includes(email.toUpperCase())
      ? setNoNameEmail(false)
      : setNoNameEmail(true);

    /^.{8,}$/.test(password) ? setEightChar(true) : setEightChar(false);

    /[\d!@#$%^&*(),.?":{}|<>]/.test(password)
      ? setNumberSymbol(true)
      : setNumberSymbol(false);

    password === confirmPassword && password
      ? setPassMatch(true)
      : setPassMatch(false);

    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
      ? setEmailAddressPattern(true)
      : setEmailAddressPattern(false);
  }, [password, confirmPassword]);

  const registerAccount = async (e) => {
    e.preventDefault();

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return; // Stops execution
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/account/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
            phone,
            profileImage,
          }),
        }
      );

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json(); // Try parsing JSON
        } catch {
          errorData = { message: "An unknown error occurred." }; // Default error message
        }

        alert(errorData.message || "Registration failed.");
        return; // Stops execution
      }

      const data = await response.json();

      if (data.message) {
        alert(
          `${email} is already taken, please proceed with login or use a different email.`
        );
      } else {
        alert(`Please check your email to verify: ${email}`);
        navigate("/login");
      }
    } catch (error) {
      console.error("This is the error: ", error.message);
      alert("An error occurred while processing your request.");
    }
  };
  return (
    <LogPage
      logData={
        <>
          <form className={styles.register_form}>
            <InputWithLabel
              value={name}
              label={t("fullName")}
              id="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={t("fullName")}
              required
            />
            <InputWithLabel
              value={email}
              label={t("email")}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="someone@somewhere.com"
              required
            />
            <InputWithLabel
              value={phone}
              style={{
                width: "100%",
              }}
              label={t("phone")}
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="xxx-xxx-xxx"
              required
            />
            <div className={styles.password_input}>
              <InputWithLabel
                value={password}
                label={t("password")}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type={lookPassword ? "text" : "password"}
                placeholder="********"
                required
              />
              <img
                src={lookPassword ? NoEyeLook : EyeLook}
                onClick={(e) => handleLook(e, "password")}
              />
            </div>
            <div className={styles.password_input}>
              <InputWithLabel
                value={confirmPassword}
                label={t("confirmPassword")}
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={lookConfirm ? "text" : "password"}
                placeholder="********"
                required
              />
              <img
                src={lookConfirm ? NoEyeLook : EyeLook}
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
              {eightChar ? <CheckIcon /> : <CloseIcon />}
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
              disabled={!(passStrenght && passMatch && emailAddressPattern)}
              onClick={(e) => {
                e.preventDefault(), registerAccount();
              }}
              name={t("register")}
              width={"100%"}
            />
          </form>
          <p>
            {t("registerPageDescSix")} <Link to="/login"> {t("login")}</Link>
          </p>
        </>
      }
    />
  );
};

export default RegisterPage;
