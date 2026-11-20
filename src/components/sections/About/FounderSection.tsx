import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = ["um", "MILANO", "oslo.", "SAVANNAH", "Lightspeed", "Sitemark"];

const stats = [
  {
    value: 2019,
    suffix: "",
    label: "Year we",
    subLabel: "were founded",
  },
  {
    value: 140,
    suffix: "+",
    label: "Engagements",
    subLabel: "completed",
  },
  {
    value: 92,
    suffix: "%",
    label: "Client",
    subLabel: "retention rate",
  },
];

const FounderSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation on initial load
      counterRefs.current.forEach((counter, index) => {
        if (!counter) return;

        const target = stats[index].value;
        const counterObject = { value: 0 };

        gsap.to(counterObject, {
          value: target,
          duration: 2,
          ease: "power2.out",
          delay: 0.2 + index * 0.15,
          onUpdate: () => {
            counter.textContent = Math.round(counterObject.value).toString();
          },
        });
      });

      // Section entrance animation
      gsap.from(".founder-content", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Image entrance
      gsap.from(".founder-image", {
        y: 45,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fbfbf9] px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1220px]">
        {/* Heading */}
        <div className="founder-content mb-12 md:mb-14">
          <h2 className="max-w-[800px] text-[clamp(42px,5vw,58px)] leading-[1.03] tracking-[-0.065em]">
            <span className="block text-[#666666]">Built by operators,</span>
            <span className="block text-[#242424]">for operators.</span>
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {/* Founder Quote Card */}
          <div className="founder-content flex min-h-[390px] flex-col justify-between rounded-[22px] bg-[#f5f5e9] p-7 md:min-h-[400px] md:p-9">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-[260px] text-[22px] leading-[1.28] tracking-[-0.045em] text-[#292929] md:text-[23px]">
                  I spent fifteen years inside the companies we now advise.
                </h3>

                <span className="text-5xl leading-none text-[#58c49e]">”</span>
              </div>

              <div className="mt-5 max-w-[310px] space-y-4 text-[12px] leading-[1.55] text-[#555555]">
                <p>
                  Operating partner at a growth equity firm, COO of a
                  venture-backed SaaS company. And everywhere I went, I saw the
                  same thing: smart teams with real potential stalling in the
                  gap between strategy and execution.
                </p>

                <p>
                  The consultants came and went. Beautiful decks, no
                  follow-through. Internal teams had the context but not the
                  frameworks. So I built Kora to be the thing I always wished
                  existed: a partner that stays until the numbers actually move.
                </p>
              </div>

              <p className="mt-5 text-[11px] text-[#52677a]">
                Koraline Spencer, Founder
              </p>
            </div>

            {/* Company Logo Marquee */}
            <div className="relative mt-8 overflow-hidden">
              <div className="logo-marquee flex w-max items-center gap-12">
                {[...logos, ...logos].map((logo, index) => (
                  <span
                    key={`${logo}-${index}`}
                    className={`whitespace-nowrap text-sm font-bold tracking-tight ${
                      index % logos.length === 0
                        ? "italic text-gray-300"
                        : "text-[#292929]"
                    }`}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Founder Image */}
          <div className="founder-image group relative min-h-[390px] overflow-hidden rounded-[22px] md:min-h-[400px]">
            <img
              src="/images/founder-koraline.jpg"
              alt="Koraline Spencer, founder of Kora"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>

          {/* Team Image 1 */}
          <div className="founder-image group relative h-[300px] overflow-hidden rounded-[22px] md:h-[400px]">
            <img
              src="/images/founder-team-1.jpg"
              alt="Kora team collaborating"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>

          {/* Team Image 2 */}
          <div className="founder-image group relative h-[300px] overflow-hidden rounded-[22px] md:h-[400px]">
            <img
              src="/images/founder-team-2.jpg"
              alt="Kora team working together"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="founder-content mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-16 md:gap-5">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="whitespace-nowrap text-[42px] leading-none tracking-[-0.065em] text-[#242424] md:text-[44px]">
                <span
                  ref={(el) => {
                    counterRefs.current[index] = el;
                  }}
                >
                  0
                </span>
                {stat.suffix}
              </div>

              <div className="text-[10px] leading-[1.4] text-[#555555]">
                <p>{stat.label}</p>
                <p>{stat.subLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        .logo-marquee {
          animation: founder-marquee 22s linear infinite;
        }

        .logo-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes founder-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default FounderSection;
