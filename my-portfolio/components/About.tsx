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
    <section
      id="about"
      className="bg-dark-lighter py-12 md:py-16"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-6 md:px-8">

        {/* 🖼 Image Section */}
        <div className="relative flex justify-center w-full lg:w-1/3">
          <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 relative border-4 border-[#f86a0f] rounded-full overflow-hidden shadow-xl">
            <Image
              src="/images/profile.jpeg"
              alt="Prince Joseph Udoewah"
              fill
              className="object-cover"
            />
          </div>

          {/* Glow Decorations */}
          <div className="absolute -z-10 -top-4 right-6 w-20 h-20 bg-[#f86a0f]/20 rounded-full blur-2xl" />
          <div className="absolute -z-10 -bottom-4 left-6 w-28 h-28 bg-[#f86a0f]/10 rounded-full blur-3xl" />
        </div>

        {/* 🧠 Content Section */}
        <div className="flex-1 text-center lg:text-left space-y-5">

          <h2 className="text-[#f86a0f] text-3xl md:text-4xl font-bold font-poppins">
            About Me
          </h2>

          <p className="text-text-off-white/80 text-base md:text-lg leading-7 max-w-xl mx-auto lg:mx-0">
            I’m a passionate frontend developer with a strong focus on creating
            clean, user-friendly and visually appealing web experiences.
          </p>

          <p className="text-text-off-white/80 text-base md:text-lg leading-7 max-w-xl mx-auto lg:mx-0">
            I combine modern development practices with design thinking,
            ensuring every project is fast, responsive and impactful.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-3 gap-6 pt-2 max-w-lg mx-auto lg:mx-0">
            {[ 
              { icon: Code2, label: "Clean Code" },
              { icon: Palette, label: "UI/UX Focus" },
              { icon: Zap, label: "Performance" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-[#f86a0f]/20 flex items-center justify-center">
                  <Icon className="text-[#f86a0f]" size={22} />
                </div>
                <p className="text-white font-medium text-sm">{label}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <Button
              variant="primary"
              className="text-sm font-semibold"
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
