"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import Navbar
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function NavbarClient() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // Track route changes

  useEffect(() => {
    setIsMounted(false); // Hide navbar on route change

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 500); // Delay

    return () => clearTimeout(timeout);
  }, [pathname]); // Re-run effect on route change

  if (!isMounted) {
    return null;
  }

  return <Navbar />;
}
