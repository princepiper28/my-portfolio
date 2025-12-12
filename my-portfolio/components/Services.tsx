"use client";

import React from "react";
import { Code2, Smartphone, Palette, Boxes } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
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

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-dark-lighter py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#f86a0f] text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Services
          </h2>

          <p className="text-text-off-white/80 max-w-2xl mx-auto text-lg leading-8 font-inter">
            I provide end-to-end frontend solutions that transform your ideas
            into engaging, high-quality digital experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
