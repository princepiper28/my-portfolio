import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-primary/20 py-10 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-primary font-poppins font-bold text-xl md:text-2xl">
              Prince
            </span>
            <span className="text-white font-poppins font-bold text-xl md:text-2xl">
              Joseph
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg bg-dark-gray flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group focus:ring-2 focus:ring-primary/40"
            >
              <Github className="text-text-off-white group-hover:text-primary transition-colors" size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg bg-dark-gray flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group focus:ring-2 focus:ring-primary/40"
            >
              <Linkedin className="text-text-off-white group-hover:text-primary transition-colors" size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-lg bg-dark-gray flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group focus:ring-2 focus:ring-primary/40"
            >
              <Twitter className="text-text-off-white group-hover:text-primary transition-colors" size={20} />
            </a>

            <a
              href="mailto:prince.joseph@example.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-lg bg-dark-gray flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group focus:ring-2 focus:ring-primary/40"
            >
              <Mail className="text-text-off-white group-hover:text-primary transition-colors" size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-text-off-white/60 font-inter text-sm">
            © {new Date().getFullYear()} Prince Joseph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
