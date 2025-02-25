import { JobDomainsResult, JobTypesResult } from "@/sanity/types";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

import {
  homeQuery,
  aboutQuery,
  consultingQuery,
  applicationQuery,
  technologiesQuery,
  managedQuery,
  projectQuery,
  artificialQuery,
  cyberQuery,
  governmentQuery,
  insuranceQuery,
  financialQuery,
  telecommunicationQuery,
  contactQuery,
  carrersQuery,
  jobDomains,
  jobTypes,
  newsCategoriesQuery,
  locationsQuery,
  aiSoftwareQuery,
  relatedNewsQuery,
  aiTrainingQuery,
  aiConsultingQuery,
  aiRdQuery,
  testQuery,
} from "./queries";

export const getHomePage = async () => {
  const query = homeQuery;

  try {
    const data = await sanityFetch({ query });

    return data.data || [];
  } catch (error) {
    console.error("Error fetching the home page", error);
    return [];
  }
};

export const getAboutPage = async () => {
  const query = aboutQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the about page", error);
    return [];
  }
};

export const getConsultingPage = async () => {
  const query = consultingQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service consulting page", error);
    return [];
  }
};

export const getApplicationPage = async () => {
  const query = applicationQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service application page", error);
    return [];
  }
};

export const getTechnologiesPage = async () => {
  const query = technologiesQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service technologies page", error);
    return [];
  }
};

export const getManagedPage = async () => {
  const query = managedQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service managed page", error);
    return [];
  }
};

export const getProjectPage = async () => {
  const query = projectQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service project page", error);
    return [];
  }
};

export const getArtificialPage = async () => {
  const query = artificialQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service artificial page", error);
    return [];
  }
};

export const getCyberPage = async () => {
  const query = cyberQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service cyber page", error);
    return [];
  }
};

export const getGovernmentPage = async () => {
  const query = governmentQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries government page", error);
    return [];
  }
};

export const getInsurancePage = async () => {
  const query = insuranceQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries insurance page", error);
    return [];
  }
};

export const getFinancialPage = async () => {
  const query = financialQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries financial page", error);
    return [];
  }
};

export const getTelecommunicationsPage = async () => {
  const query = telecommunicationQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error(
      "Error fetching the industries telecommunication page",
      error
    );
    return [];
  }
};

export const getCarrersPage = async () => {
  const query = carrersQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries carrers page", error);
    return [];
  }
};

export const getContactPage = async () => {
  const query = contactQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries contact page", error);
    return [];
  }
};

// export const getJobs = async () => {
//   const query = jobQuery;

//   try {
//     const data = await sanityFetch({ query });
//     return data.data || [];
//   } catch (error) {
//     console.error("Error fetching the jobs", error);
//     return [];
//   }
// };

interface JobFilterParams {
  domains?: string[];
  types?: string[];
  keyword?: string;
}

export const getJobs = async ({
  domains = [],
  types = [],
  keyword = "",
}: JobFilterParams) => {
  const query = `
  *[_type == 'job' && display == true ${
    domains.length > 0
      ? `&& job_domain->title in [${domains
          .map((title) => `"${title}"`)
          .join(",")}]`
      : ""
  } ${
    types.length > 0
      ? `&& job_type->title in [${types
          .map((title) => `"${title}"`)
          .join(",")}]`
      : ""
  } ${
    keyword
      ? `&& (title match "*${keyword}*" || description match "*${keyword}*" || job_type->title match "*${keyword}*" || job_domain->title match "*${keyword}*")`
      : ""
  }] {
    _updatedAt,
    title,
    job_domain -> {
      _id,
      title
    },
    job_type -> {
      _id,
      title
    },
    description,
    qualifications,
    display
  }
`;
  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the jobs", error);
    return [];
  }
};

export const getJobsCategories = async () => {
  const query_categories_domains = jobDomains;
  const query_categories_types = jobTypes;

  interface Job {
    job_domain: JobDomainsResult;
    job_type: JobTypesResult;
  }

  try {
    const job_domain = await sanityFetch({ query: query_categories_domains });
    const job_type = await sanityFetch({ query: query_categories_types });
    const data: Job = {
      job_domain: job_domain?.data || [],
      job_type: job_type?.data || [],
    };
    return data || [];
  } catch (error) {
    console.error("Error fetching the job categories", error);
    return [];
  }
};

interface NewsFilterParams {
  order?: string;
  category?: string;
}

// TODO
/// need to fix the loweCase of the category

export const getNewsPage = async ({
  category = "",
  order = "desc",
}: NewsFilterParams) => {
  const query = defineQuery(`
 *[_type == 'news' && display == true ${
   category ? `&& "${category}" in category[] -> title` : ""
 }] | order(_createdAt ${order}) {
    _id, 
    _updatedAt,
    _createdAt,
    title,
    subtitle,
    image {
      asset -> { url }
    },
    slug
  }
  `);

  try {
    const data = await sanityFetch({
      query,
      params: {
        category,
        order,
      },
    });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the news", error);
    return [];
  }
};

export const getRelatedNews = async () => {
  const query = relatedNewsQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the related news", error);
    return [];
  }
};

export const getNewsCategories = async () => {
  const query = newsCategoriesQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the news categories", error);
    return [];
  }
};

export const getNewLetterPage = async (slug: string) => {
  const query = defineQuery(`
 *[_type == 'news' && display == true && slug.current == "${slug}"] {
    _id, 
    _updatedAt,
    _createdAt,
    title,
    subtitle,
    details,
    image {
      asset -> { url }
    },
    slug,
    "file" : file.asset->url
  }
  `);

  try {
    const data = await sanityFetch({
      query,
      params: {
        slug,
      },
    });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the news", error);
    return [];
  }
};

export const getLocationsPage = async () => {
  const query = locationsQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the locations page", error);
    return [];
  }
};

export const getLocationPage = async (slug: string) => {
  const query = defineQuery(`
 *[_type == 'location' && slug == "${slug}"] {
    _id, 
    title,
    subtitle,
    description,
    details,
    image {
      asset -> { url }
    },
    slug,
    cards [] -> {
      title,
      svg_path,
      subtitle,
      description,
      image {
        asset -> { url }
      }
    }
  }
  `);

  try {
    const data = await sanityFetch({
      query,
      params: {
        slug,
      },
    });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the location page", error);
    return [];
  }
};

export const getAiSoftwarePage = async () => {
  const query = aiSoftwareQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the aiSoftware page", error);
    return [];
  }
};

export const getAiTrainingPage = async () => {
  const query = aiTrainingQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the ai Training page", error);
    return [];
  }
};

export const getAiConsultingPage = async () => {
  const query = aiConsultingQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the ai consulting page", error);
    return [];
  }
};

export const getAiRdPage = async () => {
  const query = aiRdQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the ai rd page", error);
    return [];
  }
};

export const getTestPage = async (params: { id: string }) => {
  const query = testQuery;
  try {
    const data = await sanityFetch({ query, params });
    return data.data || [];
  } catch (error) {
    console.log("Errror fetching the test page");
    return [];
  }
};
