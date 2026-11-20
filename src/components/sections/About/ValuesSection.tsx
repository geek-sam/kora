import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  LayoutGrid,
  Target,
  ChartNoAxesCombined,
  Handshake,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: LayoutGrid,
    title: "Clarity over complexity",
    description:
      "Simple strategies executed well beat complex ones gathering dust.",
  },
  {
    icon: Target,
    title: "Speed over perfection",
    description:
      "The fastest learner wins. We'd rather test in two weeks than plan for two months.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Outcomes over outputs",
    description:
      "We don't measure success in deliverables. We measure it in revenue.",
  },
  {
    icon: Handshake,
    title: "Partnership over dependency",
    description: "We build your capability, not a retainer relationship.",
  },
];

const ValuesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".value-card");

      gsap.from(".values-heading", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(cards, {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".philosophy-content", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".philosophy-content",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".philosophy-label", {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".philosophy-content",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fbfbf9] px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1136px]">
        {/* Heading */}
        <h2 className="values-heading mb-12 text-[clamp(42px,5vw,58px)] leading-[1.05] tracking-[-0.065em] text-[#242424] md:mb-14">
          What we value.
        </h2>

        {/* Value Cards */}
        <div className="values-grid grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="value-card group flex min-h-[210px] flex-col justify-between rounded-[22px] bg-[#242424] p-6 text-white transition-colors duration-500 hover:bg-[#58c49e] md:min-h-[210px] md:p-[22px]"
              >
                <div>
                  <Icon
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="mb-3 text-[12px] font-semibold tracking-[-0.03em]">
                    {value.title}
                  </h3>

                  <p className="max-w-[230px] text-[11px] leading-[1.5] text-white/65 transition-colors duration-500 group-hover:text-white">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-[1fr_2.1fr]">
          {/* Label */}
          <div className="philosophy-label">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f5f5e9] px-3 py-1.5 text-[11px] font-medium text-[#242424]">
              <Sparkles size={13} strokeWidth={1.6} />
              Philosophy
            </span>
          </div>

          {/* Content */}
          <div className="philosophy-content max-w-[530px]">
            <h3 className="text-[21px] leading-[1.4] tracking-[-0.045em] text-[#242424] md:text-[23px]">
              We don't believe in perfect plans.
              <br className="hidden sm:block" />
              We believe in clear thinking, rapid
              <br className="hidden sm:block" />
              learning, and disciplined iteration.
            </h3>

            <p className="mt-6 max-w-[360px] text-[13px] leading-[1.5] text-[#666666]">
              The best strategies evolve as you learn more about your market.
              Our job is to help you build both the initial thesis and the
              capability to refine it continuously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
