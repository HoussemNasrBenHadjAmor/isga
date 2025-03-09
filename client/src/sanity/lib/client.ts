import { createClient } from "next-sanity";

// import { draftMode } from "next/headers";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  // apiVersion: "2021-08-31",
  apiVersion: "2025-03-09",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  // perspective: draftModeResults.isEnabled ? "previewDrafts" : "published",
  // perspective: (await draftMode()).isEnabled ? "previewDrafts" : "published",
  stega: {
    // enabled: (await draftMode()).isEnabled,
    // enabled: true,

    studioUrl:
      process.env.VERCEL_URL === "production"
        ? `${process.env.SANITY_PRODUCTION_URL}/studio`
        : `${process.env.SANITY_LOCALE_URL}/studio`,
  },
});

export const edit_client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  // apiVersion: "2021-08-31",
  apiVersion: "2025-03-09",
  useCdn: false,
  token: process.env.SANITY_API_EDITOR_TOKEN,
  stega: {
    // enabled: (await draftMode()).isEnabled,
    // enabled: true,

    studioUrl:
      process.env.VERCEL_URL === "production"
        ? `${process.env.SANITY_PRODUCTION_URL}/studio`
        : `${process.env.SANITY_LOCALE_URL}/studio`,
  },
});
