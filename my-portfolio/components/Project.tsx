"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const projects = [
    {
      title: "RoomieRent",
      description:
        "A property listing and roommate matching web app built with React, Tailwind CSS, and TypeScript. Includes authentication, dashboard, and rent-splitting features.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1080&q=80",
    },
    {
      title: "MovieNest",
      description:
        "A movie discovery platform that lets users explore trending titles, save favorites, and create personalized watchlists using public APIs.",
      image:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1080&q=80",
    },
    {
      title: "Clyna Patient Directory",
      description:
        "A responsive healthcare management dashboard for patient records and directory filtering built with React, PNPM, and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1581091870622-7f9b36d33c73?auto=format&fit=crop&w=1080&q=80",
    },
    {
      title: "Shopora",
      description:
        "An elegant e-commerce web app prototype with product listings, category filtering, and an optimized shopping experience.",
      image:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=1080&q=80",
    },
    {
      title: "ALX TypeScript Projects",
      description:
        "A collection of real-world TypeScript projects focusing on clean architecture, modular design, and reusable React components.",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdabede8f3?auto=format&fit=crop&w=1080&q=80",
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern portfolio built with Next.js, Tailwind CSS, and TypeScript to showcase my journey, projects, and design philosophy.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-dark-lighter">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[#f86a0f] text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Projects
          </h2>

          <p className="text-text-off-white/80 max-w-2xl mx-auto text-lg leading-8 font-inter">
            A showcase of my featured frontend projects—built with precision,
            performance, and a passion for user experience.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
