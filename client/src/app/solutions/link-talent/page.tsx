import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { PortableText } from "next-sanity";

import { getLinkTalentPage } from "@/sanity/lib/pages";
import { LocationLanding, CommunComponent, Card } from "@/components";
import { generateMetadataHelper, linkTalentImage } from "@/constants/index";
import { myPortableTextComponents } from "@/lib/PortableText";

// metadata fetching
export async function generateMetadata() {
  return generateMetadataHelper({
    slug: null,
    fetchData: getLinkTalentPage,
    locationsMetadata: linkTalentImage,
  });
}

const page = async () => {
  const cookieStore = await cookies();
  const language = cookieStore.get("NEXT_LOCALE")?.value?.toLowerCase() || "en";

  const data = await getLinkTalentPage({ id: language });

  if (!data || data.length === 0) {
    notFound();
  }

  const response = data[0];

  return (
    response && (
      <div>
        <LocationLanding center data={response.landing} />
        <CommunComponent>
          <div className="prose max-w-none">
            {Array.isArray(response?.details) && (
              <PortableText
                value={response?.details}
                components={myPortableTextComponents}
              />
            )}
          </div>
        </CommunComponent>
      </div>
    )
  );
};

export default page;
