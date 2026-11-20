import React from "react";
import type { Service } from "../../data/dataConfig";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="service-card sticky grid h-full grid-cols-1 gap-2.5 rounded-[28px] bg-[#f4f4e9] p-2.5 md:grid-cols-2 md:rounded-[44px] md:p-3 ">
      {/* LEFT CONTENT */}
      <div className="flex min-h-0 flex-col overflow-hidden rounded-[22px] bg-[#fffef9] px-5 py-6 md:rounded-[34px] md:px-[7%] md:py-[7%]">
        {/* Category and Number */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f5f5eb] px-3 py-2 text-xs font-medium text-[#333] md:text-sm">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <path d="M9 9h6v6H9z" />
              <path d="M2 8V5a3 3 0 0 1 3-3M22 16v3a3 3 0 0 1-3 3" />
            </svg>
            {service.category}
          </span>

          <span className="text-lg font-medium tracking-tight">
            {service.number}
          </span>
        </div>

        {/* Heading and Description */}
        <div className="mt-6 md:mt-7">
          <h3 className="max-w-[550px] text-[clamp(25px,2.1vw,37px)] font-medium leading-[1.12] tracking-[-0.055em] text-[#292929]">
            {service.title}
          </h3>

          <p className="mt-5 max-w-[490px] text-[14px] leading-[1.65] tracking-[-0.025em] text-[#696969] md:text-[16px]">
            {service.description}
          </p>
        </div>

        {/* Offerings */}
        <div className="mt-auto pt-8">
          <h4 className="mb-5 text-[15px] font-medium tracking-tight text-[#333] md:text-lg">
            What we offer
          </h4>

          <div className="flex flex-wrap gap-2">
            {service.offerings.map((offering) => (
              <span
                key={offering}
                className="rounded-full bg-[#f4f4e9] px-3 py-2 text-[11px] font-medium tracking-tight text-[#333] md:px-3.5 md:text-[13px]"
              >
                {offering}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="mt-7 flex min-h-[56px] shrink-0 items-center justify-center rounded-full bg-[#59bf9b] px-5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#43ad88] md:min-h-[62px] md:text-base"
        >
          Get Started
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="group relative min-h-[280px] overflow-hidden rounded-[22px] bg-[#d8ddd5] md:min-h-0 md:rounded-[34px]">
        <img
          src={service.image}
          alt={service.category}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />

        {/* Testimonial */}
        <div className="absolute bottom-3 right-3 w-[min(330px,85%)] rounded-[22px] border border-white/40 bg-white/45 p-4 text-white shadow-lg backdrop-blur-xl md:bottom-[10px] md:right-[10px] md:p-5">
          <div className="mb-3 flex gap-1.5">
            {[1, 2, 3, 4, 5].map((dot) => (
              <span key={dot} className="h-2 w-2 rounded-full bg-[#59bf9b]" />
            ))}
          </div>

          <p className="text-[13px] font-medium leading-[1.5] tracking-tight md:text-[15px]">
            "{service.testimonial}"
          </p>

          {/* Author */}
          <div className="mt-5 flex items-center gap-3">
            <img
              src={service.avatar}
              alt={service.author}
              loading="lazy"
              className="h-9 w-9 rounded-full border border-white/50 object-cover"
            />

            <div>
              <p className="text-xs font-semibold">{service.author}</p>

              <p className="mt-0.5 text-[11px] text-white/85">{service.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
