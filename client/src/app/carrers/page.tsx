import { Metadata } from "next";
import {
  BackgroundImage,
  CommunComponent,
  Landing,
  JobDialog,
} from "@/components";
import { getCarrersPage, getJobs } from "@/sanity/lib/pages";
import { carrersMetadata } from "@/constants";

export const metadata: Metadata = carrersMetadata;

const page = async () => {
  const data = await getCarrersPage();
  const jobs_data = await getJobs();
  const response = data ? data[0] : null;
  const jobs = jobs_data ? jobs_data : null;
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
          {jobs?.map((job) => <JobDialog key={job.title} data={job} />)}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
