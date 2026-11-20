import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import ServiceCards from "./ServiceCards";
import { services } from "../../../data/dataConfig";
import ServiceCard from "../../common/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const ticks = ["0M", "2M", "4M", "6M", "8M", "10M", "12M", "14M"];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const koraBarRef = useRef<HTMLDivElement>(null);
  const withoutBarRef = useRef<HTMLDivElement>(null);
  const koraLabelRef = useRef<HTMLDivElement>(null);
  const withoutLabelRef = useRef<HTMLDivElement>(null);
  const axisRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation states
      gsap.set([koraBarRef.current, withoutBarRef.current], { width: 0 });

      gsap.set(
        [
          gridRef.current,
          koraLabelRef.current,
          withoutLabelRef.current,
          axisRef.current,
        ],
        { opacity: 0 },
      );

      // Chart animation - plays only once
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // 01. Grid lines
      timeline.to(
        gridRef.current,
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        0,
      );

      // 02. With Kora bar
      timeline.to(
        koraBarRef.current,
        {
          width: "100%",
          duration: 1.5,
          ease: "power3.out",
        },
        0.3,
      );

      // 03. Kora label
      timeline.to(
        koraLabelRef.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        1,
      );

      // 04. Without Kora bar
      timeline.to(
        withoutBarRef.current,
        {
          width: "67.6%",
          duration: 1.4,
          ease: "power3.out",
        },
        0.8,
      );

      // 05. Without label
      timeline.to(
        withoutLabelRef.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        1.5,
      );

      // 06. Axis labels
      timeline.to(
        axisRef.current,
        {
          opacity: 1,
          duration: 0.6,
        },
        1.8,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full overflow-visible px-6 pt-20 text-[#252525] md:px-[5.8%] md:pt-24 lg:pt-20"
    >
      <div className="relative mx-auto w-full max-w-[1500px]">
        {/* SECTION HEADING */}
        <h2 className="text-[clamp(64px,7.2vw,122px)] font-normal leading-[0.95] tracking-[-0.075em]">
          Services.
        </h2>
        <div className="sticky top-0">
          {/* INTRODUCTION */}
          <div className="mt-16 max-w-[780px] md:mt-20">
            <p className="text-[clamp(21px,1.8vw,30px)] font-medium leading-[1.3] tracking-[-0.045em] text-[#666666]">
              Within six months of working with Kora, clients experienced an{" "}
              <span className="text-[#59bf9b]">
                average 47% increase in annual revenue
              </span>{" "}
              based on pre and post-engagement performance.
            </p>

            <p className="mt-5 text-[11px] font-medium leading-relaxed text-[#777777] md:text-[13px]">
              *Across B2B clients with $5M to $50M in annual revenue over a
              standard 6-month engagement.
            </p>
          </div>
          {/* REVENUE COMPARISON CHART */}
          <div className="mt-14 md:mt-[52px]">
            {/* Chart Plot */}
            <div className="relative">
              {/* Vertical Grid Lines */}
              <div
                ref={gridRef}
                className="pointer-events-none absolute inset-0 grid grid-cols-8 opacity-0"
              >
                {ticks.map((tick) => (
                  <div
                    key={tick}
                    className="relative h-full border-l border-dashed border-[#dededb] last:border-r"
                  />
                ))}
              </div>

              {/* Revenue Bars */}
              <div className="relative flex flex-col gap-[10px] py-10">
                {/* WITH KORA */}
                <div
                  ref={koraBarRef}
                  className="relative flex h-[50px] w-0 items-center overflow-hidden rounded-[16px] bg-[#59bf9b] md:h-[51px]"
                >
                  <div
                    ref={koraLabelRef}
                    className="flex w-full items-center justify-between whitespace-nowrap px-4 text-[12px] font-semibold text-white opacity-0 md:text-[14px]"
                  >
                    <span>With Kora</span>
                    <span>$14.2M avg ARR</span>
                  </div>
                </div>

                {/* WITHOUT KORA */}
                <div
                  ref={withoutBarRef}
                  className="relative flex h-[50px] w-0 items-center overflow-hidden rounded-[16px] bg-[#e5e5e5] md:h-[51px]"
                >
                  <div
                    ref={withoutLabelRef}
                    className="flex w-full items-center justify-between whitespace-nowrap px-4 text-[12px] font-medium text-[#333333] opacity-0 md:text-[14px]"
                  >
                    <span>Without</span>
                    <span>$9.6M avg ARR</span>
                  </div>
                </div>
              </div>

              {/* Horizontal Axis */}
              <div
                ref={axisRef}
                className="relative border-t border-dashed border-[#dededb] opacity-0"
              >
                <div className="grid grid-cols-8">
                  {ticks.map((tick, index) => (
                    <div
                      key={tick}
                      className={`pt-2 text-[11px] font-medium text-[#333333] md:text-[13px] ${
                        index === 0
                          ? "text-left"
                          : index === ticks.length - 1
                            ? "text-right"
                            : "text-center"
                      }`}
                    >
                      {tick}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Axis Description */}
            <p className="mt-8 text-center text-[12px] font-medium text-[#777777] md:mt-9 md:text-[13px]">
              Annual Recurring Revenue ($M)
            </p>
          </div>
        </div>
      </div>

      {/* STACKED SERVICE CARDS */}
      <div className="relative overflow-clip z-10 mt-16 md:mt-24 mx-auto w-full max-w-[1500px]">
        {services.map((service, index) => (
          <div
            key={service.number}
            className="service-sticky-card"
            style={{
              top: "40px",
              zIndex: index + 1,
            }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
