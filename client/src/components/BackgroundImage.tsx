import { Landing, SanityAssetSourceData } from "@/sanity/types";
import { default_landing_url } from "@/constants";

interface Props {
  data: Landing | null;
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
    <img src={url} className="w-full h-full object-cover" alt="background" />
  );
};

export default BackgroundImage;
