import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MyButton from "../Button/MyButton";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import "./FooterComp.css";

const FooterComp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <footer>
      <div className="contact-container-info">
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
        </span>

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
      </div>
    </footer>
  );
};

export default FooterComp;
