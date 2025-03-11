import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = language;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // This typically corresponds to the `[locale]` segment
//   let locale = await requestLocale;

//   type Locale = "en" | "fr" | "ar";

//   // Ensure that a valid locale is used
//   if (!locale || !routing.locales.includes(locale as Locale)) {
//     locale = routing.defaultLocale;
//   }

//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });

// // import { getRequestConfig } from "next-intl/server";
// // import { routing } from "./routing";
// // import { cookies } from "next/headers"; // Import cookies from next/headers

// // export default getRequestConfig(async () => {
// //   type Locale = "en";
// //   let locale: string;

// //   // Check if NEXT_LOCALE cookie exists
// //   const cookieStore = await cookies();
// //   const nextLocaleCookie = cookieStore.get("NEXT_LOCALE");

// //   if (
// //     nextLocaleCookie &&
// //     routing.locales.includes(nextLocaleCookie.value as Locale)
// //   ) {
// //     // Use the locale from the cookie if it's valid
// //     locale = nextLocaleCookie.value;
// //   } else {
// //     // Fallback to the default locale if the cookie is not present or invalid
// //     locale = routing.defaultLocale;
// //   }

// //   return {
// //     locale,
// //     messages: (await import(`../../messages/${locale}.json`)).default,
// //   };
// // });
