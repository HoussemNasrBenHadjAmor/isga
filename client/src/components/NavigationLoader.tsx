"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/[locale]/loading";

export default function NavigationLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulated loading time
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return <Loading />; // Show loading screen before layout
  }

  return <>{children}</>;
}
