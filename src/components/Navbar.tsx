import Link from "next/link";
import Image from "next/image";

import { DesktopNav, MobileNav } from "@/components";

function Navbar() {
  return (
    <div className="px-5 bg-transparent fixed w-full z-50 top-0">
      <div className="flex flex-row justify-between items-center border-b-[1px] border-slate-500 text-white max-w-7xl md:mx-auto">
        <Link href="/">
          <Image
            src="https://isgaconsult.com/wp-content/uploads/2024/02/988717_689485904413443_2091433604_n-removebg-preview.png"
            width={180}
            height={180}
            alt="logo_web_site"
          />
        </Link>

        <DesktopNav />

        <MobileNav />
      </div>
    </div>
  );
}

export default Navbar;
