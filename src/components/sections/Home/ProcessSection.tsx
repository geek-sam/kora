import { useState } from "react";
import HowWeWorkSection from "./HowWeWorkSection";
import OperatingBenefits from "./OperatingBenefits";

interface Process {
  number: string;
  phase: string;
  title: string;
  description: string;
  icon: string;
  points: string[];
}

const processes: Process[] = [
  {
    number: "01",
    phase: "Phase 01",
    title: "Discover",
    description:
      "We get close to your business, understand your challenges, and identify the opportunities that will make the biggest difference.",
    icon: "◎",
    points: [
      "Business & Market Research",
      "Customer Discovery",
      "Opportunity Mapping",
    ],
  },
  {
    number: "02",
    phase: "Phase 02",
    title: "Strategize",
    description:
      "We turn insights into a clear roadmap, align your team around priorities, and define a strategy built for measurable growth.",
    icon: "⌁",
    points: ["Growth Roadmap", "Strategic Planning", "Success Metrics"],
  },
  {
    number: "03",
    phase: "Phase 03",
    title: "Build",
    description:
      "Hands-on execution alongside your team. We don't just advise — we build systems, run experiments, and create the infrastructure your next stage requires.",
    icon: "♧",
    points: [
      "Systems & Process Design",
      "Growth Experiments",
      "Execution & Implementation",
    ],
  },
  {
    number: "04",
    phase: "Phase 04",
    title: "Scale",
    description:
      "We measure what works, optimize performance, and establish repeatable systems that support sustainable long-term growth.",
    icon: "↗",
    points: [
      "Performance Optimization",
      "Revenue Measurement",
      "Continuous Improvement",
    ],
  },
];

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <section className="process-section w-full overflow-hidden px-6 pt-24 md:px-[7.6%] md:pt-28">
      <div className="mx-auto max-w-[1500px]">
        {/* SECTION INTRODUCTION */}
        <div className="max-w-[900px]">
          <h2 className="text-[clamp(42px,5.2vw,78px)] font-normal leading-[1.04] tracking-[-0.065em] text-[#252525]">
            Most consultancies
            <br />
            slow you down <span className="text-[#777777]">with</span>
            <br />
            <span className="text-[#777777]">process and overhead.</span>
          </h2>

          <p className="mt-7 max-w-[400px] text-base leading-[1.5] tracking-[-0.025em] text-[#666666] md:text-lg">
            We built our process to get to revenue
            <br className="hidden sm:block" />
            impact in weeks, not quarters.
          </p>
        </div>

        {/* DESKTOP INTERACTIVE CARDS */}
        <div
          className="mt-16 hidden h-[min(48vh,460px)] min-h-[360px] w-full gap-2.5 rounded-[40px] bg-[#f3f3e8] p-2.5 md:flex lg:mt-20"
          //   onMouseLeave={() => setActiveIndex(0)}
        >
          {processes.map((process, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={process.number}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                tabIndex={0}
                aria-expanded={isActive}
                className={`process-card group relative flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-[30px] transition-[flex-grow,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "flex-[4.2] bg-[#242424] text-white"
                    : "flex-[1] bg-[#fffef9] text-[#292929]"
                }`}
              >
                {/* CARD HEADER */}
                <div className="flex shrink-0 items-center justify-between px-6 pt-10 md:px-7 md:pt-12 lg:px-12">
                  <span
                    className={`text-sm font-medium transition-colors duration-500 ${
                      isActive ? "text-white" : "text-[#292929]"
                    }`}
                  >
                    {isActive ? process.phase : ""}
                  </span>

                  {isActive && (
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4].map((dot) => (
                        <span
                          key={dot}
                          className={`h-2 w-2 rounded-full ${
                            dot === index + 1 ? "bg-[#59bf9b]" : "bg-white/25"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* COLLAPSED NUMBER */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-start justify-center pt-10 md:pt-12">
                    <span className="text-sm font-medium">
                      {process.number}
                    </span>
                  </div>
                )}

                {/* EXPANDED CONTENT */}
                <div
                  className={`mt-auto w-full px-7 pb-10 transition-all duration-500 md:px-7 md:pb-12 lg:px-12 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-2xl text-white/80">
                      {process.icon}
                    </span>

                    <h3 className="text-xl font-medium tracking-tight">
                      {process.title}
                    </h3>
                  </div>

                  <p className="max-w-[520px] text-sm leading-[1.55] text-white/75 md:text-[15px]">
                    {process.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {process.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="mt-12 md:hidden">
          <div
            className="process-mobile-carousel flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5"
            onScroll={(event) => {
              const container = event.currentTarget;
              const card = container.querySelector<HTMLElement>(
                ".process-mobile-card",
              );

              if (!card) return;

              const cardWidth = card.offsetWidth + 12;
              const index = Math.round(container.scrollLeft / cardWidth);

              setMobileIndex(
                Math.min(Math.max(index, 0), processes.length - 1),
              );
            }}
          >
            {processes.map((process, index) => (
              <article
                key={process.number}
                className="process-mobile-card relative flex min-h-[420px] w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] bg-[#242424] p-7 text-white"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{process.phase}</span>

                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((dot) => (
                      <span
                        key={dot}
                        className={`h-2 w-2 rounded-full ${
                          dot === index + 1 ? "bg-[#59bf9b]" : "bg-white/25"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-2xl text-white/80">
                      {process.icon}
                    </span>

                    <h3 className="text-2xl font-medium">{process.title}</h3>
                  </div>

                  <p className="text-sm leading-[1.6] text-white/75">
                    {process.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {process.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CAROUSEL INDICATORS */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs text-[#777]">
              {String(mobileIndex + 1).padStart(2, "0")} / 04
            </span>

            <div className="flex gap-2">
              {processes.map((process, index) => (
                <button
                  key={process.number}
                  aria-label={`Go to ${process.phase}`}
                  onClick={() => {
                    const container = document.querySelector(
                      ".process-mobile-carousel",
                    );

                    const card = container?.querySelectorAll(
                      ".process-mobile-card",
                    )[index];

                    card?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "start",
                    });

                    setMobileIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileIndex === index
                      ? "w-8 bg-[#59bf9b]"
                      : "w-3 bg-[#d7d7ce]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <HowWeWorkSection
        videoSrc="/videos/how-we-work.mp4"
        poster="/images/how-we-work-poster.jpg"
      />

      <OperatingBenefits />
    </section>
  );
};

export default ProcessSection;
