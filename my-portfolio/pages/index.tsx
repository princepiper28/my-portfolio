"use client";

import Head from "next/head";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectsSection } from "@/components/Project";
import { ContactSection } from "@/components/ContactSection";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";

export default function Home() {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Prince Joseph Udoewah | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Prince Joseph Udoewah, a frontend developer specializing in React, Next.js, and Tailwind CSS."
        />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* About Section with toggle prop */}
      <About
        onToggleExperience={() => setShowExperience(!showExperience)}
        isExperienceVisible={showExperience}
      />

      {/* Experience Section — fades in/out dynamically */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          showExperience
            ? "max-h-[2000px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-6"
        }`}
      >
        {showExperience && <Experience />}
      </div>

      {/* Services */}
      <Services />

      {/* Projects */}
      <Container>
        <ProjectsSection />
      </Container>

      {/* Contact */}
      <Container>
        <ContactSection />
      </Container>
    </Layout>
  );
}

