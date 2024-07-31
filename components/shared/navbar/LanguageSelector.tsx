"use client";

import React, { useState, useEffect } from "react";

const languages = {
  en: "English",
  es: "Spanish",
  hi: "Hindi",
  pt: "Portuguese",
  zh: "Chinese",
  fr: "French",
};

const colorMap: { [key: string]: string } = {
  hi: "blue",
  zh: "green",
  fr: "yellow",
  en: "white",
  es: "white",
  pt: "white",
};

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleLanguageChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const lang = event.target.value;
    setSelectedLang(lang);

    changeBackgroundColor(lang);
  };

  const changeBackgroundColor = (lang: string) => {
    document.body.style.backgroundColor = colorMap[lang] || "white";
  };

  return (
    <select onChange={handleLanguageChange} value={selectedLang}>
      {Object.entries(languages).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
