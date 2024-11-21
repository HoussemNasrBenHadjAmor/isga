import { sanityFetch } from "../live";
import {
  About,
  ApplicationServices,
  ArtificialServices,
  Carrers,
  ConsultingServices,
  Contact,
  CyberServices,
  FinancialIndustries,
  GovernmentIndustries,
  Home,
  InsuranceIndustries,
  ManagedServices,
  ProjectServices,
  TechnologiesServices,
  TelecommunicationsIndustries,
} from "@sanity-types";

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
} from "./queries";

export const getHomePage = async (): Promise<Home[]> => {
  const query = homeQuery;

  try {
    const data = await sanityFetch({ query });

    return data.data || [];
  } catch (error) {
    console.error("Error fetching the home page", error);
    return [];
  }
};

export const getAboutPage = async (): Promise<About[]> => {
  const query = aboutQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the about page", error);
    return [];
  }
};

export const getConsultingPage = async (): Promise<ConsultingServices[]> => {
  const query = consultingQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service consulting page", error);
    return [];
  }
};

export const getApplicationPage = async (): Promise<ApplicationServices[]> => {
  const query = applicationQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service application page", error);
    return [];
  }
};

export const getTechnologiesPage = async (): Promise<
  TechnologiesServices[]
> => {
  const query = technologiesQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service technologies page", error);
    return [];
  }
};

export const getManagedPage = async (): Promise<ManagedServices[]> => {
  const query = managedQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service managed page", error);
    return [];
  }
};

export const getProjectPage = async (): Promise<ProjectServices[]> => {
  const query = projectQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service project page", error);
    return [];
  }
};

export const getArtificialPage = async (): Promise<ArtificialServices[]> => {
  const query = artificialQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service artificial page", error);
    return [];
  }
};

export const getCyberPage = async (): Promise<CyberServices[]> => {
  const query = cyberQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the service cyber page", error);
    return [];
  }
};

export const getGovernmentPage = async (): Promise<GovernmentIndustries[]> => {
  const query = governmentQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries government page", error);
    return [];
  }
};

export const getInsurancePage = async (): Promise<InsuranceIndustries[]> => {
  const query = insuranceQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries insurance page", error);
    return [];
  }
};

export const getFinancialPage = async (): Promise<FinancialIndustries[]> => {
  const query = financialQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries financial page", error);
    return [];
  }
};

export const getTelecommunicationsPage = async (): Promise<
  TelecommunicationsIndustries[]
> => {
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

export const getCarrersPage = async (): Promise<Carrers[]> => {
  const query = carrersQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries carrers page", error);
    return [];
  }
};

export const getContactPage = async (): Promise<Contact[]> => {
  const query = contactQuery;

  try {
    const data = await sanityFetch({ query });
    return data.data || [];
  } catch (error) {
    console.error("Error fetching the industries contact page", error);
    return [];
  }
};
