import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./AboutUsPage.css";
import MyButton from "../../components/Button/MyButton";
import AboutUsCard from "../../components/AboutUs/AboutUsCard";
import about from "../../assets/about.png";
import mission from "../../assets/mission.png";
import affording from "../../assets/affording.png";
import ecology from "../../assets/ecology.png";
import flexibility from "../../assets/flexibility.png";
import security from "../../assets/security.png";

const AboutUsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="aboutContainer">
      <div className="aboutOverlay">
        <section className="aboutFirst">
          <div>
            <h1>{t("aboutUs")}</h1>
            {/* <p>{t("welcome")}</p> */}
            <p dangerouslySetInnerHTML={{ __html: t("welcome") }} />
          </div>
          <img src={about} alt="about" className="aboutImg" />
        </section>

        <section className="missionSection">
          <img src={mission} alt="mission" className="missionImg" />
          <div>
            <h3>{t("missionTitle")}</h3>
            <p>{t("missionDescription")}</p>
          </div>
        </section>

        <section className="chooseUs">
          <h3>{t("whyChooseUs")}</h3>
          <div className="reasons">
            <AboutUsCard
              img={ecology}
              title={t("ecology")}
              desc={t("ecologyDescription")}
            />
            <AboutUsCard
              img={affording}
              title={t("affording")}
              desc={t("affordingDescription")}
            />
            <AboutUsCard
              img={flexibility}
              title={t("flexibility")}
              desc={t("flexibilityDescription")}
            />
            <AboutUsCard
              img={security}
              title={t("security")}
              desc={t("securityDescription")}
            />
          </div>
        </section>

        <div className="ourFuture">
          <section className="ourStory">
            <h3>{t("ourStory")}</h3>
            <p dangerouslySetInnerHTML={{ __html: t("ourStoryDescription") }} />
          </section>

          <section className="joinMovement">
            <h3>{t("joinMovement")}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t("joinMovementDescription") }}
            />
            <div className="ctaButton">
              <MyButton
                type="submit"
                name={t("ctaButton")}
                onClick={() => navigate("/register")}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
