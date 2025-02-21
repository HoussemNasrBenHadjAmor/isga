"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/UseLanguage";

export const ClientSideHtml = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();

  // Update the <html> tag's lang attribute
  useEffect(() => {
    document.documentElement.lang = language?.toLocaleLowerCase();
    document.documentElement.dir =
      language?.toLocaleLowerCase() === "ar" ? "rtl" : "ltr";
  }, [language]);

  return <>{children}</>;
};
