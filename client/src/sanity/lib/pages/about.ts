import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { About } from "@sanity-types";
// : Promise<Home[]>
export const getAboutPage = async (): Promise<About | null> => {
  const query = defineQuery(
    `
       *[_type == 'about'][0]
        `
  );

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the about page data", error);
    return null;
  }
};
