"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { DesktopNav, MobileNav } from "@/components";

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);

  const navUnderEighty = "text-white transition-all ease-in-out duration-300";

  const navBiggerThanEighty =
    "text-black bg-white transition-all ease-in-out duration-300 shadow-lg";

  const imgUnder =
    "https://isgaconsult.com/wp-content/uploads/2024/02/988717_689485904413443_2091433604_n-removebg-preview.png";
  const imgBellow =
    "https://isgaconsult.com/wp-content/uploads/2024/02/image-1.png";

  const changeNav = () => {
    setScrollNav(window.scrollY >= 90);
  };

  useEffect(() => {
    // Check scroll position on initial load
    changeNav();

    // Set up scroll event listener
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, [scrollNav]);

  return (
    <div className="fixed bg-transparent w-full z-[80] top-0">
      <div
        className={`${scrollNav ? navBiggerThanEighty : navUnderEighty} px-5`}
      >
        <div
          className={`
          flex flex-row justify-between h-28 items-center max-w-7xl md:mx-auto
          ${!scrollNav && "border-b-[1px] border-slate-500"}
          `}
        >
          <Link href="/">
            <Image
              src={`${scrollNav ? imgUnder : imgBellow}`}
              width={180}
              height={180}
              className="h-auto w-auto"
              alt="logo_web_site"
            />
          </Link>

          <DesktopNav />

          <MobileNav />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
