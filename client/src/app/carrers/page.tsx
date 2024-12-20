import { Metadata } from "next";

import { BackgroundImage, CommunComponent, Landing, Jobs } from "@/components";
import { getCarrersPage, getJobs, getJobsCategories } from "@/sanity/lib/pages";
import { carrersMetadata } from "@/constants";
import {
  JobDomainsResult,
  JobQueryResult,
  JobTypesResult,
} from "@/sanity/types";

export const metadata: Metadata = carrersMetadata;

interface Job {
  job_domain: JobDomainsResult;
  job_type: JobTypesResult;
}

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  // const router = useRouter();

  const resolvedSearchParams = await searchParams;
  const data = await getCarrersPage();
  const job_categories = (await getJobsCategories()) as Job;
  const response = data ? data[0] : null;

  // Extract and parse search parameters
  const domains = resolvedSearchParams.domains
    ? decodeURIComponent(resolvedSearchParams.domains as string).split(",")
    : [];

  const types = resolvedSearchParams.types
    ? decodeURIComponent(resolvedSearchParams.types as string).split(",")
    : [];
  const keyword = (resolvedSearchParams.keyword as string) || "";

  const jobs_data = await getJobs({
    domains,
    types,
    keyword,
  });
  const jobs: JobQueryResult = jobs_data ? jobs_data : null;
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
