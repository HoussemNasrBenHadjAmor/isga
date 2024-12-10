import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, DisableDraftMode, ScrollTop } from "@/components";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Home - Consultation ISGA Inc.",
  description:
    "ISGA Consult we have developed a range of services that are scalable, efficient and adapted to the needs, challenges and obligations of our clients. We focus on a co-creative approach, offering unparalleled skills to help you achieve your innovation, growth, and profitability objectives. About See our services What we do We focus on a co-creative […]",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
      <body>
        {/* Conditionally render VisualEditing */}

        {isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
        <SanityLive />
        <Navbar />
        {children}
        <div className="pt-20">
          <Footer />
          <ScrollTop />
        </div>
      </body>
    </html>
  );
}
