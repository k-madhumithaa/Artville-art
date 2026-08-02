import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { business } from "@/data/business";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");

      if (!hero) return;

      // Change navbar after hero is almost finished
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();

  const target = document.querySelector(href);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Close after the scroll has started
  setTimeout(() => {
    setMobileOpen(false);
  }, 150);
};

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-xl shadow-lg border-b border-[#E8E0D0]/60"
          : "bg-[#24080D]/45 backdrop-blur-md"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2"
          >
            <span
              className={cn(
                "font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300",
                scrolled ? "text-burgundy" : "text-[#F6E5C5]"
              )}
            >
              {business.name}
            </span>

            <span
              className={cn(
                "hidden sm:inline text-xs border-l pl-2 leading-tight transition-colors duration-300",
                scrolled
                  ? "text-charcoal-light border-[#E8E0D0]"
                  : "text-white/70 border-white/20"
              )}
            >
              {business.tagline}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative group px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  scrolled
                    ? "text-charcoal hover:text-burgundy hover:bg-beige/60"
                    : "text-white/80 hover:text-[#D4AF37] hover:bg-white/5"
                )}
              >
                {link.label}

                <span
                  className={cn(
                    "absolute left-3 right-3 -bottom-1 h-[2px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100",
                    scrolled ? "bg-burgundy" : "bg-[#D4AF37]"
                  )}
                />
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={cn(
                "ml-3 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg",
                scrolled
                  ? "bg-burgundy hover:bg-burgundy-light"
                  : "bg-[#7A1E2C] hover:bg-[#A12D3F]"
              )}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-charcoal hover:bg-beige/60"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className={cn(
              "lg:hidden overflow-hidden backdrop-blur-xl border-t",
              scrolled
                ? "bg-[#FDFBF7]/95 border-[#E8E0D0]/60"
                : "bg-[#24080D]/95 border-white/10"
            )}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                    scrolled
                      ? "text-charcoal hover:text-burgundy hover:bg-beige/60"
                      : "text-white/80 hover:text-[#D4AF37] hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}