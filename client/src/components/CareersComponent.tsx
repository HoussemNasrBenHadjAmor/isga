// "use server";

// import { BackgroundImage, Landing, CommunComponent, Jobs } from "@/components";
// import { getCarrersPage, getJobs, getJobsCategories } from "@/sanity/lib/pages";
// import {
//   JobDomainsResult,
//   JobQueryResult,
//   JobTypesResult,
// } from "@/sanity/types";

// interface Job {
//   job_domain: JobDomainsResult;
//   job_type: JobTypesResult;
// }

// interface CareersComponentProps {
//   searchParams: { [key: string]: string | string[] | undefined };
// }

// const CareersComponent = async ({ searchParams }: CareersComponentProps) => {
//   const data = await getCarrersPage();
//   const job_categories = (await getJobsCategories()) as Job;
//   const response = data ? data[0] : null;

//   // Extract and parse search parameters
//   const domains = searchParams.domains
//     ? decodeURIComponent(searchParams.domains as string).split(",")
//     : [];

//   const types = searchParams.types
//     ? decodeURIComponent(searchParams.types as string).split(",")
//     : [];
//   const keyword = (searchParams.keyword as string) || "";

//   const jobs_data = await getJobs({
//     domains,
//     types,
//     keyword,
//   });
//   const jobs: JobQueryResult = jobs_data ? jobs_data : null;

//   return (
//     <div>
//       <div className="relative flex min-h-screen w-full">
//         {/* Background and Overlay */}
//         <div className="absolute inset-0 w-full h-full">
//           <BackgroundImage data={response?.landing} />
//           <div className="absolute inset-0 bg-[#424267] opacity-90" />
//         </div>
//         {/* Main Content */}
//         <Landing data={response?.landing} />
//       </div>
//       <CommunComponent>
//         <Jobs
//           data={jobs}
//           domains={job_categories?.job_domain}
//           types={job_categories?.job_type}
//         />
//       </CommunComponent>
//     </div>
//   );
// };

// export default CareersComponent;
