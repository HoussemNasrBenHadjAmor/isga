import Link from "next/link";
import Image from "next/image";

import { DesktopNav, MobileNav } from "@/components";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center border-b-[1px]">
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
  );
}

export default Navbar;
