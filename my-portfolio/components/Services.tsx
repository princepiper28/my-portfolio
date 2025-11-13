"use client";

import React from "react";
import { Code2, Smartphone, Palette, Boxes, LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Services() {
  const services: Service[] = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building responsive, high-performance web applications using React, TypeScript, and modern frameworks.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Delivering seamless, responsive experiences across all screen sizes using mobile-first design principles.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces with a focus on accessibility, beauty, and usability.",
    },
    {
      icon: Boxes,
      title: "Design Systems",
      description:
        "Creating scalable design systems and component libraries for consistent user experiences.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-dark-lighter">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[#f86a0f] text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Services
          </h2>

          <p className="text-text-off-white/80 max-w-2xl mx-auto text-lg leading-8 font-inter">
            I provide end-to-end frontend solutions that transform your ideas
            into engaging, high-quality digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="bg-dark border border-[#f86a0f]/20 rounded-2xl p-8 text-center sm:text-left hover:border-[#f86a0f]/50 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-[#f86a0f]/5"
            >
              <div className="w-16 h-16 mx-auto sm:mx-0 rounded-xl bg-[#f86a0f]/20 flex items-center justify-center mb-6">
                <Icon className="text-[#f86a0f]" size={32} strokeWidth={1.5} />
              </div>

              <h3
                className="text-white text-xl font-semibold mb-3"
                style={{ fontFamily: "Poppins" }}
              >
                {title}
              </h3>

              <p className="text-text-off-white/70 text-base leading-relaxed font-inter">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
