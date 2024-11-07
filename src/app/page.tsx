"use client";

import { useEffect } from "react";
import { useBackground } from "@/context/BackgroundContext";

import { homeText } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundImage, CommunComponent } from "@/components";

export default function Home() {
  const { setImgSrc } = useBackground();

  useEffect(() => {
    setImgSrc(
      "https://isgaconsult.com/wp-content/uploads/2024/02/video-2160p.mp4"
    );
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center flex-col min-h-screen relative w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>

        {/* Main Content */}
        <div className="bg-black gap-5 relative flex flex-col items-center my-24 lg:mt-0 lg:flex-col text-center lg:text-start justify-center lg:items-start px-5 lg:mx-auto max-w-7xl text-white">
          <h1 className="font-semibold text-xl md:text-3xl">
            {homeText.title}
          </h1>
          <h5 className="font-semibold text-md md:text-2xl">
            {homeText.subtitle}
          </h5>
          <p className="text-xs sm:text-sm">{homeText.description}</p>
          <div className="flex flex-col lg:flex-row gap-5">
            <Button
              asChild
              className="bg-[#102136] border-2 border-transparent p-5 hover:bg-[#5e3fde]"
            >
              <Link href="/about">About</Link>
            </Button>
            <Button className="border-2 p-5 hover:bg-[#5e3fde] bg-transparent">
              <Link href="/about">Our services</Link>
            </Button>
          </div>
        </div>
      </div>
      <CommunComponent>hi</CommunComponent>
    </div>
  );
}
