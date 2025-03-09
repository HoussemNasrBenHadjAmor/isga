import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const WEB_SITE_URL =
    process.env.NEXT_PUBLIC_VERCEL_URL === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL
      : process.env.NEXT_PUBLIC_BASE_LOCALE_URL;

  return [
    {
      url: `${WEB_SITE_URL}`,
      priority: 1,
    },
    {
      url: `${WEB_SITE_URL}/en/about`,
    },
    {
      url: `${WEB_SITE_URL}/en/carrers`,
    },
    {
      url: `${WEB_SITE_URL}/en/contact`,
    },
    {
      url: `${WEB_SITE_URL}/en/services/managed-services`,
    },
    {
      url: `${WEB_SITE_URL}/en/services/application-service-and-solutions`,
    },
    {
      url: `${WEB_SITE_URL}/en/services/artifical-intelligence`,
    },
    {
      url: `${WEB_SITE_URL}/en/services/consulting-service`,
    },
    {
      url: `${WEB_SITE_URL}/en/services/cybersecurity-entreprise-risk`,
    },
    {
      url: `${WEB_SITE_URL}/en/services/project-program-management`,
    },
    {
      url: `${WEB_SITE_URL}/en/services/technologies-platforms`,
    },
    {
      url: `${WEB_SITE_URL}/en/industries/financial-services`,
    },
    {
      url: `${WEB_SITE_URL}/en/industries/government-public-sector`,
    },
    {
      url: `${WEB_SITE_URL}/en/industries/insurance`,
    },
    {
      url: `${WEB_SITE_URL}/en/industries/telecommunications`,
    },
  ];
}
