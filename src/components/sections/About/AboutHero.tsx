import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAF8] px-3 py-3 md:px-4 md:py-4 lg:px-5 lg:py-5">
      {/* Centered Hero Container */}
      <div className="relative mx-auto h-[calc(100svh-20px)] min-h-[650px] max-h-[1000px] w-full max-w-[1600px] overflow-hidden rounded-[28px] bg-[#333] text-white sm:h-[calc(100svh-30px)] lg:h-[calc(100svh-48px)]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-flower.jpg')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 pb-10 pt-24 sm:px-10 lg:px-[4.2%]">
          <div className="max-w-[1050px]">
            <h1 className="max-w-[1050px] text-[clamp(42px,6.1vw,92px)] font-medium leading-[0.99] tracking-[-0.075em]">
              We help good companies
              <br className="hidden sm:block" /> become great ones.
            </h1>

            <p className="mt-9 max-w-[540px] text-[18px] font-medium leading-[1.4] tracking-[-0.045em] sm:text-[21px]">
              The companies that shape industries
              <br className="hidden sm:block" />
              aren't the ones with the most resources.
              <br className="hidden sm:block" />
              They're the ones with the clearest strategy.
            </p>

            {/* Trusted By */}
            <div className="mt-11 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1506794778202-cad84cf45f1d",
                  "photo-1507003211169-0a1dd7228f2d",
                  "photo-1534528741775-53994a69daeb",
                  "photo-1508214751196-bcfd4ca60f91",
                ].map((photo, index) => (
                  <img
                    key={index}
                    src={`https://images.unsplash.com/${photo}?w=100`}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white/80 object-cover"
                  />
                ))}
              </div>

              <div>
                <div className="mb-2 flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      className="h-2 w-2 rounded-full bg-[#5BD1A9]"
                    />
                  ))}
                </div>
                <p className="text-[13px] font-medium tracking-tight">
                  Trusted by 50+ companies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Branding */}
        <div className="absolute bottom-10 right-8 z-10 flex items-center gap-2 sm:bottom-12 sm:right-12">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58C9A2] text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3.5 16.5 8 12 12l4.5 4L12 20.5 7.5 16 12 12 7.5 8 12 3.5Z" />
            </svg>
          </span>
          <span className="text-[25px] font-bold tracking-[-0.06em]">
            kora<sup className="text-[10px]">™</sup>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
