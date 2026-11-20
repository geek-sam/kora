import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Building2,
  Camera,
  ExternalLink,
  Timer,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    id: 1,
    value: 2.4,
    suffix: "x",
    decimals: 1,
    description: (
      <>
        Revenue increase
        <br />
        achieved within 18 months.
      </>
    ),
    icon: "revenue",
  },
  {
    id: 2,
    value: 40,
    suffix: "%",
    decimals: 0,
    description: (
      <>
        Average reduction in
        <br />
        customer acquisition costs.
      </>
    ),
    icon: "customer",
  },
  {
    id: 3,
    value: 90,
    suffix: "%",
    decimals: 0,
    description: "Client retention rate.",
    icon: "retention",
  },
  {
    id: 4,
    value: 12,
    suffix: "+",
    decimals: 0,
    description: (
      <>
        Portfolio companies that have
        <br />
        raised Series B or beyond.
      </>
    ),
    icon: "growth",
  },
];

const MetricIcon = ({ type }: { type: string }) => {
  const common =
    "h-[19px] w-[19px] fill-none stroke-current stroke-[1.6] stroke-linecap-round stroke-linejoin-round";

  const icons: Record<string, React.ReactNode> = {
    revenue: (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M12 3v18M17 7.5c-.7-1-2-1.5-3.8-1.5-2.1 0-3.5 1-3.5 2.5 0 4 7.3 1.5 7.3 5.5 0 1.7-1.6 3-4 3-1.8 0-3.3-.6-4.2-1.8" />
        <path d="M20 12h-4" />
      </svg>
    ),
    customer: (
      <svg viewBox="0 0 24 24" className={common}>
        <circle cx="10" cy="8" r="4" />
        <path d="M3 20c.5-3.5 3-5.5 7-5.5 2 0 3.5.5 4.6 1.5" />
        <path d="m16 16 2 2 4-5" />
      </svg>
    ),
    retention: (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M3 9h4l3 3 3-2 4 3 4-3" />
        <path d="m3 9 3-3h4l4 3 3-2 4 2" />
        <path d="m7 14 3 3 2-1 2 2 2-2" />
      </svg>
    ),
    growth: (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M12 3 5 7v4c0 5 3 8 7 10 4-2 7-5 7-10V7l-7-4Z" />
        <path d="M12 8v7M9.5 10h5" />
      </svg>
    ),
  };

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4f4e9] text-[#333]">
      {icons[type]}
    </div>
  );
};

const ResultsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".metric-counter");

      counters.forEach((counter) => {
        const target = Number(counter.dataset.value);
        const decimals = Number(counter.dataset.decimals || 0);

        const counterObject = { value: 0 };

        gsap.to(counterObject, {
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            counter.textContent = counterObject.value.toFixed(decimals);
          },
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="results-section w-full text-[#252525]">
      {/* METRICS */}
      <div className="border-y border-[#eaeae5]">
        <div className="mx-auto grid max-w-[1490px] grid-cols-2 md:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.id}
              className="relative flex min-h-[205px] flex-col justify-between border-b border-l border-[#eaeae5] px-6 py-7 last:border-r-0 even:border-r-0 md:min-h-[250px] md:border-b-0 md:px-7 md:py-8 md:even:border-r md:last:border-r-0 lg:px-8"
            >
              {/* Icon */}
              <div className="flex justify-end">
                <MetricIcon type={metric.icon} />
              </div>

              {/* Number */}
              <div className="flex items-start gap-1">
                <span
                  className="metric-counter text-[clamp(43px,4vw,64px)] font-medium leading-none tracking-[-0.075em]"
                  data-value={metric.value}
                  data-decimals={metric.decimals}
                >
                  0
                </span>

                <span className="mt-0.5 text-[clamp(23px,2vw,32px)] font-medium leading-none tracking-[-0.06em] text-[#59bf9b]">
                  {metric.suffix}
                </span>
              </div>

              {/* Description */}
              <p className="text-[12px] leading-[1.55] text-[#666] md:text-[13px]">
                {metric.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* FOUNDER CTA */}
      <div className="mx-auto grid max-w-[1490px] grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[0.85fr_1.5fr_0.9fr] md:gap-8 md:px-8 md:py-24 lg:gap-12 lg:px-10">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <a
            href="/"
            className="flex items-center gap-1.5"
            aria-label="Kora home"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#59bf9b] text-white">
              <span className="text-sm">✿</span>
            </span>

            <span className="text-[21px] font-semibold tracking-tight">
              kora<span className="text-[10px] align-top">™</span>
            </span>
          </a>

          <p className="mt-5 max-w-[230px] text-[12px] leading-[1.6] text-[#666]">
            We're in the business of making things actually happen for our
            clients.
          </p>
        </div>

        {/* Founder Message */}
        <div>
          <h2 className="text-[clamp(23px,2.4vw,32px)] font-normal leading-[1.2] tracking-[-0.055em] text-[#686868]">
            I've personally led 40+ growth engagements.
            <span className="block font-medium text-[#252525]">
              Let me show you what's possible for yours.
            </span>
          </h2>

          {/* Founder Profile */}
          <div className="mt-7 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#59bf9b]">
              <img
                src="/team/koraline.png"
                alt="Koraline Spencer"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-[13px] font-medium">Koraline Spencer</p>
              <p className="mt-1 text-[12px] text-[#777]">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Book a Call CTA */}
        <div className="flex md:justify-end">
          <a
            href="#contact"
            className="group flex min-h-[58px] w-full items-center justify-center rounded-full bg-[#242424] px-8 text-[14px] font-medium text-white transition-all duration-500 ease-out hover:bg-[#59bf9b] hover:text-white hover:shadow-[0_8px_25px_rgba(89,191,155,0.2)] md:max-w-[310px]"
          >
            Book a call
          </a>
        </div>
      </div>

      {/* Case Study Container */}
      {/* <div className="mx-auto max-w-[1240px]"></div> */}
      <div className="rounded-[28px] mt-5 border-[7px] mx-auto max-w-[1500px] border-[#F4F4E9] bg-[#F4F4E9] p-0 sm:rounded-[36px] sm:p-1">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-2">
            {/* Project Overview */}
            <div className="flex min-h-[295px] flex-col justify-between rounded-[25px] bg-[#FFFFFC] p-6 sm:p-7">
              <div>
                <span className="text-[11px] font-medium text-[#666]">
                  March 18, 2026
                </span>

                <h3 className="mt-4 max-w-[570px] text-[23px] leading-[1.35] tracking-[-0.055em] font-medium text-[#252525] sm:text-[25px]">
                  How Sitemark broke through an $18M plateau and grew 47% in six
                  months.
                </h3>
              </div>

              {/* Project Details */}
              <div className="mt-7 space-y-3.5">
                <div className="grid grid-cols-2 items-center gap-3">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F5EB] px-2.5 py-1 text-[11px] font-medium text-[#292929]">
                      <Building2 size={15} />
                      Industry
                    </span>
                  </div>
                  <span className="text-[11px] text-[#656565]">
                    Enterprise Software
                  </span>
                </div>

                <div className="grid grid-cols-2 items-center gap-3">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F5EB] px-2.5 py-1 text-[11px] font-medium text-[#292929]">
                      <Users size={15} />
                      Company Size
                    </span>
                  </div>
                  <span className="text-[11px] text-[#656565]">
                    450 Employees
                  </span>
                </div>

                <div className="grid grid-cols-2 items-center gap-3">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F5EB] px-2.5 py-1 text-[11px] font-medium text-[#292929]">
                      <Timer size={15} />
                      Timeline
                    </span>
                  </div>
                  <span className="text-[11px] text-[#656565]">6 Months</span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid flex-1 grid-cols-2 overflow-hidden rounded-[25px] bg-[#FFFFFC]">
              {/* Stat 1 */}
              <div className="flex min-h-[210px] flex-col justify-between border-r border-[#F0F0EB] p-6 sm:p-7">
                <div className="flex justify-end">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5EB]">
                    <ExternalLink size={17} />
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-1">
                    <span className="text-[48px] leading-none tracking-[-0.07em] font-medium text-[#262626] sm:text-[52px]">
                      47
                    </span>
                    <span className="mt-0.5 text-2xl font-semibold text-[#58C49D]">
                      %
                    </span>
                  </div>

                  <p className="mt-9 text-[11px] tracking-tight text-[#656565]">
                    Revenue growth in 6 months
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex min-h-[210px] flex-col justify-between p-6 sm:p-7">
                <div className="flex justify-end">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5EB]">
                    <Camera size={17} />
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-1">
                    <span className="text-[48px] leading-none tracking-[-0.07em] font-medium text-[#262626] sm:text-[52px]">
                      2.4
                    </span>
                    <span className="mt-0.5 text-2xl font-semibold text-[#58C49D]">
                      x
                    </span>
                  </div>

                  <p className="mt-9 text-[11px] tracking-tight text-[#656565]">
                    Pipeline velocity increase
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-2">
            {/* Services + Testimonial */}
            <div className="grid min-h-[130px] grid-cols-2 overflow-hidden rounded-[25px] bg-[#FFFFFC]">
              {/* Services */}
              <div className="flex flex-col justify-center p-5 sm:p-6">
                <span className="mb-3 text-[11px] font-medium text-[#292929]">
                  Services
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Growth Strategy",
                    "Revenue Operations",
                    "Pricing & Packaging",
                  ].map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-[#F5F5EB] px-2.5 py-1 text-[10px] font-medium text-[#333]"
                    >
                      {service}
                    </span>
                  ))}

                  <span className="flex h-[23px] w-[29px] items-center justify-center rounded-full bg-[#262626] text-[10px] font-semibold text-white">
                    +2
                  </span>
                </div>
              </div>

              {/* Testimonial */}
              <div className="flex flex-col justify-center border-l border-[#F0F0EB] p-5 sm:p-6">
                <div className="mb-2 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="h-1.5 w-1.5 rounded-full bg-[#58C49D]"
                    />
                  ))}
                </div>

                <p className="text-[10px] leading-[1.5] text-[#555] sm:text-[11px]">
                  "Kora helped us realize we had a conversion problem, not a
                  capacity problem."
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/80?img=12"
                    alt="David Kim"
                    className="h-[19px] w-[19px] rounded-full object-cover"
                  />
                  <span className="text-[10px] font-medium text-[#333]">
                    David Kim
                  </span>
                </div>
              </div>
            </div>

            {/* Project Hero Image */}
            <div className="group relative h-[260px] overflow-hidden rounded-[25px] bg-[#101A1C] sm:h-[320px] lg:flex-1">
              <img
                src="/csHero.png"
                alt="Sitemark campaign visual"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Brand Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-3xl font-bold">✳</span>
                  <span className="text-xl font-semibold tracking-tight">
                    Sitemark
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/case-studies/sitemark"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#58C49D] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#43B58D]"
            >
              View Case Study
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
