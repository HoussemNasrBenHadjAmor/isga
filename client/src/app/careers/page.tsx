import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import { BackgroundImage, CommunComponent, Landing, Jobs } from "@/components";
import { getCarrersPage, getJobs, getJobsCategories } from "@/sanity/lib/pages";
import { aiImage, generateMetadataHelper } from "@/constants";
import { JobDomainsResult, JobTypesResult } from "@/sanity/types";

// metadata fetching
export function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getCarrersPage,
    locationsMetadata: aiImage,
  });
}

interface Job {
  job_domain: JobDomainsResult;
  job_type: JobTypesResult;
}

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";

  const resolvedSearchParams = await searchParams;

  // Extract and parse search parameters
  const domains = resolvedSearchParams.domains
    ? decodeURIComponent(resolvedSearchParams.domains as string).split(",")
    : [];

  const types = resolvedSearchParams.types
    ? decodeURIComponent(resolvedSearchParams.types as string).split(",")
    : [];
  const keyword = (resolvedSearchParams.keyword as string) || "";

  let [data, job_categories, jobs_data] = await Promise.all([
    getCarrersPage({ id: language }),
    getJobsCategories({ id: language }),
    getJobs({
      id: language,
      domains,
      types,
      keyword,
    }),
  ]);

  if (!data || data?.length === 0 || !job_categories || !jobs_data) {
    notFound();
  }

  job_categories = job_categories as Job;

  const jobs = jobs_data;
  const response = data[0];

  return (
    <div>
      <div className="relative flex min-h-screen w-full">
        {/* Background and Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <BackgroundImage data={response?.landing} />
          <div className="absolute inset-0 bg-[#424267] opacity-90" />
        </div>
        {/* Main Content */}
        <Landing data={response?.landing} />
      </div>
      <CommunComponent>
        <Jobs
          data={jobs}
          domains={job_categories?.job_domain}
          types={job_categories?.job_type}
        />
      </CommunComponent>
    </div>
  );
};

export default page;
