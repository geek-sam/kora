import {
  Building2,
  Users,
  Timer,
  ExternalLink,
  Camera,
  ArrowUpRight,
} from "lucide-react";

const CaseStudyHero = () => {
  return (
    <section className="bg-[#FCFCFA] px-5 py-20 sm:px-8 lg:px-12 lg:py-30">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.075em] font-medium text-[#242424]">
            Case studies.
          </h2>

          <p className="mt-10 max-w-[400px] text-lg leading-[1.35] tracking-[-0.04em] text-[#686868] sm:text-2xl">
            The work speaks for itself. Here's
            <br className="hidden sm:block" /> what growth looks like in
            practice.
          </p>
        </div>

        {/* Main Case Study Container */}
        <div className="rounded-[28px] border-[7px] border-[#F4F4E9] bg-[#F4F4E9] p-0 sm:rounded-[36px] sm:p-1">
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
                    How Sitemark broke through an $18M plateau and grew 47% in
                    six months.
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
                  src="/team-hiring.png"
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
      </div>
    </section>
  );
};

export default CaseStudyHero;
