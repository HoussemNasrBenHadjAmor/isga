import { Metadata } from "next";
import { PortableText } from "next-sanity";

import { getLocationPage } from "@/sanity/lib/pages";
import { locationsMetadata } from "@/constants";
import { LocationLanding, CommunComponent, Card } from "@/components";
import { myPortableTextComponents } from "@/lib/PortableText";

export const metadata: Metadata = locationsMetadata;

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const data = await getLocationPage(slug);
  const response = data[0] ?? null;

  return (
    <div>
      <LocationLanding center data={response} />
      <CommunComponent>
        <div className="prose max-w-none">
          {Array.isArray(response?.details) && (
            <PortableText
              value={response?.details}
              components={myPortableTextComponents}
            />
          )}
        </div>

        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {response?.cards?.map((card: any) => (
            <Card key={card._id} data={card} flex />
          ))}
        </div>
      </CommunComponent>
    </div>
  );
};

export default page;
