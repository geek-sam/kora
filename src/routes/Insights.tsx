import React, { useState } from "react";

interface Article {
  id: number;
  category: string;
  date: string;
  title: string;
  author?: string;
  authorRole?: string;
  image: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    category: "Implementation",
    date: "March 2, 2026",
    title: "5 growth levers most companies ignore until it is too late.",
    image:
      "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=1000",
  },
  {
    id: 2,
    category: "Technology Selection",
    date: "March 2, 2026",
    title: "Hiring a growth team vs hiring a growth partner.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000",
  },
  {
    id: 3,
    category: "ROI & Strategy",
    date: "February 20, 2026",
    title: "What a growth audit actually reveals about your business.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000",
  },
  {
    id: 4,
    category: "Risk Management",
    date: "February 5, 2026",
    title: "Scaling too fast: the risks nobody talks about.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1000",
  },
  {
    id: 5,
    category: "Risk Management",
    date: "January 24, 2026",
    title: "Why most growth strategies fail within 6 months.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1000",
  },
  {
    id: 6,
    category: "ROI & Strategy",
    date: "January 15, 2026",
    title: "How to measure the real ROI of a growth engagement.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000",
  },
  {
    id: 7,
    category: "Implementation",
    date: "November 5, 2025",
    title: "Building a sales process that actually scales.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000",
  },
  {
    id: 8,
    category: "Technology Selection",
    date: "January 20, 2026",
    title: "When to invest in RevOps tooling and when to wait.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
  },
];

const featuredArticle: Article = {
  id: 0,
  category: "Technology Selection",
  date: "March 4, 2026",
  title: "Your CRM is not the problem. Your process is.",
  author: "Alex Tanaka",
  authorRole: "Growth Operations Lead",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
  featured: true,
};

const categories = [
  "All",
  "ROI & Strategy",
  "Implementation",
  "Technology Selection",
  "Risk Management",
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <article className="group relative isolate aspect-[1.36/1] cursor-pointer overflow-hidden rounded-[16px] bg-[#222] text-white">
      {/* Background Image */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:blur-[3px]"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10 transition-all duration-500 group-hover:bg-black/35" />

      {/* Category */}
      <div className="absolute left-3 top-3 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-2.5 py-1 text-[9px] font-medium backdrop-blur-md">
          <span className="h-2 w-2 rounded-full border border-white" />
          {article.category}
        </span>
      </div>

      {/* Article Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
        <p className="mb-1.5 text-[9px] text-white/75">{article.date}</p>

        <h3 className="max-w-[360px] text-[18px] font-medium leading-[1.15] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-y-[-3px] sm:text-[21px]">
          {article.title}
        </h3>

        <div className="mt-3 flex max-h-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-8 group-hover:opacity-100">
          <span className="text-[10px] font-medium">Read article</span>
          <span className="text-sm">↗</span>
        </div>
      </div>
    </article>
  );
};

const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FAFAF8] px-4 py-20 text-[#252525] sm:px-8 sm:py-30">
      <div className="mx-auto max-w-[1240px]">
        {/* Page Heading */}
        <header className="mb-16">
          <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.075em] font-medium text-[#242424]">
            Insights.
          </h1>

          <p className="mt-10 max-w-[400px] text-lg leading-[1.35] tracking-[-0.04em] text-[#686868] sm:text-2xl">
            Lessons, frameworks, and honest
            <br />
            takes on what it actually takes to grow.
          </p>
        </header>

        {/* Featured Hero Article */}
        <article className="group relative isolate mb-2 aspect-[1.72/1] cursor-pointer overflow-hidden rounded-[16px] border-[3px] border-[#EEEDE4] bg-[#222] text-white">
          <img
            src={featuredArticle.image}
            alt={featuredArticle.title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:blur-[4px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/20 transition-all duration-700 group-hover:bg-black/40" />

          {/* Category */}
          <div className="absolute left-3 top-3 z-10">
            <span className="flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[9px] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full border border-white" />
              {featuredArticle.category}
            </span>
          </div>

          {/* Featured Content */}
          <div className="absolute bottom-0 left-0 z-10 p-4 sm:p-6">
            <p className="mb-2 text-[9px] text-white/80">
              {featuredArticle.date}
            </p>

            <h2 className="max-w-[570px] text-[28px] font-medium leading-[1.05] tracking-[-0.055em] transition-transform duration-700 group-hover:translate-y-[-4px] sm:text-[32px]">
              {featuredArticle.title}
            </h2>

            <div className="mt-4 flex items-center gap-2.5">
              <div className="h-7 w-7 overflow-hidden rounded-full bg-white/30">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-[9px] font-medium">
                  {featuredArticle.author}
                </p>
                <p className="text-[8px] text-white/75">
                  {featuredArticle.authorRole}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Category Filter */}
        <div className="mb-2 flex items-center gap-2 overflow-x-auto py-1 scrollbar-hide">
          <div className="flex shrink-0 items-center gap-1.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[9px] font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#57C7A1] text-white"
                    : "bg-transparent text-[#353535] hover:bg-[#EBEBE5]"
                }`}
              >
                {activeCategory === category && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
                {category}
              </button>
            ))}
          </div>

          <div className="ml-auto hidden shrink-0 items-center rounded-full bg-white px-3 py-2 sm:flex">
            <span className="mr-2 text-[10px]">⌕</span>
            <input
              placeholder="Search..."
              className="w-[55px] bg-transparent text-[9px] outline-none placeholder:text-[#777]"
            />
          </div>
        </div>

        {/* Article Grid */}
        <section
          className="grid grid-cols-1 gap-1 sm:grid-cols-2"
          aria-label="Latest insights"
        >
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Insights;
