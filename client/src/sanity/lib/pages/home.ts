import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "../live";
import { Home } from "@sanity-types";
// : Promise<Home[]>
export const getHomePage = async (): Promise<Home[]> => {
  const query = defineQuery(
    `
       *[_type == 'home'][0]
        `
  );

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the home page data", error);
    return [];
  }
};
