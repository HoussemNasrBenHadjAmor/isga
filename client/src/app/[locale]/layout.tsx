import type { Metadata } from "next";
import { VisualEditing } from "next-sanity";
import { SanityLive } from "@/sanity/lib/live";
import { LanguageProvider } from "@/context/UseLanguage";
import { draftMode } from "next/headers";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Navbar, Footer, DisableDraftMode, ScrollTop } from "@/components";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const messages = await getMessages();
  const { isEnabled } = await draftMode();
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
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
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
