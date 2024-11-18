"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type BackgroundContextType = {
  imgSrc: string;
  setImgSrc: (src: string) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [imgSrc, setImgSrc] = useState(
    "https://isgaconsult.com/wp-content/uploads/2024/02/video-2160p.mp4"
  );

  return (
    <BackgroundContext.Provider value={{ imgSrc, setImgSrc }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};
