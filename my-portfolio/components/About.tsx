import React from "react";
import { Button } from "./Button";
import { Code2, Palette, Zap } from "lucide-react";
import Image from "next/image";

interface AboutProps {
  onToggleExperience?: () => void;
  isExperienceVisible?: boolean;
}

export function About({ onToggleExperience, isExperienceVisible }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-dark-lighter">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* 🖼️ Left Column - Image */}
        <div className="relative flex-shrink-0 md:ml-16 -mt-8">
          <div className="w-64 h-64 relative mx-auto md:mx-0 border-4 border-[#f86a0f] rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/profile.jpeg"
              alt="Prince Joseph Udoewah"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Decorative Circles */}
          <div className="absolute -z-10 -top-6 -right-8 w-24 h-24 bg-[#f86a0f]/20 rounded-full blur-2xl" />
          <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-[#f86a0f]/10 rounded-full blur-3xl" />
        </div>

        {/* 🧠 Right Column - Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2
            className="text-[#f86a0f] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            About Me
          </h2>

          <p className="text-text-off-white/80 text-lg leading-8 font-inter">
            I’m a passionate frontend developer with a keen eye for design and a
            commitment to creating exceptional user experiences. With expertise
            in modern web technologies, I transform ideas into elegant,
            performant applications.
          </p>

          <p className="text-text-off-white/80 text-lg leading-8 font-inter">
            My approach combines technical excellence with creative
            problem-solving, ensuring every project not only meets but exceeds
            expectations.
          </p>

          {/* Skill Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {[
              { icon: Code2, label: "Clean Code" },
              { icon: Palette, label: "UI/UX Focus" },
              { icon: Zap, label: "Performance" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center sm:justify-start gap-3"
              >
                <div className="w-12 h-12 rounded-lg bg-[#f86a0f]/20 flex items-center justify-center">
                  <Icon className="text-[#f86a0f]" size={24} />
                </div>
                <p className="text-white font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>

          {/* 🚀 Toggle Button */}
          <div className="pt-6">
            <Button
              variant="primary"
              className="text-base font-semibold"
              onClick={onToggleExperience}
            >
              {isExperienceVisible ? "Hide Experience" : "View Experience"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

