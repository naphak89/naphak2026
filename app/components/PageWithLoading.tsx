"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { LoadingScreen } from "./LoadingScreen";

const IMAGE_URLS = [
  "/profilePicture.png",
  "/kayakPic.jpg",
  "/projectPictures/circleticket.png",
  "/mainProjectPictures/CircleticketMainPic.png",
  "/projectPictures/out.png",
  "/mainProjectPictures/OUTMainPic.png",
  "/projectPictures/storymap.png",
  "/mainProjectPictures/StoryMapMainPic.png",
  "/projectPictures/azai.jpg",
  "/mainProjectPictures/AZAISolutionMainPic.png",
  "/workatPictures/hkuLogo.png",
  "/workatPictures/algogeneLogo.png",
  "/workatPictures/standardcharteredLogo.png",
  "/workatPictures/0159Logo.png",
  "/workatPictures/OUTLogo.png",
];

function preloadImages(urls: string[]): Promise<void> {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    )
  ).then(() => {});
}

export function PageWithLoading({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    preloadImages(IMAGE_URLS).then(() => setIsReady(true));
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>
        {!isReady && <LoadingScreen />}
      </AnimatePresence>
    </>
  );
}
