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
  const [language, setLanguageState] = useState<string | null>(null); // set language to null to render the null as loading until it gets synchronized with the cookies value

  // Update cookies whenever the language changes
  const setLanguage = (language: string) => {
    setLanguageState(language);
    Cookies.set("NEXT_LOCALE", language.toLocaleLowerCase(), { expires: 365 }); //with a 1-year expiry
  };

  useEffect(() => {
    const cookieLanguage = Cookies.get("NEXT_LOCALE");

    if (cookieLanguage) {
      setLanguage(cookieLanguage);
    } else {
      setLanguage("en");
      Cookies.set("NEXT_LOCALE", "en", { expires: 365 });
    }
  }, []);

  if (language === null) {
    return null;
  }

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
