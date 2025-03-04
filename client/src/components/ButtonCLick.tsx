"use client";
import React from "react";

const ButtonCLick = () => {
  const sendMigration = async () => {
    await fetch("/api/upgrade-dataset", {
      method: "POST",
    });
  };
  return (
    <div>
      <button onClick={() => sendMigration()}>Click</button>
    </div>
  );
};

export default ButtonCLick;
