import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import ContactSection from "../components/sections/CaseStudy/ContactSection";
import FAQSection from "../components/sections/Home/FAQSection";

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".contact-intro, .contact-info", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@kora.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      console.error("Unable to copy email address.");
    }
  };

  return (
    <main>
      <section
        ref={sectionRef}
        id="contact"
        className="w-full bg-[#fbfbf9] px-4 py-24 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-[1136px]">
          {/* Heading */}
          <div className="contact-heading">
            <h2 className="text-[clamp(58px,7vw,92px)] font-normal leading-[0.98] tracking-[-0.075em] text-[#242424]">
              Contact.
            </h2>
          </div>

          {/* Intro */}
          <div className="contact-intro mt-9">
            <p className="max-w-[430px] text-[19px] leading-[1.4] tracking-[-0.04em] text-[#686868] md:text-[22px]">
              Book a 30-minute call or send us a
              <br className="hidden sm:block" />
              message. We respond within 24 hours.
            </p>
          </div>

          {/* Contact Information */}
          <div className="contact-info mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-[62px] md:grid-cols-[2fr_0.85fr_0.85fr]">
            {/* Email */}
            <div className="flex flex-col justify-end">
              <span className="mb-3 text-[11px] text-[#777777]">
                (510) 895-6500
              </span>

              <button
                onClick={copyEmail}
                className="group flex w-fit items-center gap-2 text-left"
                aria-label="Copy hello@kora.com"
              >
                <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full bg-[#58c49e] text-white transition-transform duration-300 group-hover:scale-110">
                  {copied ? <Check size={13} /> : <Copy size={12} />}
                </span>

                <span className="text-[19px] font-medium tracking-[-0.04em] text-[#292929] md:text-[20px]">
                  {copied ? "Copied!" : "hello@kora.com"}
                </span>
              </button>
            </div>

            {/* Address */}
            <div>
              <h3 className="mb-3 text-[11px] font-medium text-[#666666]">
                Address
              </h3>

              <address className="not-italic text-[11px] leading-[1.6] text-[#292929]">
                2847 Mission Street
                <br />
                San Francisco, CA 94110
              </address>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="mb-3 text-[11px] font-medium text-[#666666]">
                Office Hours
              </h3>

              <p className="text-[11px] leading-[1.6] text-[#292929]">
                Monday to Friday:
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <FAQSection />
    </main>
  );
};

export default ContactPage;
