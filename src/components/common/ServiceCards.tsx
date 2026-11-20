import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServiceCard from "./ServiceCard";
import { services } from "../../data/dataConfig";

gsap.registerPlugin(ScrollTrigger);

const ServiceCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-scroll-card");

      cards.forEach((card, index) => {
        const content = card.querySelector(".service-card");

        if (!content) return;

        // Initial position for each incoming card
        gsap.set(content, {
          y: 100,
          opacity: 0,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 35%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Card enters from below
        timeline.to(content, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });

        // Subtle transition for cards already in view
        if (index > 0) {
          const previous = cards[index - 1];

          ScrollTrigger.create({
            trigger: card,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              const previousContent =
                previous.querySelector<HTMLElement>(".service-card");

              if (!previousContent) return;

              gsap.set(previousContent, {
                scale: 1 - self.progress * 0.025,
                opacity: 1 - self.progress * 0.15,
              });
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="service-scroll-list relative mx-auto w-full max-w-[1620px]"
    >
      {services.map((service, index) => (
        <div
          key={service.number}
          className="service-scroll-card relative"
          style={{
            zIndex: index + 1,
          }}
        >
          <div className="service-card-wrapper">
            <ServiceCard service={service} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
