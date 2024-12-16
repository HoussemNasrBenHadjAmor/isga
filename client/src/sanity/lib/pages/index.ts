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
  jobQuery,
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

export const getJobs = async () => {
  const query = jobQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the jobs", error);
    return [];
  }
};
