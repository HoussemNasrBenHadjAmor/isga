import { getLocationsSlugsPage, getNewsSlugsPage } from "@/sanity/lib/pages";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const WEB_SITE_URL =
    process.env.NEXT_PUBLIC_VERCEL_URL === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL
      : process.env.NEXT_PUBLIC_BASE_LOCALE_URL;

  const locationSlugsPage = await getLocationsSlugsPage();
  const newsSlugsPage = await getNewsSlugsPage();

  const locationSlugs = locationSlugsPage.length
    ? locationSlugsPage[0]?.slugs
    : [];

  const newsSlugs = newsSlugsPage?.length ? newsSlugsPage : [];

  return [
    { url: `${WEB_SITE_URL}`, priority: 1 },
    { url: `${WEB_SITE_URL}/about` },
    { url: `${WEB_SITE_URL}/carrers` },
    { url: `${WEB_SITE_URL}/contact` },
    { url: `${WEB_SITE_URL}/services/managed-services` },
    { url: `${WEB_SITE_URL}/services/application-service-and-solutions` },
    { url: `${WEB_SITE_URL}/services/artificial-intelligence` },
    { url: `${WEB_SITE_URL}/services/consulting-service` },
    { url: `${WEB_SITE_URL}/services/cybersecurity-enterprise-risk` },
    { url: `${WEB_SITE_URL}/services/project-program-management` },
    { url: `${WEB_SITE_URL}/services/technologies-platforms` },
    { url: `${WEB_SITE_URL}/industries/financial-services` },
    { url: `${WEB_SITE_URL}/industries/government-public-sector` },
    { url: `${WEB_SITE_URL}/industries/insurance` },
    { url: `${WEB_SITE_URL}/industries/telecommunications` },
    ...locationSlugs.map(({ slug }) => ({
      url: `${WEB_SITE_URL}/locations/${slug}`,
    })),
    ...newsSlugs.map(({ slug }) => ({
      url: `${WEB_SITE_URL}/newsletter/${slug}`,
    })),
  ];
}
