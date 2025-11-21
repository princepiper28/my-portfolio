import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'General Manager',
      company: 'Seacom Services Nigeria Limited',
      period: 'Nov 2022 - Present',
      description:
        'Overseeing company operations, coordinated multiple teams, and ensured project delivery with high standards.',
    },
    {
      title: 'Tech & Freelance Projects',
      company: 'Personal Portfolio & Freelance Projects',
      period: '2023 - Present',
      description:
        'Developed frontend applications using React, Next.js, Tailwind CSS, and TypeScript, showcasing projects, dashboards, and real-world solutions.',
    },
    {
      title: 'Manager',
      company: 'Renge Nigeria Limited',
      period: 'May 2019 - Jan 2021',
      description:
        'Leading operations and project execution, managing teams, and driving business growth with innovative strategies.',
    },
    {
      title: 'Project Manager & Teacher',
      company: 'Lord’s Heritage Covenant Academy',
      period: 'Feb 2021 - Dec 2023',
      description:
        'Managed educational projects, trained students, developed teaching resources, and implemented effective learning strategies.',
    },
    
  ];

  const education = [
    {
      degree: 'ND in Electrical & Electronic Engineering',
      institution: 'Technical College / Polytechnic',
      period: '2016 - 2018',
    },
    {
      degree: 'Frontend Development & Next.js',
      institution: 'ALX / Personal Learning',
      period: 'Apr 2023 - Oct 2025',
    },
    {
      degree: 'Project Management Training',
      institution: 'Various Corporate Workshops',
      period: '2020 - 2022',
    },
    {
      degree: 'Bsc in Information Technology',
      institution: 'National Open University of Nigeria',
      period: 'In View',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-dark">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Central Vertical Line */}
        <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-[#f86a0f]/30 h-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Left Column - Experience */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#f86a0f]/20 flex items-center justify-center">
                <Briefcase className="text-[#f86a0f]" size={24} />
              </div>
              <h2 className="text-[#f86a0f] font-poppins text-2xl font-semibold">
                Experience
              </h2>
            </div>

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 lg:pr-8 border-l-2 border-[#f86a0f]/30 pb-8 last:pb-0 lg:border-l-0 lg:border-r-2 lg:pl-0"
                >
                  <div className="absolute lg:left-auto lg:right-[-9px] left-[-9px] top-1 w-4 h-4 rounded-full bg-[#f86a0f] ring-4 ring-[#f86a0f]/20 transition-transform duration-300 hover:scale-125"></div>

                  <h3 className="text-white font-poppins text-lg font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#f86a0f] font-inter text-sm font-medium mb-2">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="text-text-off-white/70 font-inter text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#f86a0f]/20 flex items-center justify-center">
                <GraduationCap className="text-[#f86a0f]" size={24} />
              </div>
              <h2 className="text-[#f86a0f] font-poppins text-2xl font-semibold">
                Education & Certifications
              </h2>
            </div>

            <div className="space-y-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 lg:pl-0 lg:pr-8 border-l-2 border-[#f86a0f]/30 pb-8 last:pb-0 lg:border-l-0 lg:border-r-2"
                >
                  <div className="absolute lg:left-auto lg:right-[-9px] left-[-9px] top-1 w-4 h-4 rounded-full bg-[#f86a0f] ring-4 ring-[#f86a0f]/20 transition-transform duration-300 hover:scale-125"></div>

                  <h3 className="text-white font-poppins text-lg font-semibold mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-[#f86a0f] font-inter text-sm font-medium mb-2">
                    {edu.institution} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
