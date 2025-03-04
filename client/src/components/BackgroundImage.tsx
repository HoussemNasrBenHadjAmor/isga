import {
  Landing,
  SanityAssetSourceData,
  HomeQueryResult,
} from "@/sanity/types";
import { default_landing_url } from "@/constants";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  data: HomeQueryResult[number]["landing"] | Landing | null;
}

const BackgroundImage = ({ data }: Props) => {
  // Explicitly type landing.landingImage?.asset
  const asset = data?.image?.asset as SanityAssetSourceData | undefined;

  const url = asset?.url;

  const isVideo = url
    ? url?.endsWith(".mp4") || url?.endsWith(".webm")
    : default_landing_url;

  return isVideo ? (
    <video
      src={url}
      controls={false}
      muted
      loop
      autoPlay
      className="w-full h-full object-cover"
    />
  ) : (
    <img
      src={data?.image ? urlFor(data?.image).url() : default_landing_url}
      className="w-full h-full object-cover"
      alt="background"
    />
  );
};

export default BackgroundImage;
