"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { NewsCategoriesQueryResult } from "@/sanity/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

interface FilterProps {
  categories: NewsCategoriesQueryResult;
  date: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterNews = ({ categories, date, setLoading }: FilterProps) => {
  const router = useRouter();
  const pathname = usePathname(); // Reactively updates on route changes
  const searchParams = useSearchParams(); // Reactively updates on query changes

  const categoryParam =
    searchParams.get("category") &&
    categories.find((item) => item.title === searchParams.get("category"));

  const dateParam = searchParams.get("date");
  const [categoryValue, setCategoryValue] = useState(
    categoryParam ? categoryParam.title : ""
  );
  const [dateValue, setDateValue] = useState(dateParam ? dateParam : date);
  //   const [keyword, setKeyword] = useState("");

  const constructSearchParams = ({
    category = categoryValue,
    date = dateValue,
  }: {
    category: string | null;
    date: string;
  }) => {
    const query = new URLSearchParams();
    if (category) query.set("category", category);
    if (date) query.set("date", date);
    return query;
  };

  const handleSearch = (newCategory: string | null, newDate: string) => {
    try {
      setLoading(true);

      // Get the updated query parameters
      const query = constructSearchParams({
        category: newCategory ?? categoryValue,
        date: newDate ?? dateValue,
      });

      // Navigate with the query string
      router.push(`/newsletter?${query.toString()}`, { scroll: false });
    } catch (error) {
      setLoading(false);
    }
  };

  const isFilterChanged =
    searchParams.toString() && searchParams.toString() !== "date=desc";

  useEffect(() => {
    // change the loading to false if the searchParams or pathname have been changed
    setLoading(false);
  }, [pathname, searchParams]);

  return (
    <div className="flex flex-col gap-5">
      {/* <Input
        type="text"
        placeholder="Keyword"
        onChange={(e) => setKeyword(e.target.value)}
      /> */}

      <div className="flex space-x-5 items-center justify-center">
        <p
          className={`font-semibold cursor-pointer ${
            isFilterChanged
              ? "cursor-pointer"
              : "cursor-not-allowed text-gray-400"
          }`}
          //   className="cursor-pointer"
          onClick={() => {
            if (isFilterChanged) {
              setDateValue("desc");
              setCategoryValue("");
              handleSearch("", "desc");
            }
          }}
        >
          All
        </p>

        <div className="h-8 border-l-2 border-gray-400"></div>

        <Select
          value={categoryValue!}
          onValueChange={(title: string) => {
            setCategoryValue(title);
            handleSearch(title, dateValue); // Call handleSearch with the updated category
          }}
        >
          <SelectTrigger className="max-w-[150px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {categories.map((category) => (
                <SelectItem value={category?.title!} key={category._id}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="h-8 border-l-2 border-gray-400"></div>

        <Select
          value={dateValue}
          onValueChange={(title: string) => {
            setDateValue(title);
            handleSearch(categoryValue, title); // Call handleSearch with the updated date
          }}
        >
          <SelectTrigger className="max-w-[150px]">
            <SelectValue placeholder="Order by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by date</SelectLabel>
              <SelectItem value="desc">desc</SelectItem>
              <SelectItem value="asc">asc</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterNews;
