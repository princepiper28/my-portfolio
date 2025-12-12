"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="relative group bg-dark border border-[#f86a0f]/20 
      rounded-2xl p-6 md:p-8 shadow-lg shadow-[#f86a0f]/5 
      transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f86a0f]/0 to-[#f86a0f]/10 opacity-0 
      group-hover:opacity-100 transition duration-500 blur-xl pointer-events-none" />

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-xl bg-[#f86a0f]/20 flex items-center 
        justify-center mb-6 group-hover:neon-orange-glow transition-all"
      >
        <Icon
          className="text-[#f86a0f]"
          size={32}
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mb-3 font-poppins">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-off-white/70 text-sm leading-relaxed font-inter">
        {description}
      </p>
    </motion.div>
  );
}
