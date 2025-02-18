// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import logo from "../../assets/logo.png";
// import MyButton from "../Button/MyButton";
// import "./HeaderComp.css";

// const HeaderComp = () => {
//   const { i18n } = useTranslation();
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState("");
//   useEffect(() => {
//     const name = window.localStorage.getItem("userName");
//     if (name) {
//       setUserName(name);
//     }
//   }, []);
//   return (
//     <header>
//       <img className="header--logo" src={logo} />
//       <nav>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link"
//           }
//         >
//           Дома
//         </NavLink>
//         <NavLink
//           to="/about-us"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link"
//           }
//         >
//           За нас
//         </NavLink>
//         <NavLink
//           to="/how-it-works"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link"
//           }
//         >
//           Како Работи
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link"
//           }
//         >
//           Контакт
//         </NavLink>
//       </nav>
//       <div className="header--nav__buttons">
//         {userName ? (
//           <span className="header--welcome">Welcome, {userName}</span>
//         ) : (
//           <>
//             <MyButton
//               onClick={() => navigate("/register")}
//               name={"Регистрирај се"}
//             />
//             <MyButton name={"Логирај се"} onClick={() => navigate("/login")} />
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default HeaderComp;

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import MyButton from "../Button/MyButton";
import classes from "./HeaderComp.module.css";

const HeaderComp = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "");
    i18n.changeLanguage(localStorage.getItem("language") || "mk");
    setIsLoading(false);
  }, [i18n]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <header className={classes.header}>
      <img className={classes.headerLogo} src={logo} alt="Logo" />
      <nav className={classes.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${classes.navLink} ${classes.activeNavLink}`
              : classes.navLink
          }
        >
          {t("home")}
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? `${classes.navLink} ${classes.activeNavLink}`
              : classes.navLink
          }
        >
          {t("aboutUs")}
        </NavLink>
        <NavLink
          to="/how-it-works"
          className={({ isActive }) =>
            isActive
              ? `${classes.navLink} ${classes.activeNavLink}`
              : classes.navLink
          }
        >
          {t("howItWorks")}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${classes.navLink} ${classes.activeNavLink}`
              : classes.navLink
          }
        >
          {t("contact")}
        </NavLink>
      </nav>
      <div className={classes.headerButtons}>
        {userName ? (
          <span className="headerWelcome">
            {t("welcoming", { name: userName })}
          </span>
        ) : (
          <>
            <MyButton
              onClick={() => navigate("/register")}
              name={t("register")}
            />
            <MyButton name={t("login")} onClick={() => navigate("/login")} />
          </>
        )}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default HeaderComp;
