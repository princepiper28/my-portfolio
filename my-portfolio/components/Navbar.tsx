"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Add subtle scroll effect for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Define Navbar Links
  const navLinks = [
    { name: "Portfolio", target: "about" },
    { name: "Services", target: "services" },
    { name: "Experience", target: "experience" },
    { name: "Projects", target: "projects" },
  ];

  // ✅ Smooth Scroll to Section
  const scrollToSection = (section: string) => {
    const target = document.getElementById(section.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-dark)]/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo */}
          <div
            className="flex items-center gap-1 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span
              className="text-primary font-poppins font-bold text-[22px]"
              // 👆 Updated color to your theme accent color variable
            >
              Prince
            </span>
            <span className="text-[var(--color-text-off-white)] font-poppins font-bold text-[22px]">
              Udoewah
            </span>
          </div>

          {/* ✅ Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ name, target }) => (
              <button
                key={name}
                onClick={() => scrollToSection(target)}
                className="text-[var(--color-text-off-white)] hover:text-primary transition-colors duration-300"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                {name}
              </button>
            ))}
          </div>

          {/* ✅ Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" onClick={() => scrollToSection("contact")}>
              Contact Me
            </Button>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-[var(--color-text-off-white)] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-dark-lighter)]/95 backdrop-blur-lg border-t border-primary/20 animate-fade-in">
          <div className="px-6 py-5 space-y-3">
            {navLinks.map(({ name, target }) => (
              <button
                key={name}
                onClick={() => scrollToSection(target)}
                className="block w-full text-left text-[var(--color-text-off-white)] hover:text-primary transition-colors duration-300 py-2"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                {name}
              </button>
            ))}

            <Button
              variant="primary"
              onClick={() => scrollToSection("contact")}
              className="w-full mt-4"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
