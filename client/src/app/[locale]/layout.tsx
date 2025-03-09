import type { Metadata } from "next";
// import { Suspense } from "react";
import { VisualEditing } from "next-sanity";
import { SanityLive } from "@/sanity/lib/live";
import { LanguageProvider } from "@/context/UseLanguage";
import { draftMode } from "next/headers";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import {
  Footer,
  DisableDraftMode,
  ScrollTop,
  Navbar,
  // NavbarClient,
} from "@/components";

// import Loading from "@/app/[locale]/loading";

import "./globals.css";

const roboto = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Consultation ISGA Inc.",
  description:
    "ISGA Consult we have developed a range of services that are scalable, efficient and adapted to the needs, challenges and obligations of our clients.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const messages = await getMessages();
  const { isEnabled } = await draftMode();
  const { locale } = await params;

  type Locale = "en" | "fr" | "ar";

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            {/* <Suspense fallback={<Loading />}> */}
            {/* <NavigationLoader> */}
            <NextTopLoader showSpinner={false} />
            {isEnabled && (
              <>
                <DisableDraftMode />
                <VisualEditing />
              </>
            )}
            <SanityLive />
            {/* <Suspense fallback={null}> */}
            <Navbar /> {/* ✅ Navbar loads only after hydration */}
            {/* </Suspense> */}
            {children}
            <Toaster />
            <div className="pt-20">
              <Footer />
              <ScrollTop />
            </div>
            {/* </NavigationLoader> */}
            {/* </Suspense> */}
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
