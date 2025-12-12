import React from 'react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'General Manager',
      company: 'Seacom Services Nigeria Limited',
      period: 'Nov 2022 - Present',
      description:
        'Overseeing company operations, coordinating multiple teams, and ensuring successful project delivery with high standards.',
    },
    {
      title: 'Tech & Freelance Projects',
      company: 'Personal Portfolio & Freelance Projects',
      period: '2023 - Present',
      description:
        'Developed frontend applications using React, Next.js, Tailwind CSS, and TypeScript, building dashboards and real-world solutions.',
    },
    {
      title: 'Manager',
      company: 'Renge Nigeria Limited',
      period: 'May 2019 - Jan 2021',
      description:
        'Led operations and project execution, managed teams, and strengthened business processes.',
    },
    {
      title: 'Project Manager & Teacher',
      company: 'Lord’s Heritage Covenant Academy',
      period: 'Feb 2021 - Dec 2023',
      description:
        'Managed educational projects, trained students, and developed learning programs.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-dark">
      <div className="max-w-4xl mx-auto relative">

        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-14 h-14 rounded-xl bg-[#f86a0f]/20 flex items-center justify-center mb-4">
            <Briefcase className="text-[#f86a0f]" size={28} />
          </div>
          <h2 className="text-[#f86a0f] font-poppins text-3xl font-bold">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-[#f86a0f] rounded-full mt-3"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#f86a0f]/30 ml-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-10 pb-14 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#f86a0f] ring-4 ring-[#f86a0f]/20"></div>

              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-white font-poppins text-xl font-bold mb-1">
                  {exp.title}
                </h3>

                <p className="text-[#f86a0f] font-inter text-sm font-medium mb-3">
                  {exp.company} · {exp.period}
                </p>

                <p className="text-text-off-white/80 font-inter text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
