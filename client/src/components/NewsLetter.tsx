"use client";

import { useState } from "react";
import { FilterNews, NewLetter } from "@/components";
import { NewsCategoriesQueryResult, NewsPageQueryResult } from "@/sanity/types";

interface NewsLetterProps {
  data: NewsPageQueryResult;
  categories: NewsCategoriesQueryResult;
  date: string;
}

const NewsLetter = ({ data, categories, date }: NewsLetterProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col gap-12">
      <FilterNews categories={categories} date={date} setLoading={setLoading} />

      {/* If no data founded and loading is false -> show no items */}
      {!data.length && !loading && (
        <p className="text-center font-semibold">
          Sorry no news articles founded! 😞
        </p>
      )}

      {/* Conditionally show loading */}
      {loading ? (
        <div className="flex flex-col text-center justify-center items-center gap-3">
          <div className="w-6 h-6 bg-[#7456F1] animate-spin rounded-lg" />
          <p className="font-semibold text-sm">One sec please...</p>
        </div>
      ) : (
        data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10">
            {data?.map((data) => (
              <NewLetter key={data._id} data={data} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default NewsLetter;
