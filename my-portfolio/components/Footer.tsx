import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-primary/20 py-10 px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-[1100px] mx-auto">

        <div className="
          flex flex-col md:flex-row 
          items-center md:items-center 
          justify-between gap-6 md:gap-8 
          text-center md:text-left
        ">

          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-1">
            <span className="text-primary font-poppins font-bold text-xl sm:text-2xl">
              Prince
            </span>
            <span className="text-white font-poppins font-bold text-xl sm:text-2xl">
              Udoewah
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 flex-wrap">
            {[
              { icon: Github, link: "https://github.com/princepiper28" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/prince-udoewah-801637111/" },
              { icon: Twitter, link: "https://twitter.com" },
              { icon: Mail, link: "mailto:princepiper28@gmail.com" },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label="Social link"
                className="
                  w-10 h-10 rounded-lg bg-dark-gray 
                  flex items-center justify-center 
                  hover:bg-primary/20 transition-all duration-300 
                  focus:ring-2 focus:ring-primary/40
                "
              >
                <Icon className="text-text-off-white hover:text-primary transition-colors" size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-off-white/60 font-inter text-xs sm:text-sm text-center md:text-right">
            © {new Date().getFullYear()} Prince Udoewah. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
