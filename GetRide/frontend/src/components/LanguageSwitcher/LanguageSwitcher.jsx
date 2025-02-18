import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import classes from "./LanguageSwitcher.module.css";

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
    <div className={classes.languageSwitcher}>
      {[
        { code: "MK", lang: "mk" },
        { code: "AL", lang: "sq" },
        { code: "GB", lang: "en" },
      ].map(({ code, lang }) => (
        <button
          key={lang}
          className={`${classes.languageButton} ${
            activeLang === lang ? classes.active : ""
          }`}
          onClick={() => handleLanguageChange(lang)}
        >
          <Flag code={code} style={{ width: 30, height: 20 }} />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
