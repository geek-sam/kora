import { useState } from "react";
import { faqCategories } from "../../../data/dataConfig";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const currentCategory = faqCategories.find(
    (category) => category.id === activeCategory,
  );

  const questions = currentCategory?.questions ?? [];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveQuestion(0);
  };

  const handleQuestionClick = (index: number) => {
    setActiveQuestion((current) => (current === index ? null : index));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("support@kora.com");
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = "mailto:support@kora.com";
    }
  };

  return (
    <section className="faq-section w-full px-3 py-20 md:px-4 md:py-28">
      {/* Heading */}
      <div className="mb-16 text-center md:mb-20">
        <h2 className="text-[clamp(64px,9vw,116px)] font-normal leading-none tracking-[-0.075em] text-[#242424]">
          FAQ
        </h2>
      </div>

      {/* FAQ Container */}
      <div className="mx-auto max-w-[600px]">
        <div className="rounded-[28px] bg-[#f4f4e9] p-2.5 md:rounded-[36px] md:p-2.5">
          {/* Category Navigation */}
          <div
            className="flex items-center justify-center gap-1 overflow-x-auto px-1 py-1.5 sm:gap-2"
            role="tablist"
            aria-label="FAQ categories"
          >
            {faqCategories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`faq-tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls={`faq-panel-${category.id}`}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`shrink-0 rounded-full px-3.5 py-3 text-[12px] font-medium transition-all duration-300 md:px-4 ${
                    isActive
                      ? "bg-[#59bf9b] text-white"
                      : "bg-transparent text-[#252525] hover:bg-white/70"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Questions */}
          <div
            id={`faq-panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={`faq-tab-${activeCategory}`}
            className="flex flex-col gap-2"
          >
            {questions.map((item, index) => {
              const isOpen = activeQuestion === index;

              return (
                <article
                  key={`${activeCategory}-${index}`}
                  className="overflow-hidden rounded-[24px] bg-[#fffefb] transition-colors duration-300"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => handleQuestionClick(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${activeCategory}-${index}`}
                    className="flex min-h-[76px] w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                  >
                    <span className="text-[14px] font-medium tracking-[-0.025em] text-[#292929] md:text-[16px]">
                      {item.question}
                    </span>

                    {/* Plus / Minus */}
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4f4e9]">
                      <span
                        className={`relative block h-3 w-3 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <span className="absolute left-0 top-1/2 h-[1.5px] w-3 -translate-y-1/2 bg-[#252525]" />

                        <span
                          className={`absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-[#252525] transition-transform duration-300 ${
                            isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </span>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${activeCategory}-${index}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-[13px] leading-[1.7] text-[#858585] md:px-6 md:pb-7 md:text-[14px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Contact Card */}
        <div className="mt-2.5 flex flex-col items-center justify-center gap-6 rounded-[28px] bg-[#f4f4e9] px-5 py-7 sm:flex-row sm:justify-between sm:px-8 md:rounded-[36px] md:px-9 md:py-8">
          {/* Team Avatars */}
          <div className="flex -space-x-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[58px] w-[58px] overflow-hidden rounded-full border-[2px] border-[#f4f4e9] bg-gray-300"
              >
                <img
                  src={`/trust/avatar-${item}.png`}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="flex min-w-0 flex-col items-center sm:items-start">
            <p className="mb-2 text-[12px] text-[#666]">
              More questions? Reach out anytime.
            </p>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="group flex items-center gap-2.5 text-[clamp(18px,3vw,25px)] font-medium tracking-[-0.055em] text-[#292929] transition-colors duration-300 hover:text-[#59bf9b]"
              aria-label="Copy support@kora.com"
            >
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#59bf9b] text-white transition-transform duration-300 group-hover:scale-110">
                {copied ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="8" y="8" width="12" height="12" rx="2" />
                    <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                  </svg>
                )}
              </span>

              <span className="truncate">
                {copied ? "Email copied!" : "support@kora.com"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
