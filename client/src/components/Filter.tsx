"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JobDomainsResult, JobTypesResult } from "@/sanity/types";
import { Checkbox } from "./ui/checkbox";

interface FilterProps {
  domains: JobDomainsResult;
  types: JobTypesResult;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const Filter = ({ domains, types, setLoading, loading }: FilterProps) => {
  const router = useRouter();
  const pathname = usePathname(); // Reactively updates on route changes
  const searchParams = useSearchParams(); // Reactively updates on query changes
  const [domainsValues, setDomainsValues] = useState<string[]>([]);
  const [typesValues, setTypesValues] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");

  // Construct the current searchParams based on the current state
  const constructSearchParams = () => {
    const query = new URLSearchParams();
    if (domainsValues.length > 0) query.set("domains", domainsValues.join(","));
    if (typesValues.length > 0) query.set("types", typesValues.join(","));
    if (keyword) query.set("keyword", keyword);
    return query;
  };

  const handleSearch = () => {
    try {
      setLoading(true);

      // Get the updated query parameters
      const query = constructSearchParams();

      // Navigate with the query string
      router.push(`/carrers?${query.toString()}`, { scroll: false });
    } catch (error) {
      setLoading(false);
    }
  };

  const handleDomainToggle = (title: string) => {
    // Toggle the domain selection
    setDomainsValues((prev) =>
      prev.includes(title)
        ? prev.filter((value) => value !== title)
        : [...prev, title]
    );
  };

  const handleTypeToggle = (title: string) => {
    // Toggle the type selection
    setTypesValues((prev) =>
      prev.includes(title)
        ? prev.filter((value) => value !== title)
        : [...prev, title]
    );
  };

  // Check if current filters differ from the initial searchParams
  const currentParams = constructSearchParams();
  const isFilterChanged = currentParams.toString() !== searchParams.toString();

  useEffect(() => {
    // change the loading to false if the searchParams or pathname have been changed
    setLoading(false);
  }, [pathname, searchParams]);

  return (
    <div className="flex flex-col gap-5">
      <Input
        type="text"
        placeholder="Keyword"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p className="font-bold">Job Category</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
        {domains.map((domain) => (
          <SingleCheckBox
            key={domain._id}
            data={domain}
            onToggle={() => handleDomainToggle(domain?.title!)}
            isChecked={domainsValues.includes(domain?.title!)}
          />
        ))}
      </div>

      <p className="font-bold">Job Type</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
        {types.map((type) => (
          <SingleCheckBox
            key={type._id}
            data={type}
            onToggle={() => handleTypeToggle(type?.title!)}
            isChecked={typesValues.includes(type?.title!)}
          />
        ))}
      </div>

      <Button
        className="w-full bg-[#7456F1] hover:bg-[#5E3FDE]"
        onClick={handleSearch}
        disabled={!isFilterChanged} // Disable button if no filter change
      >
        Search Jobs
      </Button>
    </div>
  );
};

export default Filter;

interface SingleCheckBoxProps {
  data: JobDomainsResult[0] | JobTypesResult[0];
  onToggle: () => void;
  isChecked: boolean;
}

const SingleCheckBox = ({ data, isChecked, onToggle }: SingleCheckBoxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={data._id} checked={isChecked} onCheckedChange={onToggle} />
      <label
        htmlFor={data._id}
        className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {data?.title}
      </label>
    </div>
  );
};