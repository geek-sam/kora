import React from "react";

const heroStatement = "The strategies that built your company won't scale it.";

const HeroSection: React.FC = () => {
  return (
    <section data-hero className="absolute inset-0 z-10 bg-white p-3 md:p-4">
      {/* Hero Image Container */}
      <div className="hero-stage relative h-full w-full mx-auto max-w-[1920px]  bg-[#315c70] md:rounded-[40px]">
        {/* Background Visual */}
        <div
          data-hero-visual
          className="absolute inset-0 rounded-[24px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/hero-flower.jpg')] bg-cover bg-center" />

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#718393]/60 via-transparent to-[#123f55]/40" />
        </div>

        {/* Initial Hero Content */}
        <div
          data-hero-content
          className="absolute inset-0 z-10 flex flex-col justify-between px-6 pb-8 pt-36 text-white md:px-[3.6%] md:pb-10 md:pt-[145px]"
        >
          {/* Hero Heading */}
          <div className="max-w-[1100px]">
            <h1 className="text-[clamp(42px,5.1vw,86px)] font-normal leading-[1.03] tracking-[-0.065em]">
              Your growth partner for
              <br />
              companies ready to scale.
            </h1>

            <p className="mt-7 max-w-[370px] text-base font-medium leading-[1.4] md:text-xl">
              Kora helps leadership teams gain
              <br />
              clarity and build systems that scale.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center gap-5">
              <a
                href="#services"
                className="flex items-center gap-5 rounded-full bg-[#58c49e] px-4 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                Our Services
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </a>

              <a
                href="#pricing"
                className="flex items-center gap-3 text-sm font-medium text-white"
              >
                Pricing <span>→</span>
              </a>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
            {/* Trust Indicators */}
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-gray-300"
                    >
                      <img
                        src={`/trust/avatar-${item}.png`}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <div className="mb-1 flex gap-1">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <span
                        key={item}
                        className="h-2 w-2 rounded-full bg-[#58c49e]"
                      />
                    ))}
                  </div>

                  <p className="text-xs">Trusted by 50+ companies</p>
                </div>
              </div>

              {/* Client Logos */}
              <div className="flex flex-wrap items-center gap-7 text-xl font-semibold opacity-60 md:gap-10 md:text-2xl">
                <span>NAH</span>
                <span className="font-serif italic">theo</span>
                <span className="font-serif">venice.</span>
                <span>◖ Lightspeed</span>
                <span>✣ Sitemark</span>
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="flex w-full max-w-[460px] shrink-0 items-center gap-2 rounded-[28px] bg-[#f8f7ed] p-2.5 text-black">
              <div className="h-[190px] w-[38%] shrink-0 overflow-hidden rounded-[20px] bg-black md:h-[200px]">
                <img
                  src="/csHero.png"
                  alt="Sitemark case study"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex h-[190px] flex-1 flex-col justify-between rounded-[18px] bg-white p-3.5 md:h-[200px] md:p-4">
                <div>
                  <span className="inline-block rounded-full bg-[#222] px-3 py-2 text-xs text-white">
                    New Case Study
                  </span>

                  <p className="mt-3 text-[13px] leading-relaxed">
                    How Sitemark broke through an $18M plateau and grew 47% in
                    six months.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-semibold tracking-tight">
                      47%
                    </span>

                    <span className="text-xs leading-relaxed text-gray-500">
                      Revenue growth
                      <br />
                      in 6 months
                    </span>
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5ed]">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Hero Statement */}
        <div
          data-hero-statement
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-5 text-center text-white opacity-0 md:px-16"
        >
          <h2 className="max-w-[1050px] text-[clamp(40px,6.2vw,90px)] font-normal leading-[1.08] tracking-[-0.065em]">
            {heroStatement.split(" ").map((word, index) => (
              <span
                key={`${word}-${index}`}
                data-hero-word
                className="mr-[0.22em] inline-block"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
