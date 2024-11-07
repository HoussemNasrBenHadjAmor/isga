"use client";

import { useBackground } from "@/context/BackgroundContext";

const BackgroundImage = () => {
  const { imgSrc } = useBackground();
  const isVideo = imgSrc.endsWith(".mp4") || imgSrc.endsWith(".webm");

  return isVideo ? (
    <video
      src={imgSrc}
      controls={false}
      muted
      loop
      autoPlay
      className="w-full h-full object-cover"
    />
  ) : (
    <img
      src={imgSrc}
      className="w-full h-full object-cover opacity-10"
      alt="Background"
    />
  );
};

export default BackgroundImage;
