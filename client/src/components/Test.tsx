// import { Landing, Simple } from "@sanity-types";
import { Simple } from "@/sanity/types";
import React from "react";

interface Props {
  landing: Simple[] | null;
}

const Test = ({ landing }: Props) => {
  return (
    <div>
      {landing?.map((simple) => (
        <div key={simple._id}>
          {simple.title?.map((title, index) => <p key={index}>{title}</p>)}
        </div>
      ))}
    </div>
  );
};

export default Test;
