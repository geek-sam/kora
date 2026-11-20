import React from "react";

const benefits = [
  {
    title: "Performance Tracking.",
    description:
      "Real-time dashboards on every metric that matters. Monthly reports on pipeline health, revenue velocity, and ROI.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[17px] w-[17px]"
      >
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 15h8M9 12l2-2 2 2 2-3" />
        <path d="M9 3h6" />
      </svg>
    ),
  },
  {
    title: "Ongoing Optimization.",
    description:
      "Quarterly reviews to refine what's working and cut what isn't. Adjust positioning, retune pricing, scale the wins.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[17px] w-[17px]"
      >
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M9 15l6-6M9 9h.01M15 15h.01" />
      </svg>
    ),
  },
  {
    title: "Support & Training.",
    description:
      "Train new hires on the playbooks, update processes, get answers when you need them.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[17px] w-[17px]"
      >
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="12" width="4" height="7" rx="2" />
        <rect x="17" y="12" width="4" height="7" rx="2" />
        <path d="M17 19a4 4 0 0 1-4 2h-2" />
      </svg>
    ),
  },
];

const OperatingBenefits: React.FC = () => {
  return (
    <section className="w-full bg-[#fbfbf9] px-6 pb-24 pt-14 md:px-0 md:pb-32 md:pt-16">
      <div className="mx-auto max-w-[1500px]">
        {/* SECTION HEADING */}
        <h2 className="max-w-[750px] text-[clamp(29px,2.7vw,42px)] font-medium leading-[1.12] tracking-[-0.055em] text-[#252525]">
          We operate at the pace of your
          <br className="hidden sm:block" />
          pipeline, <span className="text-[#777777]">not a project plan.</span>
        </h2>

        {/* BENEFITS PANEL */}
        <div className="mt-10 grid grid-cols-1 gap-10 rounded-[24px] bg-[#242424] px-7 py-9 text-white sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:rounded-[28px] md:px-10 md:py-10 lg:px-12 lg:py-11">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="flex flex-col items-start">
              {/* Icon */}
              <div className="mb-5 text-white">{benefit.icon}</div>

              {/* Description */}
              <p className="max-w-[310px] text-[12px] leading-[1.55] tracking-[-0.025em] text-white/75 md:text-[12px]">
                <strong className="font-semibold text-white">
                  {benefit.title}
                </strong>{" "}
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingBenefits;
