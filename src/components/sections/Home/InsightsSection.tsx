import { insights } from "../../../data/dataConfig";

const CategoryIcon = ({ category }: { category: string }) => {
  const common =
    "h-[18px] w-[18px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round";

  if (category === "Technology Selection") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <rect x="3" y="3" width="18" height="15" rx="2" />
        <path d="M8 21h8M12 18v3M8 10l3 3 5-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="m12 12 7-7M15 5h4v4" />
    </svg>
  );
};

interface InsightCardProps {
  insight: (typeof insights)[number];
}

const InsightCard = ({ insight }: InsightCardProps) => {
  return (
    <a
      href={`/insights/${insight.slug}`}
      className="insight-card group relative isolate block aspect-[0.75] min-h-[480px] overflow-hidden rounded-[28px] bg-[#333] text-white md:min-h-[560px]"
    >
      {/* Background Image */}
      <img
        src={insight.image}
        alt={insight.title}
        loading="lazy"
        className="insight-card-image absolute inset-0 -z-20 h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.09] group-hover:blur-[2px]"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/15 via-transparent to-black/60 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Additional Hover Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />

      {/* Category Badge */}
      <div className="absolute left-6 top-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#242424]/85 px-3 py-2 text-[11px] font-medium text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-[#59bf9b]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#242424]">
            <CategoryIcon category={insight.category} />
          </span>

          {insight.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <p className="mb-3 text-[12px] font-medium text-white/85">
          {insight.date}
        </p>

        <h3 className="max-w-[390px] text-[clamp(22px,2vw,30px)] font-medium leading-[1.3] tracking-[-0.055em] transition-transform duration-500 group-hover:-translate-y-1">
          {insight.title}
        </h3>

        {/* Hover Indicator */}
        <div className="mt-4 flex items-center gap-2 overflow-hidden">
          <span className="translate-y-5 text-[12px] font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Read insight
          </span>

          <span className="translate-y-5 text-sm opacity-0 transition-all delay-75 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            ↗
          </span>
        </div>
      </div>
    </a>
  );
};

const InsightsSection = () => {
  return (
    <section id="insights" className="w-full px-3 py-16 md:px-4 md:py-20">
      <div className="mx-auto grid max-w-[1370px] grid-cols-1 gap-8 md:grid-cols-[1.08fr_1fr_1fr] md:gap-5">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start justify-between md:min-h-[620px] md:py-1">
          <div>
            <h2 className="text-[clamp(56px,6vw,82px)] font-normal leading-[0.98] tracking-[-0.075em] text-[#252525]">
              Insights.
            </h2>

            <p className="mt-8 max-w-[360px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#707070] md:mt-9 md:text-[19px]">
              Lessons, frameworks, and honest
              <br className="hidden lg:block" />
              takes on what it actually takes to grow.
            </p>
          </div>

          {/* View All Button */}
          <a
            href="/insights"
            className="group mt-8 inline-flex min-h-[44px] items-center gap-6 rounded-full bg-[#242424] px-4 py-2.5 text-[13px] font-medium text-white transition-all duration-500 hover:bg-[#59bf9b] md:mt-0"
          >
            View All
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4f4e9] transition-transform duration-300 group-hover:scale-125" />
          </a>
        </div>

        {/* INSIGHT CARDS */}
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
