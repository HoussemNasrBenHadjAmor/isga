"use client";
import { JobQueryResult } from "@/sanity/types";
import { Clock4 } from "lucide-react";

interface JobProps {
  data: JobQueryResult[0];
}

const JobCard = ({ data }: JobProps) => {
  const updatedDate: Date = new Date(data._updatedAt);
  const currentDate: Date = new Date();

  // Calculate the difference in time (milliseconds) using getTime()
  const timeDifference: number = currentDate.getTime() - updatedDate.getTime();

  // Convert the difference to days
  const daysPassed: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const daysPassedText =
    daysPassed > 1 ? `Posted ${daysPassed} days ago` : `Posted today`;

  return (
    <div className="text-start rounded-md shadow-sm border-[1px] p-10 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg">
      <h4 className="font-extrabold text-lg">{data?.title}</h4>
      <p className="text-xs font-extrabold">{data?.category?.category}</p>
      <div className="flex gap-3 items-center text-slate-600">
        <Clock4 className="w-[18px] h-[18px]" />
        <p className="text-xs font-bold">{data?.category?.type}</p>
      </div>
      <p className="text-xs text-right text-gray-500">{daysPassedText}</p>
    </div>
  );
};

export default JobCard;
