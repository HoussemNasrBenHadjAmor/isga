"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState(
    Cookies.get("language") || "En"
  ); // Default language

  // Update cookies whenever the language changes
  const setLanguage = (language: string) => {
    setLanguageState(language);
    Cookies.set("language", language, { expires: 365 }); //with a 1-year expiry
  };

  useEffect(() => {
    // Ensure the language cookie is set when the app loads
    if (!Cookies.get("language")) {
      Cookies.set("language", "En", { expires: 365 });
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
