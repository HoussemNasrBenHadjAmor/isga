import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/carrers`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/managed-services`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/application-service-and-solutions`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/artifical-intelligence`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/consulting-service`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/cybersecurity-entreprise-risk`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/project-program-management`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/technologies-platforms`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/industries/financial-services`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/industries/government-public-sector`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/industries/insurance`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/industries/telecommunications`,
    },
  ];
}
