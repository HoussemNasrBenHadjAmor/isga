const BackgroundImage = ({ url }: { url: string }) => {
  const isVideo = url.endsWith(".mp4") || url.endsWith(".webm");

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
