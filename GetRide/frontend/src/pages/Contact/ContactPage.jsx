import React from "react";
import { useTranslation } from "react-i18next";
import "./ContactPage.css";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
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
    </div>
  );
};

export default ContactPage;
