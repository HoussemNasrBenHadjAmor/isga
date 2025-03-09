import { createClient } from "next-sanity";

// import { draftMode } from "next/headers";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  // apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  // perspective: draftModeResults.isEnabled ? "previewDrafts" : "published",
  // perspective: (await draftMode()).isEnabled ? "previewDrafts" : "published",
  stega: {
    // enabled: (await draftMode()).isEnabled,
    // enabled: true,

    studioUrl: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/studio`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
  },
});

export const edit_client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  token: process.env.SANITY_API_EDITOR_TOKEN,
});
