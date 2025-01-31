import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar, Footer, DisableDraftMode, ScrollTop } from "@/components";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import NextTopLoader from "nextjs-toploader";

const roboto = Poppins({
  weight: "300",
  // weight: ["300", "400", "700"],
  subsets: ["latin"],
});

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
      <body className={roboto.className}>
        {/* Conditionally render VisualEditing */}
        <NextTopLoader showSpinner={false} />
        {isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
        <SanityLive />
        <Navbar />
        {children}
        <Toaster />
        <div className="pt-20">
          <Footer />
          <ScrollTop />
        </div>
      </body>
    </html>
  );
}
