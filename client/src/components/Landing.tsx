"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { Landing as Lan } from "@/sanity/types";

interface Props {
  data: Lan | null;
}

function Landing({ data }: Props) {
  const router = usePathname();

  const isHomePath = router === "/";

  return (
    <div className="px-5 flex flex-col items-center justify-center relative w-full">
      <div className="z-30 w-full px-2 max-w-7xl mx-auto my-40 flex flex-col justify-center items-center text-center lg:text-left">
        <div className="flex flex-col items-center justify-center lg:items-start gap-5 w-full text-white">
          <div className="max-w-xl flex flex-col gap-5">
            {data?.title && (
              <div className="flex flex-col gap-3">
                {data.title?.map((title) => (
                  <h1 key={title} className="font-semibold text-xl">
                    {title}
                  </h1>
                ))}
              </div>
            )}

            {data?.subtitle && (
              <div className="flex flex-col gap-3">
                {data.subtitle?.map((sub) => (
                  <h5 key={sub} className="font-black text-2xl">
                    {sub}
                  </h5>
                ))}
              </div>
            )}

            {data?.description && (
              <div className="flex flex-col gap-3">
                {data.description?.map((desc) => (
                  <p key={desc} className="leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            )}
          </div>

          {isHomePath && (
            <div className="flex flex-col lg:flex-row gap-5">
              <Button
                asChild
                className="bg-[#102136] border-2 border-transparent p-5 hover:bg-[#5e3fde]"
              >
                <Link href="/about">About</Link>
              </Button>
              <Button
                asChild
                className="border-2 p-5 hover:bg-[#5e3fde] bg-transparent"
              >
                <Link href="/about">Our services</Link>
              </Button>
            </div>
          )}

          {data?.author && (
            <p>
              <span className="font-bold">{data.author.slice(0, 17)}</span>
              {data.author.slice(17)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
