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
    if (window.scrollY >= 90) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  });

  return (
    <div className="fixed bg-transparent w-full z-50 top-0">
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
