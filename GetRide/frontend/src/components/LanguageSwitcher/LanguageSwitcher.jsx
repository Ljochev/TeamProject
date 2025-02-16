import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language || "mk");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "mk";
    i18n.changeLanguage(savedLanguage);
    setActiveLang(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setActiveLang(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={activeLang === "mk" ? "active" : ""}
        onClick={() => handleLanguageChange("mk")}
      >
        <Flag code="MK" style={{ width: 30, height: 20 }} />
      </button>
      <button
        className={activeLang === "sq" ? "active" : ""}
        onClick={() => handleLanguageChange("sq")}
      >
        <Flag code="AL" style={{ width: 30, height: 20 }} />
      </button>
      <button
        className={activeLang === "en" ? "active" : ""}
        onClick={() => handleLanguageChange("en")}
      >
        <Flag code="GB" style={{ width: 30, height: 20 }} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
