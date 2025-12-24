import { useRef, useState, useEffect } from "react";

export default function VideoHero() {
  const vidRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
//   const [showUnmute, setShowUnmute] = useState(true);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;

    // Start playback muted so autoplay works reliably.
    v.muted = true;
    v.volume = 0.0;
    // try autoplay — ignore errors
    v.play().catch(() => {
      // autoplay might fail in some browsers; user can press play
    });

    // If user interacts anywhere on page, hide the overlay after a short while
    const onInteraction = () => setShowUnmute(false);
    window.addEventListener("click", onInteraction, { once: true });
    return () => window.removeEventListener("click", onInteraction);
  }, []);

  const handleToggleMute = async () => {
    const v = vidRef.current;
    if (!v) return;

    if (isMuted) {
      // Unmute and ensure playback continues
      v.muted = false;
      v.volume = 1.0; // set appropriate default volume
      try {
        await v.play(); // ensure playing (some browsers require play after user gesture)
      } catch (err) {
        // ignore — user may need to press native play
      }
      setIsMuted(false);
      setShowUnmute(false);
    } else {
      v.muted = true;
      v.volume = 0.0;
      setIsMuted(true);
      setShowUnmute(true);
    }
  };

  return (
    <div className="relative mt-8 sm:mt-12  h-[40vh] sm:h-[80vh]  overflow-hidden rounded-lg sm:rounded-xl ">
     <video
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

      {/* Overlay Unmute button (visible until user unmutes) */}
      {/* {showUnmute && (
        <div className="absolute inset-0 pointer-events-none flex items-end justify-end p-4">
          <button
            onClick={handleToggleMute}
            className="pointer-events-auto bg-black/60 text-white px-3 py-2 rounded-md backdrop-blur-sm hover:bg-black/75 transition"
            aria-pressed={!isMuted}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      )} */}
    </div>
  );
}
