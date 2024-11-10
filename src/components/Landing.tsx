"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

function Landing({ data }: any) {
  const router = usePathname();

  const isHomePath = router === "/";

  return (
    <div className="flex flex-col items-center justify-center relative w-full">
      <div className="z-30 w-full px-2 max-w-7xl mx-auto my-40 flex flex-col justify-center items-center text-center lg:text-left">
        <div className="flex flex-col items-center justify-center lg:items-start gap-5 w-full text-white">
          <div className="max-w-xl flex flex-col gap-5">
            {data?.title && (
              <h1 className="font-semibold text-xl">{data.title}</h1>
            )}
            {data?.subtitle && (
              <h5 className="font-black text-2xl">{data.subtitle}</h5>
            )}
            {data?.description && (
              <div className="flex flex-col gap-3">
                {data.description.map((desc: any) => (
                  <p key={desc.id} className="leading-relaxed">
                    {desc.content}
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

          {data.owner && (
            <p>
              <span className="font-bold">{data.owner.slice(0, 17)}</span>
              {data.owner.slice(17)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
