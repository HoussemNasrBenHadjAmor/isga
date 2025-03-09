import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const WEB_SITE_URL =
    process.env.NEXT_PUBLIC_VERCEL_URL === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL
      : process.env.NEXT_PUBLIC_BASE_LOCALE_URL;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${WEB_SITE_URL}/sitemap.xml`,
  };
}
