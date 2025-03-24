import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import logoImg from "../../assets/logo.png";
import classes from "./FooterComp.module.css";

const FooterComp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <footer className={classes.footer}>
      <div>
        <img src={logoImg} alt="Get Ride" className={classes.logo} />
      </div>
      <div className={classes.navContainer}>
        <h4>{t("link")}</h4>
        <nav className={classes.footerNav}>
          <ul className={classes.footerNavItems}>
            <li>
              <Link to="/login" className={classes.footerNavLink}>
                {t("login")}
              </Link>{" "}
            </li>
            <li>
              <Link to="/register" className={classes.footerNavLink}>
                {t("register")}
              </Link>{" "}
            </li>

            <li>
              <Link to="/about-us" className={classes.footerNavLink}>
                {t("aboutUs")}
              </Link>{" "}
            </li>
            <li>
              <Link to="/how-it-works" className={classes.footerNavLink}>
                {t("howItWorks")}
              </Link>{" "}
            </li>
            <li>
              <Link to="/contact" className={classes.footerNavLink}>
                {t("contact")}
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes.social}>
        <h4>{t("connectWithUs")} </h4>
        <Link to="https://www.linkedin.com" target="_blank">
          <img src={linkedin} alt="LinkedIn" />
        </Link>
        <Link to="https://www.twitter.com" target="_blank">
          <img src={twitter} alt="Twitter" />
        </Link>
        <Link to="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="Facebook" />
        </Link>
      </div>
      <p className={classes.copyright}>Copyright 2025. {t("rights")}</p>
      {/* <div className="contact-container-info">
        <h4>{t("contact")}</h4>
        <span>
          📩 <strong>{t("writeToUs")} </strong>
          support@getrideapp.com
        </span>
        <span>
          📱 <strong>{t("connectWithUs")} </strong>
          <Link to="https://www.linkedin.com" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </Link>
          <Link to="https://www.twitter.com" target="_blank">
            <img src={twitter} alt="Twitter" />
          </Link>
          <Link to="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="Facebook" />
          </Link>
        </span> */}

      {/* <h4>Контакт</h4>
        <span>
          📩 <strong>Пишете ни на: </strong>
          support@getrideapp.com
        </span>
        <span>
          📱 <strong>Поврзете се со нас: </strong>
          <Link to="https://www.linkedin.com" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </Link>
          <Link to="https://www.twitter.com" target="_blank">
            <img src={twitter} alt="Twitter" />
          </Link>
          <Link to="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="Facebook" />
          </Link>
        </span>
        <div className="contact-container-button">
          <MyButton
            onClick={() => navigate("/how-it-works")}
            name={"Како работи?"}
          />
        </div> */}
      {/* </div> */}
    </footer>
  );
};

export default FooterComp;
