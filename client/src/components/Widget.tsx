"use client";

import { useState, useEffect } from "react";

const Widget = ({ data }: any) => {
  const categories = data?.map((item: any) => item.title);
  const [activeSection, setActiveSection] = useState(categories[0] || "");

  const [activeContent, setActiveContent] = useState(
    data?.find((item: any) => item.title === activeSection || "")
  );

  useEffect(() => {
    // Update activeContent whenever activeSection changes
    const newContent = data?.find((item: any) => item.title === activeSection);
    setActiveContent(newContent);
  }, [activeSection, data]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-row md:flex-col gap-3 overflow-y-hidden overflow-x-auto md:overflow-hidden md:whitespace-normal whitespace-nowrap w-full md:max-w-[250px]">
        {categories?.map((cat: string, index: number) => (
          <h5
            key={index}
            onClick={() => setActiveSection(cat)}
            className={`${
              activeSection === cat
                ? "bg-[#424267] text-white"
                : "text-[#424267]"
            } font-bold p-5 cursor-pointer transition duration-300`}
          >
            {cat}
          </h5>
        ))}
      </div>
      <div className="bg-[#424267] text-white w-full p-5 transition-opacity duration-500 ease-in-out opacity-100">
        <div className="flex flex-col gap-4 mb-5">
          {activeContent?.subtitle?.map((sub: any, index: number) => (
            <p
              key={index}
              className="transition transform duration-300 ease-in"
            >
              {sub.content}
            </p>
          ))}
        </div>
        {activeContent?.description?.map((des: any, index: number) => {
          // Split the content at the colon if it exists
          const [boldText, normalText] = des.content.includes(":")
            ? des.content.split(":")
            : [des.content, null];

          return (
            <p
              key={index}
              className="mx-5 my-2 transition transform duration-300 ease-in"
            >
              {normalText ? (
                <>
                  {/* Bold part before the colon */}
                  <span className="font-bold">• {boldText}:</span>
                  {/* Regular part after the colon */}
                  <span> {normalText}</span>
                </>
              ) : (
                // If no colon, render the full text as it is
                <span>• {boldText}</span>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Widget;
