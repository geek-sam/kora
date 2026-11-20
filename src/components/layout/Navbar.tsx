import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Case studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="mx-auto fixed inset-x-0 top-0 z-[100] flex w-full max-w-[1920px] items-start justify-between bg-transparent px-20 pt-6 md:pt-7 lg:px-4 pointer-events-none">
      {/* Desktop Navigation */}
      <nav className="ml-3 hidden h-[61px] items-center gap-9 rounded-full bg-white px-5 text-[#171717] shadow-sm pointer-events-auto md:flex">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#58c49e] text-[17px] text-white">
            ✿
          </span>
          <span className="text-[19px] font-semibold tracking-tight">
            kora<span className="text-[10px] align-top">™</span>
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-10 pl-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[15px] transition-opacity hover:opacity-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Logo */}
      <a
        href="/"
        className="pointer-events-auto flex h-12 items-center gap-2 rounded-full bg-white px-4 text-lg font-semibold text-black shadow-sm md:hidden"
      >
        <span className="text-[#58c49e]">✿</span>
        kora™
      </a>

      {/* Right Actions */}
      <div className="pointer-events-auto flex items-center gap-2 mr-3">
        <a
          href="/contact"
          className="hidden h-[61px] items-center gap-3 rounded-full bg-[#171717] py-2 pl-5 pr-2 text-[15px] text-white transition-transform hover:scale-105 sm:flex"
        >
          Book a call
          <img
            src="/team/koraline.png"
            alt="Book a call"
            className="h-12 w-12 rounded-full border-2 border-white object-cover"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171717] text-xl text-white md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-3 right-3 top-[68px] rounded-[24px] bg-white p-5 text-black shadow-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-base last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 flex items-center justify-center rounded-full bg-[#171717] py-4 text-white"
        >
          Book a call →
        </a>
      </div>
    </header>
  );
};

export default Navbar;
