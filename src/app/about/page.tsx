"use client";

import { useEffect } from "react";
import { useBackground } from "@/context/BackgroundContext";

const page = () => {
  const { setImgSrc } = useBackground();

  useEffect(() => {
    setImgSrc(
      "https://isgaconsult.com/wp-content/uploads/2024/02/businessman-big-office-scaled.jpg"
    );
  }, []);
  return (
    <div>
      <p>about</p>
    </div>
  );
};

export default page;
