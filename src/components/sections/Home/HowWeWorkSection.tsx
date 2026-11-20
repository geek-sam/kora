import { useRef, useState } from "react";

interface HowWeWorkSectionProps {
  videoSrc?: string;
  poster?: string;
}

const HowWeWorkSection = ({
  videoSrc = "/how-we-work.mp4",
  poster = "/office-work-poster.jpg",
}: HowWeWorkSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-[#fbfbf9] px-6 pt-4 md:px-0">
      <div className="mx-auto max-w-[1500px]">
        {/* VIDEO CONTAINER */}
        <div className="group relative aspect-[1.78/1] w-full overflow-hidden rounded-[24px] bg-[#252522] md:rounded-[32px]">
          {/* Blurred Background Image */}
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-[-3%] h-[106%] w-[106%] object-cover blur-[7px] brightness-[0.55]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Video */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            controls={isPlaying}
            playsInline
            preload="none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Kora Logo */}
          <div className="absolute left-6 top-6 z-10 flex items-center gap-2 text-white md:left-10 md:top-10">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <span className="text-sm font-bold text-[#59bf9b]">✿</span>
            </span>
            <span className="text-xl font-semibold tracking-tight">
              kora<span className="text-xs align-top">™</span>
            </span>
          </div>

          {/* Play Button */}
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play How We Work video"
              className="absolute left-1/2 top-1/2 z-20 flex h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/30 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/50 md:h-[72px] md:w-[72px]"
            >
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-7 w-7 fill-current"
                aria-hidden="true"
              >
                <path d="M7 4.8c0-.8.9-1.3 1.6-.9l11 7.1a1.2 1.2 0 0 1 0 2L8.6 20.1c-.7.4-1.6-.1-1.6-.9V4.8Z" />
              </svg>
            </button>
          )}

          {/* Bottom Content */}
          {!isPlaying && (
            <div className="absolute bottom-7 left-6 z-10 text-white md:bottom-10 md:left-10">
              {/* Duration */}
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/30 px-3 py-1 text-[10px] font-medium backdrop-blur-md md:text-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-3 w-3"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                1:25
              </span>

              <h2 className="text-[clamp(32px,3.5vw,54px)] font-medium leading-none tracking-[-0.065em]">
                How we work
              </h2>

              <p className="mt-2 text-[11px] font-medium text-white/80 md:text-xs">
                See our process in under 90 seconds
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
