// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import "./AboutUsPage.css";
// import MyButton from "../../components/Button/MyButton";
// import ModalCard from "../../components/Modal/ModalCard";
// import AboutUsCard from "../../components/AboutUs/AboutUsCard";
// import about from "../../assets/about.png";
// import mission from "../../assets/mission.png";
// import affording from "../../assets/affording.png";
// import ecology from "../../assets/ecology.png";
// import flexibility from "../../assets/flexibility.png";
// import security from "../../assets/security.png";
// import linkedin from "../../assets/linkedin.svg";
// import facebook from "../../assets/facebook.svg";
// import twitter from "../../assets/twitter.svg";

// const AboutUsPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     message: "",
//   });
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     if (!formData.email || !formData.message) {
//       setModalMessage("All fields are required.");
//       setShowModal(true);
//       return false;
//     }
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.email)) {
//       setModalMessage("Please enter a valid email address.");
//       setShowModal(true);
//       console.log("Validation failed: Invalid email address.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/email/receive-email",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Error response:", errorData);
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();

//       setModalMessage("Вашата порака е успешно испратена!");
//       setShowModal(true);
//       setFormData({ email: "", message: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setModalMessage(
//         "Настана грешка при испраќањето на вашата порака. Обидете се повторно подоцна."
//       );
//       setShowModal(true);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };
//   return (
//     <div className="about-us-container">
//       <div className="about-us-overlay">
//         <section className="about-us-first">
//           <div>
//             <h1>За Нас</h1>
//             <p>
//               Добредојдовте во <strong>Get Ride</strong>, платформа која ја
//               менува иднината на патувањата. Основанa со визија за намалување на
//               сообраќајниот метеж и минимизирање на загадувањето, ние сме
//               посветени на развој на ефикасни и иновативни решенија кои го
//               прават патувањето поедноставно и поекономично.
//             </p>
//           </div>
//           <img src={about} alt="about" className="about-us-img" />
//         </section>

//         <section className="mission-section">
//           <img src={mission} alt="mission" className="mission-img" />
//           <div>
//             <h3>Нашата Мисија</h3>
//             <p className="mission-section-first">
// Нашата мисија е да создадеме транспортен систем кој ги поврзува
// патниците и возачите. Со поврзување на возачи со слободни седишта
// и патници со слични дестинации, не само што се намалуваат
// трошоците за патување, туку и се создаваат нови социјални контакти
// и значително се придонесува во заштитата на животната средина.
//             </p>
//           </div>
//         </section>

//         <section className="why-choose-us">
//           <h3>Зошто да не изберете нас?</h3>
//           <div className="reasons">
//             <AboutUsCard
//               img={ecology}
//               title="Еколошката свест на прво место"
//               desc="Секое споделено возење е чекор кон почиста планета и
//           подобар свет за идните генерации."
//             />
//             <AboutUsCard
//               img={affording}
//               title="Прифатливи патувања"
//               desc="Зачувајте средства на гориво, паркинг и одржување на возилото со
//           споделување на трошоците со останатите патници."
//             />
//             <AboutUsCard
//               img={flexibility}
//               title="Удобно и флексибилно"
//               desc="Без разлика дали патувате секојдневно или планирате еднократно
//           патување, нашата платформа нуди флексибилни опции кои се
//           прилагодуваат на вашиот распоред."
//               image="path-to-your-image3.jpg"
//             />
//             <AboutUsCard
//               img={security}
//               title="Безбедно и сигурно"
//               desc="Вашата безбедност и доверба се на прво место.
//             Користиме ригорозен процес на верификација и транспарентен систем на оценки за да ви гарантираме сигурност и квалитет."
//             />
//           </div>
//         </section>

//         <div className="our-future">
//           <section className="our-story">
//             <h3>Нашата приказна</h3>
//             <p>
//               Во светот, споделувањето на патувањата е стандардна пракса, а ние
//               со <strong>Get Ride</strong> го воведуваме овој концепт во нашиот
//               регион. Нашата иницијатива започна со едноставна, но моќна идеја:
//               зошто да патувате сами кога можете да заштедите средства, да го
//               намалите негативното влијание врз животната средина и да
//               запознаете нови луѓе? Во време на дигитална поврзаност, кога
//               комуникацијата и меѓусебните врски играат клучна улога, ние
//               создаваме иновативен начин за поврзување на патниците и возачите,
//               што овозможување на поеколошки и економски исплатлив начин на
//               патување.
//             </p>
//           </section>

//           <section className="join-movement">
//             {/* <h2>GetRide: Заедно ја обликуваме иднината на патувањата</h2> */}
//             <h3>Со Get Ride патуваме кон иднината</h3>
//             <p>
//               Бидете дел од промената! Без разлика дали сте возач со
//               дополнително седиште или патник кој бара удобен начин на патување,{" "}
//               <strong>Get Ride</strong> Ви овозможува лесно да се поврзете и
//               патувате заедно. Заедно можеме да го намалиме сообраќајниот метеж,
//               да го намалиме загадувањето и да создадеме посилни и поцврсти
//               врски меѓу луѓето.
//             </p>
//             <div className="cta-button">
//               <MyButton
//                 type="submit"
//                 name={"Пријавете се и патувајте со нас!"}
//                 onClick={() => navigate("/sign-up")}
//               />
//             </div>
//           </section>
//         </div>
//         <div className="contact-container">
//           <section className="contact-container-form">
//             <form onSubmit={handleSubmit}>
//               <h4> Имате прашања или предлози? Сакаме да слушнеме од вас!</h4>
//               <div className="contact-container-form-input">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Вашата емаил адреса"
//                   autoComplete="email"
//                   required
//                 />
//                 <textarea
//                   className="contact-container-form-textarea"
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Како можеме да Ви помогнеме?"
//                   autoComplete="off"
//                   required
//                 ></textarea>
//               </div>
//               <div className="contact-container-button">
//                 <MyButton
//                   type="submit"
//                   name={"Испрати"}
//                   disabled={isSubmitting}
//                   onClick={handleSubmit}
//                 />
//               </div>
//             </form>
//           </section>
//           {showModal && (
//             <ModalCard
//               show={showModal}
//               message={modalMessage}
//               closeModal={closeModal}
//             />
//           )}

//           <section className="contact-container-info">
//             <h4>Контакт</h4>
//             <span>
//               📩 <strong>Пишете ни на: </strong>
//               support@getrideapp.com
//             </span>
//             <span>
//               📱 <strong>Поврзете се со нас: </strong>
//               <Link to="https://www.linkedin.com" target="_blank">
//                 <img src={linkedin} alt="LinkedIn" />
//               </Link>
//               <Link to="https://www.twitter.com" target="_blank">
//                 <img src={twitter} alt="Twitter" />
//               </Link>
//               <Link to="https://www.facebook.com" target="_blank">
//                 <img src={facebook} alt="Facebook" />
//               </Link>
//             </span>
//             {/* <div className="contact-container-button">
//               <MyButton
//                 onClick={() => navigate("/how-it-works")}
//                 name={"Како работи?"}
//               />
//             </div> */}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "./AboutUsPage.css";
import MyButton from "../../components/Button/MyButton";
import ModalCard from "../../components/Modal/ModalCard";
import AboutUsCard from "../../components/AboutUs/AboutUsCard";
import about from "../../assets/about.png";
import mission from "../../assets/mission.png";
import affording from "../../assets/affording.png";
import ecology from "../../assets/ecology.png";
import flexibility from "../../assets/flexibility.png";
import security from "../../assets/security.png";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

const AboutUsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.email || !formData.message) {
      setModalMessage(t("modalError"));
      setShowModal(true);
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setModalMessage(t("modalError"));
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/email/receive-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setModalMessage(t("modalSuccess"));
      setShowModal(true);
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setModalMessage(t("modalError"));
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="about-us-container">
      <div className="about-us-overlay">
        <section className="about-us-first">
          <div>
            <h1>{t("aboutUs")}</h1>
            {/* <p>{t("welcome")}</p> */}
            <div dangerouslySetInnerHTML={{ __html: t("welcome") }} />
          </div>
          <img src={about} alt="about" className="about-us-img" />
        </section>

        <section className="mission-section">
          <img src={mission} alt="mission" className="mission-img" />
          <div>
            <h3>{t("missionTitle")}</h3>
            <p>{t("missionDescription")}</p>
          </div>
        </section>

        <section className="why-choose-us">
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

        <div className="our-future">
          <section className="our-story">
            <h3>{t("ourStory")}</h3>
            <p>{t("ourStoryDescription")}</p>
          </section>

          <section className="join-movement">
            <h3>{t("joinMovement")}</h3>
            <p>{t("joinMovementDescription")}</p>
            <div className="cta-button">
              <MyButton
                type="submit"
                name={t("ctaButton")}
                onClick={() => navigate("/sign-up")}
              />
            </div>
          </section>
        </div>

        <div className="contact-container">
          <section className="contact-container-form">
            <form onSubmit={handleSubmit}>
              <h4>{t("question")}</h4>
              <div className="contact-container-form-input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("emailPlaceholder")}
                  autoComplete="email"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t("messagePlaceholder")}
                  required
                ></textarea>
              </div>
              <div className="contact-container-button">
                <MyButton
                  type="submit"
                  name={t("sendMessage")}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </section>
          {showModal && (
            <ModalCard
              show={showModal}
              message={modalMessage}
              closeModal={closeModal}
            />
          )}

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

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
