"use client";
import { useState, useEffect } from "react";

export default function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-white">
      <div className="loader"></div>
      <p className="text-gray-700 text-lg font-semibold">
        ISGA CONSULTING {dots}
      </p>
    </div>
  );
}
