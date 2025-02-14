import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import MyButton from "../Button/MyButton";
import "./HeaderComp.css";

const HeaderComp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const name = window.localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }
  }, []);
  return (
    <header>
      <img className="header--logo" src={logo} />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Дома
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          За нас
        </NavLink>
        <NavLink
          to="/how-it-works"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Како Работи
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Контакт
        </NavLink>
      </nav>
      <div className="header--nav__buttons">
        {userName ? (
          <span className="header--welcome">Welcome, {userName}</span>
        ) : (
          <>
            <MyButton
              onClick={() => navigate("/register")}
              name={"Регистрирај се"}
            />
            <MyButton name={"Логирај се"} onClick={() => navigate("/login")} />
          </>
        )}
      </div>
    </header>
  );
};

export default HeaderComp;
