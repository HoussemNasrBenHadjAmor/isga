import { BackgroundImage } from "@/components";
import React from "react";

const page = () => {
  const url =
    "https://isgaconsult.com/wp-content/uploads/2024/02/app-woman-white-solution-closeup-two-min-scaled.jpg";
  return (
    <>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage url={url} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>
        {/* Main Content */}
        {/* <Landing data={homeText} /> */}
      </div>
    </>
  );
};

export default page;
