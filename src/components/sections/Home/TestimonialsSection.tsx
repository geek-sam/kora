import { useState } from "react";
import { testimonials } from "../../../data/dataConfig";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full px-3 py-12 md:px-4 md:py-28">
      <div className="mx-auto w-full max-w-[1500px]">
        {/* FEATURED TESTIMONIAL */}
        <div className="relative min-h-[520px] overflow-hidden rounded-[24px] bg-[#333] md:min-h-[680px] md:rounded-[32px]">
          {/* Background Image */}
          <img
            src="/testimonial.jpg"
            alt="Kora client testimonial"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/20" />
          <div className="absolute inset-0 bg-black/10" />

          {/* Testimonial Glass Card */}
          <div className="absolute left-6 top-1/2 w-[calc(100%-48px)] max-w-[302px] -translate-y-1/2 rounded-[24px] border border-white/40 bg-white/30 p-5 text-white shadow-xl backdrop-blur-xl md:left-[2.5%] md:top-[27%] md:w-[302px] md:translate-y-0 md:p-6">
            <h3 className="text-[18px] font-semibold leading-[1.5] tracking-[-0.035em]">
              "Kora didn't just give us a strategy—they helped us become a more
              strategic company."
            </h3>

            <div className="my-4 h-px bg-white/40" />

            <p className="text-[11px] font-medium leading-[1.6] text-white/85">
              They identified three fundamental issues that we'd been blind to
              for years. Two years later, we're at $52M and just closed our
              Series B.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <img
                src="/team/rachel.png"
                alt="Sarah Bouchard"
                className="h-9 w-9 rounded-full border border-white/40 object-cover"
              />

              <div>
                <p className="text-[11px] font-semibold">Sarah Bouchard</p>
                <p className="mt-0.5 text-[10px] text-white/80">
                  CEO, Lightspeed
                </p>
              </div>
            </div>
          </div>

          {/* Featured Heading */}
          <h2 className="absolute left-6 top-8 text-[clamp(40px,6vw,90px)] font-medium leading-none tracking-[-0.065em] text-white md:left-[2.5%] md:top-[12%]">
            Testimonials
          </h2>

          {/* Rating */}
          <div className="absolute bottom-8 right-7 text-right text-white md:bottom-12 md:right-[4%]">
            <div className="flex items-baseline justify-end">
              <span className="text-[72px] font-medium leading-none tracking-[-0.07em] md:text-[96px]">
                4
              </span>
              <span className="text-[72px] font-medium leading-none tracking-[-0.07em] md:text-[96px]">
                .<span className="text-[#59bf9b]">9</span>
              </span>
              <span className="ml-2 text-lg font-medium">/5</span>
            </div>

            <p className="mt-1 text-[10px] font-medium">
              Based on 300 verified reviews.
            </p>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div
          className="testimonial-cards mt-4 flex min-h-[270px] w-full gap-2 rounded-[28px] bg-[#f3f3e8] p-2"
          onMouseLeave={() => {
            // Keep the last selected card active.
          }}
        >
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={testimonial.id}
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`testimonial-card group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-[22px] px-5 py-5 transition-[flex-grow,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-6 md:py-6 ${
                  isActive
                    ? "flex-[2.3] bg-[#fffef9] text-[#252525]"
                    : "flex-[1] bg-[#fffef9]/65 text-[#666]"
                }`}
              >
                {/* Top Indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <span
                        key={dot}
                        className="h-[7px] w-[7px] rounded-full bg-[#59bf9b]"
                      />
                    ))}
                  </div>

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f3f3e8] text-[#252525] transition-transform duration-300 group-hover:scale-110">
                    {isActive ? "−" : "+"}
                  </span>
                </div>

                {/* Quote */}
                <p
                  className={`mt-5 transition-all duration-500 ${
                    isActive
                      ? "text-[15px] font-medium leading-[1.5] text-[#292929] md:text-[16px]"
                      : "text-[12px] leading-[1.6] text-[#777]"
                  }`}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="mt-auto flex items-center gap-3 pt-7">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-medium text-[#292929]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 truncate text-[10px] text-[#888]">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Signature */}
                  {testimonial.logo && isActive && (
                    <img
                      src={testimonial.logo}
                      alt=""
                      className="hidden h-8 max-w-[85px] object-contain md:block"
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
