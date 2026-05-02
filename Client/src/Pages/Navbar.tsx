import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Eye, ShoppingBag } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Contact", href: "#" },
  { name: "About", href: "#" },
  { name: "Help", href: "#" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-[background-color,backdrop-filter,box-shadow,padding] duration-500 ease-in-out",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm shadow-black/5 py-2"
          : "bg-transparent py-4",
      ].join(" ")}
    >
      <div className="w-full md:max-w-[80%] md:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* ── Logo ── */}
          <a
            href="#"
            aria-label="Brite Vision Optical – home"
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/30 group-hover:scale-105 group-hover:shadow-green-600/40 transition-all duration-200">
              <Eye className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span
              className={[
                "text-xl font-bold tracking-tight transition-colors duration-500",
                scrolled ? "text-gray-900" : "text-white drop-shadow-md",
              ].join(" ")}
            >
              Brite Vision
              <span className={scrolled ? "text-green-600" : "text-green-400"}>
                {" "}
                Optical
              </span>
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={[
                    "relative px-3 py-2 text-sm font-medium rounded-lg",
                    "transition-colors duration-200",
                    "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full",
                    "after:bg-green-500 after:scale-x-0 after:transition-transform after:duration-200 after:origin-left",
                    "hover:after:scale-x-100",
                    scrolled
                      ? "text-gray-600 hover:text-green-700 hover:bg-green-50"
                      : "text-white/85 hover:text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop Actions ── */}
          <div className="hidden md:flex items-center gap-2">
            <button
              aria-label="View cart"
              className={[
                "p-2.5 rounded-xl transition-colors duration-200",
                scrolled
                  ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white/80 hover:text-white hover:bg-white/15",
              ].join(" ")}
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              className={[
                "px-5 py-2.5 text-sm font-semibold rounded-xl",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
                scrolled
                  ? "bg-green-600 text-white hover:bg-green-700 shadow-md shadow-green-600/20 hover:shadow-green-600/30 hover:-translate-y-0.5 active:translate-y-0"
                  : "bg-white text-green-700 hover:bg-green-50 shadow-lg shadow-black/10 hover:-translate-y-0.5 active:translate-y-0",
              ].join(" ")}
            >
              Get Started
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={[
              "md:hidden p-2 rounded-xl transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500",
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/15",
            ].join(" ")}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          scrolled
            ? "bg-white border-t border-gray-100"
            : "bg-gray-900/95 backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={[
                "flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-colors duration-150",
                scrolled
                  ? "text-gray-700 hover:text-green-700 hover:bg-green-50"
                  : "text-white/80 hover:text-white hover:bg-white/10",
              ].join(" ")}
            >
              {link.name}
            </a>
          ))}

          <div
            className={[
              "pt-3 mt-3 border-t space-y-2",
              scrolled ? "border-gray-100" : "border-white/10",
            ].join(" ")}
          >
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-sm font-semibold shadow-md shadow-green-600/20 transition-colors duration-200 active:scale-[0.98]"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
