import { useState } from "react";
import { pricingPlans } from "../../../data/dataConfig";

const PlanIcon = ({ type }: { type: string }) => {
  const common =
    "h-[17px] w-[17px] fill-none stroke-current stroke-[1.6] stroke-linecap-round stroke-linejoin-round";

  switch (type) {
    case "sprint":
      return (
        <svg viewBox="0 0 24 24" className={common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2M8 3l-2 2M16 3l2 2" />
        </svg>
      );

    case "partnership":
      return (
        <svg viewBox="0 0 24 24" className={common}>
          <path d="M3 9h4l3 3 3-2 4 3 4-3" />
          <path d="m3 9 3-3h4l4 3 3-2 4 2" />
          <path d="m7 14 3 3 2-1 2 2 2-2" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={common}>
          <path d="M12 3 5 7v4c0 5 3 8 7 10 4-2 7-5 7-10V7l-7-4Z" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      );
  }
};

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("sprint");

  const activePlan =
    pricingPlans.find((plan) => plan.id === selectedPlan) ?? pricingPlans[0];

  return (
    <section className="w-full mx-auto max-w-[1500px] px-3 py-3 md:px-4 md:py-">
      {/* Main Pricing Container */}
      <div className="relative overflow-hidden rounded-[24px] bg-[#242424] px-6 py-12 text-white md:rounded-[36px] md:px-[7.6%] md:py-[6.5%]">
        <div className="mx-auto max-w-[1450px]">
          {/* HEADER */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-[570px] text-[clamp(42px,5vw,72px)] font-medium leading-[1.04] tracking-[-0.07em]">
              Pricing <span className="text-white/65">for your</span>
              <br />
              <span className="text-white/65">next stage.</span>
            </h2>

            {/* Trust Indicators */}
            <div className="flex items-center gap-3 md:mt-12">
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#242424] bg-gray-400"
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
                      className="h-1.5 w-1.5 rounded-full bg-[#59bf9b]"
                    />
                  ))}
                </div>

                <p className="text-[11px] font-medium">
                  Trusted by 50+ companies
                </p>
              </div>
            </div>
          </div>

          {/* PRICING CONTENT */}
          <div className="mt-12 grid grid-cols-1 items-start gap-5 lg:mt-16 lg:grid-cols-[0.85fr_1.25fr] lg:gap-4">
            {/* LEFT COLUMN */}
            <div className="flex flex-col">
              {/* Plan Selector */}
              <div className="flex flex-col gap-2 rounded-[26px] bg-[#f4f4e9] p-2.5">
                {pricingPlans.map((plan) => {
                  const isSelected = selectedPlan === plan.id;

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlan(plan.id)}
                      aria-pressed={isSelected}
                      className={`group flex min-h-[76px] w-full items-center gap-3 rounded-[21px] px-3 py-3 text-left transition-all duration-300 md:px-4 ${
                        isSelected
                          ? "bg-white text-[#252525] shadow-sm"
                          : "bg-[#fffef9] text-[#292929] hover:bg-white"
                      }`}
                    >
                      {/* Icon */}
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          isSelected
                            ? "bg-[#59bf9b] text-white"
                            : "bg-[#f4f4e9] text-[#333]"
                        }`}
                      >
                        <PlanIcon type={plan.icon} />
                      </span>

                      {/* Plan Details */}
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="text-[16px] font-medium tracking-tight">
                            {plan.name}
                          </span>

                          {plan.popular && (
                            <span className="rounded-full bg-[#59bf9b] px-2.5 py-1 text-[10px] font-medium text-white">
                              Popular
                            </span>
                          )}
                        </span>

                        <span className="mt-1 block text-[12px] text-[#777]">
                          {plan.subtitle}
                        </span>
                      </span>

                      {/* Selection Indicator */}
                      <span
                        className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isSelected
                            ? "bg-[#242424] text-white"
                            : "bg-[#e6e6e6] text-transparent"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            viewBox="0 0 16 16"
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="m3 8 3 3 7-7" />
                          </svg>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Discovery Call */}
              <div className="mt-10">
                <p className="max-w-[370px] text-[16px] font-medium leading-[1.55] tracking-tight text-white/80">
                  All engagements start with a{" "}
                  <span className="text-[#59bf9b]">free</span> 30-minute
                  discovery call. No commitment required.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#59bf9b]">
                    <img
                      src="/team/david.png"
                      alt="David Wilson"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[12px] font-medium">David Wilson</p>
                    <p className="mt-1 text-[11px] text-white/65">
                      Head of Client Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT DETAILS CARD */}
            <div
              key={activePlan.id}
              className="pricing-details-card min-h-[390px] rounded-[26px] bg-[#3b3b3b] p-7 md:p-9 lg:min-h-[428px] lg:p-11"
            >
              {/* Price and CTA */}
              <div className="grid grid-cols-1 gap-7 md:grid-cols-[0.9fr_1fr] md:items-center">
                {/* Price */}
                <div>
                  <p className="text-[11px] font-medium text-white/70">
                    {activePlan.price === "Custom" ? "Pricing" : "Starts at"}
                  </p>

                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-[clamp(40px,4vw,62px)] font-medium leading-none tracking-[-0.075em]">
                      {activePlan.price}
                    </span>

                    {activePlan.period && (
                      <span className="text-[12px] font-medium text-white/65">
                        {activePlan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="flex min-h-[52px] items-center justify-center rounded-full bg-[#f4f4e9] px-6 text-[14px] font-medium text-[#252525] transition-all duration-400 hover:bg-[#59bf9b] hover:text-white hover:shadow-[0_8px_25px_rgba(89,191,155,0.2)]"
                >
                  Get Started
                </a>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-[440px] text-[13px] font-medium leading-[1.6] text-white/85">
                {activePlan.description}
              </p>

              {/* Features */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {activePlan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#f4f4e9] text-[#242424]">
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m3 8 3 3 7-7" />
                      </svg>
                    </span>

                    <span className="text-[11px] font-medium leading-[1.5] text-white/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
