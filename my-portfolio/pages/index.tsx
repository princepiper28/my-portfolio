"use client";

import Head from "next/head";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectsSection } from "@/components/Project";
import { ContactSection } from "@/components/ContactSection";
import  Services  from "@/components/Services";
import { Experience } from "@/components/Experience";

export default function Home() {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <>
      <Head>
        <title>Prince Joseph Udoewah | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Prince Joseph Udoewah, a frontend developer specializing in React, Next.js, and Tailwind CSS."
        />
      </Head>

      {/* 🔥 Hero Section */}
      <section className="w-full pt-24 px-4 sm:px-6 md:px-10 lg:px-20">
        <Hero />
      </section>

      {/* 👤 About Section */}
      <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <About
          onToggleExperience={() => setShowExperience(!showExperience)}
          isExperienceVisible={showExperience}
        />
      </section>

      {/* 💼 Experience Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
        <div
          className={`transition-all duration-700 ease-in-out ${
            showExperience
              ? "max-h-[3000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-6"
          }`}
        >
          {showExperience && <Experience />}
        </div>
      </section>

      {/* 🛠 Services */}
      <section className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <Services />
      </section>

      {/* 🚀 Projects */}
      <section className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <ProjectsSection />
      </section>

      {/* 📩 Contact */}
      <section className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <ContactSection />
      </section>
    </>
  );
}

