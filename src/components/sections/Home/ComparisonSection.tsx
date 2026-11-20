import React from "react";

const beforeItems = [
  "Hiring more reps to fix a conversion problem.",
  "Pipeline that looks full but never closes.",
  "Pricing based on what competitors charge.",
  "Every quarter starts from zero.",
];

const afterItems = [
  "Every dollar of spend tied to revenue.",
  "Pipeline that converts predictably.",
  "Pricing built on what customers will pay.",
  "Compounding growth, quarter over quarter.",
];

const ComparisonSection: React.FC = () => {
  return (
    <section
      data-comparison
      className="absolute inset-0 z-20 overflow-hidden bg-[#fffefa]"
    >
      {/* Comparison Heading */}
      <div
        data-comparison-heading
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
      >
        <h2 className="flex flex-col items-center text-[clamp(34px,6.2vw,92px)] font-normal leading-[1.05] tracking-[-0.065em] text-[#202020]">
          <span
            data-heading-top
            className="block whitespace-nowrap will-change-transform"
          >
            What changes when
          </span>

          <span
            data-heading-bottom
            className="block whitespace-nowrap will-change-transform"
          >
            you work with us.
          </span>
        </h2>
      </div>

      {/* Comparison Cards Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* BEFORE CARD */}
        <article
          data-before-card
          className="absolute z-[2] w-[min(450px,44vw)] overflow-hidden rounded-[20px] bg-[#e9e8e3] p-6 text-[#222] shadow-[0_20px_80px_rgba(0,0,0,0.10)] md:rounded-[32px] md:p-10"
        >
          {/* Header */}
          <div>
            <span className="text-[12px] font-medium text-[#73736D]">
              Before
            </span>

            {/* Kora Logo */}
            <div className="mt-2 flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#65CE9B] flex items-center justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.5 3.5L17 8L12.5 12.5L8 8L12.5 3.5Z" />
                    <path d="M17 8L21.5 12.5L17 17L12.5 12.5" />
                    <path d="M12.5 12.5L8 17L3.5 12.5L8 8" />
                    <path d="M8 17L12.5 21.5L17 17" />
                  </g>
                </svg>
              </div>

              <span className="text-[28px] leading-none font-semibold tracking-[-1.8px] text-[#242424]">
                kora<sup className="text-[10px] ml-0.5 align-super">TM</sup>
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-10 text-[clamp(30px,5.2vw,40px)] leading-[1.08] font-medium tracking-[-2.8px] text-[#252525]">
              Guessing what
              <br />
              grows revenue.
            </h2>
          </div>

          {/* Checklist */}
          <div className="mt-12 pt-16 flex flex-col gap-6">
            {beforeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[31px] h-[31px] shrink-0 rounded-full bg-[#252525] flex items-center justify-center">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5L19 19M19 5L5 19"
                      stroke="white"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="text-[16px] sm:text-[18px] leading-[1.4] font-medium tracking-[-0.65px] text-[#292929]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* AFTER CARD */}
        <article
          data-after-card
          className="absolute z-[1] w-[min(450px,44vw)] overflow-hidden rounded-[20px] bg-[#5dc39b] p-6 text-[#ffffff] shadow-[0_20px_80px_rgba(0,0,0,0.12)] md:rounded-[32px] md:p-10"
        >
          {/* Header */}
          <div>
            <span className="text-[12px] font-medium text-white/75">After</span>

            {/* Kora Logo */}
            <div className="mt-2 flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#FBFBF8] flex items-center justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#5FC39D"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.5 3.5L17 8L12.5 12.5L8 8L12.5 3.5Z" />
                    <path d="M17 8L21.5 12.5L17 17L12.5 12.5" />
                    <path d="M12.5 12.5L8 17L3.5 12.5L8 8" />
                    <path d="M8 17L12.5 21.5L17 17" />
                  </g>
                </svg>
              </div>

              <span className="text-[28px] leading-none font-semibold tracking-[-1.8px] text-white">
                kora<sup className="text-[10px] ml-0.5 align-super">TM</sup>
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-10 text-[clamp(30px,5.2vw,40px)] leading-[1.1] font-medium tracking-[-2.8px] text-white">
              Knowing exactly
              <br />
              what moves
              <br />
              the number.
            </h2>
          </div>

          {/* Checklist */}
          <div className="mt-auto pt-16 flex flex-col gap-6">
            {afterItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* Check Icon */}
                <div className="w-[31px] h-[31px] shrink-0 rounded-full bg-[#F5F4E9] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12.5L10 17L19 7"
                      stroke="#252525"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="text-[16px] sm:text-[18px] leading-[1.4] font-medium tracking-[-0.65px] text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default ComparisonSection;
