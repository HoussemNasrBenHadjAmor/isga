"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const DisableDraftMode = () => {
  const enviornment = useDraftModeEnvironment();
  const router = useRouter();

  if (enviornment !== "live" && enviornment !== "unknown") {
    return null;
  }

  const handleClick = async () => {
    await fetch("/api/draft-mode/disable");
    router.refresh();
  };

  return (
    <Button
      onClick={handleClick}
      variant={"destructive"}
      className="fixed bottom-4 left-4 px-4 py-2 z-50"
    >
      Disable Draft Mode
    </Button>
  );
};

export default DisableDraftMode;
