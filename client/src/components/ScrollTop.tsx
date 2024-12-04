"use client";

import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 100vh
      if (window.scrollY >= window.innerHeight / 4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-[#4D5D6D] fixed bottom-7 right-7 p-[13px] rounded-[3px] z-50 cursor-pointer text-white flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={scrollToTop}
    >
      <svg width="14" height="14" viewBox="0 0 20 20">
        <path
          fill="white"
          d="M10,0L9.4,0.6L0.8,9.1l1.2,1.2l7.1-7.1V20h1.7V3.3l7.1,7.1l1.2-1.2l-8.5-8.5L10,0z"
        ></path>
      </svg>
    </div>
  );
};

export default ScrollTop;
