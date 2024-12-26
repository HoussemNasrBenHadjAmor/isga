"use client";

import { useState } from "react";
import { FilterJobs, JobDialog } from "@/components";
import {
  JobDomainsResult,
  JobQueryResult,
  JobTypesResult,
} from "@/sanity/types";

interface JobsProps {
  data: JobQueryResult;
  domains: JobDomainsResult;
  types: JobTypesResult;
}

const Jobs = ({ data, domains, types }: JobsProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col gap-10">
      <FilterJobs domains={domains} types={types} setLoading={setLoading} />

      {/* If no data founded and loading is false -> show no items */}
      {!data.length && !loading && (
        <p className="text-center font-semibold">Sorry no jobs founded! 😞</p>
      )}

      {/* Conditionally show loading */}
      {loading ? (
        <div className="flex flex-col text-center justify-center items-center gap-3">
          <div className="w-6 h-6 bg-[#7456F1] animate-spin rounded-lg" />
          <p className="font-semibold text-sm">One sec please...</p>
        </div>
      ) : (
        data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
            {data?.map((job) => <JobDialog key={job.title} data={job} />)}
          </div>
        )
      )}
    </div>
  );
};

export default Jobs;
