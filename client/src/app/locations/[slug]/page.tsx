import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { PortableText } from "next-sanity";

import { getLocationPage } from "@/sanity/lib/pages";
import { LocationLanding, CommunComponent, Card } from "@/components";
import { generateMetadataHelper, homeImage } from "@/constants/index";
import { myPortableTextComponents } from "@/lib/PortableText";

// metadata fetching
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  return generateMetadataHelper({
    slug,
    fetchData: getLocationPage,
    locationsMetadata: homeImage,
  });
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";

  const { slug } = await params;

  const data = await getLocationPage({ id: language, slug: slug });

  if (!data || data.length === 0) {
    notFound();
  }

  const response = data[0];

  return (
    response && (
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
            {response?.cards?.map((card) => (
              <Card key={card._id} data={card} flex />
            ))}
          </div>
        </CommunComponent>
      </div>
    )
  );
};

export default page;
