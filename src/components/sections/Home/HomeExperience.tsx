import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection from "./HeroSection";
import ComparisonSection from "./ComparisonSection";

gsap.registerPlugin(ScrollTrigger);

const HomeExperience = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const ctx = gsap.context(() => {
      const hero = scene.querySelector<HTMLElement>("[data-hero]");
      const visual = scene.querySelector<HTMLElement>("[data-hero-visual]");
      const heroContent = scene.querySelector<HTMLElement>(
        "[data-hero-content]",
      );
      const heroStatement = scene.querySelector<HTMLElement>(
        "[data-hero-statement]",
      );

      const heroWords = scene.querySelectorAll<HTMLElement>("[data-hero-word]");

      const comparison = scene.querySelector<HTMLElement>("[data-comparison]");
      const comparisonHeading = scene.querySelector<HTMLElement>(
        "[data-comparison-heading]",
      );
      const headingTop = scene.querySelector<HTMLElement>("[data-heading-top]");
      const headingBottom = scene.querySelector<HTMLElement>(
        "[data-heading-bottom]",
      );

      const beforeCard = scene.querySelector<HTMLElement>("[data-before-card]");
      const afterCard = scene.querySelector<HTMLElement>("[data-after-card]");

      if (
        !hero ||
        !visual ||
        !heroContent ||
        !heroStatement ||
        !comparison ||
        !comparisonHeading ||
        !headingTop ||
        !headingBottom ||
        !beforeCard ||
        !afterCard
      )
        return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 769px)",
          mobile: "(max-width: 768px)",
        },
        (context) => {
          const isMobile = context.conditions?.mobile ?? false;

          // --------------------------------
          // INITIAL STATES
          // --------------------------------

          gsap.set(heroContent, {
            y: 0,
            opacity: 1,
            scale: 1,
          });

          gsap.set(visual, {
            scale: 1,
            filter: "blur(0px)",
          });

          gsap.set(heroStatement, {
            opacity: 0,
          });

          gsap.set(heroWords, {
            y: isMobile ? 35 : 65,
            opacity: 0,
            filter: "blur(8px)",
          });

          // Comparison panel starts below the viewport
          gsap.set(comparison, {
            yPercent: 100,
          });

          // Heading starts below the comparison panel
          gsap.set(comparisonHeading, {
            y: "75vh",
            opacity: 0,
          });

          gsap.set([headingTop, headingBottom], {
            x: 0,
          });

          // Both cards initially occupy the same center position
          gsap.set(beforeCard, {
            x: 0,
            y: 60,
            scale: 0.8,
            opacity: 0,
            zIndex: 2,
          });

          gsap.set(afterCard, {
            x: 0,
            y: 30,
            scale: 0.72,
            opacity: 0,
            zIndex: 1,
          });

          // --------------------------------
          // MASTER TIMELINE
          // --------------------------------

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: scene,
              start: "top top",
              end: () => (isMobile ? "+=4400" : "+=5000"),
              scrub: 1,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // ==================================
          // PHASE 1: HERO ANIMATION
          // ==================================

          // Move initial hero content upwards
          timeline.to(
            heroContent,
            {
              y: isMobile ? -120 : -220,
              opacity: 0,
              scale: 0.96,
              duration: 0.8,
              ease: "none",
            },
            0,
          );

          // Zoom and blur the hero background
          timeline.to(
            visual,
            {
              scale: isMobile ? 1.18 : 1.28,
              filter: isMobile ? "blur(8px)" : "blur(14px)",
              duration: 1.8,
              ease: "none",
            },
            0.2,
          );

          // Reveal hero statement container
          timeline.to(
            heroStatement,
            {
              opacity: 1,
              duration: 0.15,
              ease: "none",
            },
            1,
          );

          // Reveal hero statement word by word
          timeline.to(
            heroWords,
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.075,
              duration: 0.5,
              ease: "power2.out",
            },
            1.05,
          );

          // ==================================
          // PHASE 2: COMPARISON OVERLAP
          // ==================================

          // White comparison panel slides over hero
          timeline.to(
            comparison,
            {
              yPercent: 0,
              duration: 1.1,
              ease: "power2.inOut",
            },
            2.2,
          );

          // ==================================
          // PHASE 3: HEADING ENTRANCE
          // ==================================

          timeline.to(
            comparisonHeading,
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            2.9,
          );

          // ==================================
          // PHASE 4: HEADING SPLIT
          // ==================================

          timeline.to(
            headingTop,
            {
              x: () => (isMobile ? "-40vw" : "-120vw"),
              duration: 0.75,
              ease: "power3.inOut",
            },
            3.4,
          );

          timeline.to(
            headingBottom,
            {
              x: () => (isMobile ? "40vw" : "120vw"),
              duration: 0.75,
              ease: "power3.inOut",
            },
            3.4,
          );

          // ==================================
          // PHASE 5: BEFORE CARD ENTRANCE
          // ==================================

          timeline.to(
            beforeCard,
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            3.6,
          );

          // ==================================
          // PHASE 6: AFTER CARD EMERGES
          // ==================================

          timeline.to(
            afterCard,
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
            },
            4,
          );

          // ==================================
          // PHASE 7: SIDE-BY-SIDE POSITION
          // ==================================

          // Calculate card spacing from actual card width
          const getCardOffset = () => {
            const cardWidth = beforeCard.offsetWidth;
            return cardWidth / 2 + (isMobile ? 6 : 18);
          };

          // Before moves left
          timeline.to(
            beforeCard,
            {
              x: () => -getCardOffset(),
              duration: 1,
              ease: "power3.inOut",
            },
            4.4,
          );

          // After moves right
          timeline.to(
            afterCard,
            {
              x: () => getCardOffset(),
              duration: 1,
              ease: "power3.inOut",
            },
            4.4,
          );

          // Heading fades out after cards have settled
          timeline.to(
            comparisonHeading,
            {
              y: -80,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            },
            4.5,
          );

          // The final part of the timeline holds the cards
          // in their final positions before releasing the pin.
          timeline.to(
            {},
            {
              duration: 0.65,
            },
            5.2,
          );

          return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          };
        },
      );
    }, scene);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Shared pinned animation scene */}
      <div
        ref={sceneRef}
        className="home-experience relative h-[100svh] w-full overflow-hidden bg-white"
      >
        {/* Hero stays behind comparison */}
        <HeroSection />

        {/* Comparison overlaps hero */}
        <ComparisonSection />
      </div>
    </>
  );
};

export default HomeExperience;
