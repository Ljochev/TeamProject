import React, { useState } from "react";
import MyButton from "../../components/Button/MyButton";
import ModalCard from "../../components/Modal/ModalCard";
import { useTranslation } from "react-i18next";
import classes from "./ContactPage.module.css";

const ContactPage = () => {
  const { t } = useTranslation();
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
        "http://localhost:3000/api/send-contact-mail",
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
    <div className={classes.contactContainer}>
      <form onSubmit={handleSubmit}>
        <h4>{t("question")}</h4>
        <div className={classes.contactForm}>
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
        <div className={classes.contactButton}>
          <MyButton
            type="submit"
            name={t("sendMessage")}
            onClick={handleSubmit}
            disabled={isSubmitting}
          />
        </div>
      </form>

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
