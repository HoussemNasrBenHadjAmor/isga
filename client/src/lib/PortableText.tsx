import { getImageDimensions } from "@sanity/asset-utils";
import createImageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

// Configure URL builder
const urlBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
});

// lazy-loaded image component
const ImageComponent = ({ value }: any) => {
  if (!value?.asset?._ref && !value?.asset?._id) {
    console.error("Invalid image value:", value);
    return null;
  }

  const { width, height } = getImageDimensions(value);

  const imageUrl = urlBuilder.image(value).fit("max").auto("format").url();

  if (!imageUrl) {
    console.error("Failed to generate image URL:", value);
    return null;
  }

  return (
    <div className="relative w-full h-full">
      <Image
        height={height}
        width={width}
        src={imageUrl}
        alt={value.alt || "blog_image"}
        loading="lazy"
        className="rounded-lg object-cover max-h-[500px]"
      />
    </div>
  );
};

// Custom rendering for text marks (e.g., color)
const renderTextWithColor = (children: any, markDefs: any) => {
  // if markDefs is not empty
  const colorMark: boolean = markDefs ? true : false;

  if (colorMark && markDefs.hex) {
    return <span style={{ color: markDefs.hex }}>{children}</span>;
  }
  return children; // Return children as is if no color mark is found
};

const renderExternalLink = ({ value, children }: any) => {
  const { href } = value;
  return (
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
};

export const myPortableTextComponents = {
  types: {
    image: ImageComponent,
  },
  marks: {
    // Handle color annotation
    color: ({ children, value }: any) => {
      return renderTextWithColor(children, value);
    },
    // Handle extrernal link
    link: ({ value, children }: any) => {
      return renderExternalLink({ value, children });
    },
  },
};
