import { useEffect, useRef } from "react";

export default function VideoHero() {
  const vidRef = useRef(null);

  useEffect(() => {
    const video = vidRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0;

    video.play().catch(() => {
      // Ignore autoplay failures on browsers that block autoplay.
    });
  }, []);

  return (
    <div className="relative mt-8 sm:mt-12 h-[40vh] sm:h-[80vh] overflow-hidden rounded-lg sm:rounded-xl">
      <video
        ref={vidRef}
        src="https://ik.imagekit.io/b9tt0xvd7/unfyer/unyfer-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
        controlsList="nodownload noremoteplayback noplaybackrate disablepictureinpicture"
        disablePictureInPicture
        className="w-full h-full object-contain rounded-lg sm:rounded-xl"
      />
    </div>
  );
}
