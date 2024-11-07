import React from "react";

function Landing() {
  const videoSrc =
    "https://isgaconsult.com/wp-content/uploads/2024/02/video-2160p.mp4";

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="relative w-full h-full bg-black">
        <video
          src={videoSrc}
          controls={false}
          muted
          loop
          autoPlay
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </div>
  );
}

export default Landing;
