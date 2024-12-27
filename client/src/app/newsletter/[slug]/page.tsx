import { CommunComponent, NewsLanding } from "@/components";
import { getNewLetterPage } from "@/sanity/lib/pages";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "@/lib/PortableText";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const data = await getNewLetterPage(slug);
  const product = data ? data[0] : [];

  return (
    <div>
      <NewsLanding data={product} />
      <CommunComponent>
        <BlogDetails data={product} />
      </CommunComponent>
    </div>
  );
};

export default page;

const BlogDetails = ({ data }: any) => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      <div className="prose max-w-none mt-8">
        {Array.isArray(data?.details) && (
          <PortableText
            value={data?.details}
            components={myPortableTextComponents}
          />
        )}
      </div>
    </div>
  );
};
