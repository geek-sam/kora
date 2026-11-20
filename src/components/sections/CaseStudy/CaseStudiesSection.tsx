// import React from "react";
import { ArrowUpRight } from "lucide-react";

type Client = {
  name: string;
  className: string;
};

type CaseStudy = {
  id: number;
  brand: string;
  brandLogo?: string;
  date: string;
  title: string;
  image: string;
  imageAlt: string;
  stats: {
    value: string;
    label: string;
  }[];
};

const clients: Client[] = [
  { name: "MILANO", className: "font-light tracking-[0.15em]" },
  { name: "OSLO.", className: "font-black tracking-[0.1em]" },
  { name: "SAVANNAH", className: "font-black tracking-tight" },
  { name: "Theo", className: "font-serif italic tracking-wider" },
  { name: "venice.", className: "font-serif font-bold" },
  { name: "●●● Lightspeed", className: "font-bold tracking-tight" },
  { name: "✳ Sitemark", className: "font-bold tracking-tight" },
  { name: "✳ Hamilton", className: "font-light tracking-tight" },
  { name: "◉", className: "font-bold" },
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    brand: "Lightspeed",
    date: "March 12, 2026",
    title:
      "How Lightspeed tripled revenue in 18 months by rebuilding their sales engine from the ground up.",
    image: "/lightspeed.png",
    imageAlt: "Lightspeed campaign visual",
    stats: [
      {
        value: "3.1x",
        label: "Revenue growth in 18 months",
      },
      {
        value: "34%",
        label: "Close rate (from 12%)",
      },
    ],
  },
  {
    id: 2,
    brand: "Hamilton",
    date: "March 5, 2026",
    title:
      "How Hamilton broke their referral ceiling and grew from $6M to $15.6M in a year.",
    image: "/hamilton.png",
    imageAlt: "Hamilton campaign visual",
    stats: [
      {
        value: "2.6x",
        label: "Revenue in 12 months",
      },
      {
        value: "41%",
        label: "Revenue from new channels",
      },
    ],
  },
  {
    id: 3,
    brand: "Sitemark",
    date: "February 21, 2026",
    title:
      "How Sitemark broke through an $18M plateau and grew 47% in six months.",
    image: "/team-hiring.png",
    imageAlt: "Sitemark campaign visual",
    stats: [
      {
        value: "47%",
        label: "Revenue growth in 6 months",
      },
      {
        value: "2.4x",
        label: "Pipeline velocity increase",
      },
    ],
  },
  {
    id: 4,
    brand: "Venice",
    date: "February 10, 2026",
    title:
      "How Venice transformed its customer experience and unlocked sustainable growth.",
    image: "/venice.png",
    imageAlt: "Venice campaign visual",
    stats: [
      {
        value: "58%",
        label: "Increase in conversions",
      },
      {
        value: "3.2x",
        label: "Customer acquisition growth",
      },
    ],
  },
];

// Logo Marquee
const LogoMarquee = () => {
  return (
    <div className="relative mt-10 overflow-hidden">
      {/* Side fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#FCFCFA] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#FCFCFA] to-transparent sm:w-20" />

      <div className="logo-marquee flex w-max items-center hover:[animation-play-state:paused]">
        {[0, 1, 2].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
            aria-hidden={group !== 0}
          >
            {clients.map((client, index) => (
              <div
                key={`${group}-${index}`}
                className={`whitespace-nowrap text-[17px] text-[#292929] sm:text-[21px] ${client.className}`}
              >
                {client.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Individual Case Study Card
const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <article className="rounded-[27px] border-[7px] border-[#F3F3E9] bg-[#F3F3E9] p-0 sm:rounded-[34px] sm:border-[8px]">
      {/* Image */}
      <div className="group relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#DADAD5]">
        <img
          src={study.image}
          alt={study.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/30" />

        {/* Brand Name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-center text-2xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-[25px]">
            {study.brand === "Lightspeed" && "●●● "}
            {study.brand === "Sitemark" && "✳ "}
            {study.brand === "Hamilton" && "✳ "}
            {study.brand}
          </span>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-2 overflow-hidden rounded-[23px] bg-[#FFFFFC]">
        {/* Description */}
        <div className="min-h-[122px] px-5 py-5 sm:px-6">
          <span className="text-[10px] font-medium text-[#666]">
            {study.date}
          </span>

          <h3 className="mt-3 max-w-[460px] text-[16px] font-medium leading-[1.45] tracking-[-0.045em] text-[#262626] sm:text-[17px]">
            {study.title}
          </h3>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 border-t border-[#F0F0EB]">
          {study.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex min-h-[100px] flex-col justify-center px-5 py-4 sm:px-6 ${
                index === 0 ? "border-r border-[#F0F0EB]" : ""
              }`}
            >
              <span className="text-[25px] font-medium leading-none tracking-[-0.06em] text-[#262626] sm:text-[27px]">
                {stat.value}
              </span>

              <span className="mt-2 text-[10px] leading-relaxed text-[#666] sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={`/case-studies/${study.brand.toLowerCase()}`}
        className="group mt-2 flex min-h-[47px] items-center justify-center gap-2 rounded-full bg-[#242424] px-5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#58C49D]"
      >
        View Case Study
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </article>
  );
};

// Main Section
const CaseStudies = () => {
  return (
    <section className="bg-[#FCFCFA] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-[1220px]">
        {/* Trusted By */}
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-[20px] font-medium leading-[1.4] tracking-[-0.045em] text-[#292929] sm:text-[24px]">
            Trusted by more than 50 companies,
            <span className="text-[#777]">
              {" "}
              from ambitious startups to major enterprises.
            </span>
          </h2>
        </div>

        {/* Logo Marquee */}
        <LogoMarquee />

        {/* Case Study Grid */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
