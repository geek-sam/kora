import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 769px)",
          mobile: "(max-width: 768px)",
        },
        (context) => {
          const isMobile = context.conditions?.mobile;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "+=1000",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // 1. Green circular background reveal
          tl.fromTo(
            revealRef.current,
            {
              clipPath: "circle(0% at 50% 100%)",
            },
            {
              clipPath: isMobile
                ? "circle(180% at 50% 100%)"
                : "circle(155% at 50% 100%)",
              duration: 1,
              ease: "none",
            },
            0,
          );

          // 2. Cream panel entrance
          tl.fromTo(
            panelRef.current,
            {
              y: 35,
              opacity: 0,
              scale: 0.97,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "none",
            },
            0.2,
          );

          // 3. Content entrance
          tl.fromTo(
            contentRef.current,
            {
              y: 25,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: "none",
            },
            0.4,
          );

          // 4. Oversized wordmark entrance
          tl.fromTo(
            wordmarkRef.current,
            {
              yPercent: 18,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.6,
              ease: "none",
            },
            0.65,
          );

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Connect your newsletter provider here.
    setSubscribed(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@kora.com");
    } catch {
      window.location.href = "mailto:hello@kora.com";
    }
  };

  const socialLinks = [
    { label: "𝕏", href: "https://x.com" },
    { label: "in", href: "https://linkedin.com" },
    { label: "◎", href: "https://instagram.com" },
    { label: "f", href: "https://facebook.com" },
  ];

  const navigation = [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      ref={sectionRef}
      className="relative min-h-screen w-full z-999"
      style={{ zIndex: 999 }}
    >
      {/* GREEN FULL-SCREEN BACKGROUND REVEAL */}
      <div
        ref={revealRef}
        className="absolute inset-0 z-0 bg-[#59bf9b]"
        style={{
          clipPath: "circle(0% at 50% 100%)",
        }}
      />

      {/* OUTER GREEN CANVAS */}
      <div className="relative z-99 flex min-h-screen w-full justify-center px-3 py-3 md:px-6 md:py-9">
        {/* CREAM FOOTER PANEL */}
        <div
          ref={panelRef}
          className="footer-panel relative h-full w-full overflow-hidden rounded-[24px] bg-[#f4f4e9] opacity-0 md:w-[66.5vw] md:max-w-[1170px] md:rounded-[28px]"
        >
          {/* MAIN CONTENT */}
          <div
            ref={contentRef}
            className="relative z-10 mx-auto grid w-[80%] grid-cols-1 gap-12 pb-[300px] pt-12 text-[#252525] md:w-[72%] md:grid-cols-2 md:gap-[12%] md:pb-[260px] md:pt-[7%]"
          >
            {/* LEFT COLUMN */}
            <div className="flex flex-col">
              {/* Logo */}
              <a href="/" className="flex w-fit items-center gap-1">
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#59bf9b] text-[12px] text-white">
                  ✿
                </span>

                <span className="text-[16px] font-semibold tracking-tight">
                  kora<span className="align-top text-[8px]">™</span>
                </span>
              </a>

              {/* Address */}
              <p className="mt-4 text-[9px] leading-[1.6] text-[#777]">
                2847 Mission Street
                <br />
                San Francisco, CA 94110
              </p>

              {/* Newsletter */}
              <div className="mt-8">
                <h2 className="text-[clamp(27px,2.3vw,36px)] font-medium leading-[1.08] tracking-[-0.065em]">
                  Subscribe to
                  <br />
                  our newsletter.
                </h2>

                <form
                  onSubmit={handleSubscribe}
                  className="mt-5 flex h-[38px] max-w-[300px] items-center rounded-full bg-white p-1"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSubscribed(false);
                    }}
                    placeholder="Email"
                    aria-label="Email address"
                    className="min-w-0 flex-1 bg-transparent px-2.5 text-[11px] outline-none"
                  />

                  <button
                    type="submit"
                    className="group flex h-full shrink-0 items-center gap-3 rounded-full bg-[#59bf9b] px-3 text-[10px] font-medium text-white transition-colors duration-300 hover:bg-[#242424]"
                  >
                    {subscribed ? "Subscribed" : "Subscribe"}

                    <span className="h-2 w-2 rounded-full bg-white" />
                  </button>
                </form>

                <p className="mt-3 flex items-center gap-2 text-[9px] text-[#666]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span>
                    By subscribing, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="underline underline-offset-2"
                    >
                      privacy policy.
                    </a>
                  </span>
                </p>
              </div>

              {/* Socials */}
              <div className="mt-12">
                <p className="mb-4 text-[9px] text-[#777]">Socials</p>

                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[#59bf9b] hover:text-white"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div className="mt-8">
                <p className="mb-4 text-[9px] text-[#777]">Legal</p>

                <div className="flex flex-wrap gap-4 text-[10px] font-medium">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>

                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col">
              {/* Main Message */}
              <h3 className="max-w-[380px] text-[clamp(20px,1.8vw,25px)] font-medium leading-[1.3] tracking-[-0.045em] text-[#686868]">
                Stalled revenue, leaky funnels, stretched leadership.{" "}
                <span className="text-[#252525]">
                  Whatever's holding you back, let's solve it.
                </span>
              </h3>

              {/* Founder */}
              <div className="mt-5 flex items-center gap-2.5">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#59bf9b]">
                  <img
                    src="/team/koraline.png"
                    alt="Koraline Spencer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-medium">Koraline Spencer</p>
                  <p className="mt-1 text-[9px] text-[#777]">Founder & CEO</p>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-8">
                <a href="tel:+15108956500" className="text-[11px] text-[#777]">
                  (510) 895-6500
                </a>

                <button
                  onClick={copyEmail}
                  type="button"
                  className="mt-2 flex items-center gap-2 text-[19px] font-medium tracking-[-0.045em] transition-colors hover:text-[#59bf9b]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#59bf9b] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                    </svg>
                  </span>
                  hello@kora.com
                </button>
              </div>

              {/* Navigation */}
              <div className="mt-14">
                <p className="mb-4 text-[9px] text-[#777]">Navigation</p>

                <nav className="flex flex-col items-start gap-2">
                  {navigation.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group flex items-center gap-2 text-[20px] font-medium tracking-[-0.05em] transition-all duration-300 hover:translate-x-1 hover:text-[#59bf9b] md:text-[22px]"
                    >
                      <span className="text-[12px]">•</span>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* OVERSIZED WORDMARK */}
          <div
            ref={wordmarkRef}
            className="pointer-events-none absolute bottom-[-0.10em] left-[9%] z-10 select-none opacity-0"
          >
            <span className="block text-[clamp(150px,25vw,320px)] font-semibold leading-[0.76] tracking-[-0.105em] text-[#59bf9b]">
              kora
            </span>
          </div>

          {/* COPYRIGHT */}
          <div className="absolute bottom-4 right-[9%] z-20 text-[8px] font-medium text-[#777]">
            © 2026 Kora All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
