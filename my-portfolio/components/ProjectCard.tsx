"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  const cardAnimation: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.55, 0.55, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.03,
        rotateX: 6,
        rotateY: -6,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      }}
      className="bg-dark-gray rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/50
      transition-all duration-300 shadow-lg hover:shadow-primary/10 group flex flex-col cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-primary text-xl font-semibold mb-2" style={{ fontFamily: "Poppins" }}>
          {title}
        </h3>

        <p className="text-text-off-white/80 text-base leading-relaxed mb-4 font-inter">
          {description}
        </p>

        {/* Button */}
        {url ? (
          <Link href={url} target="_blank" rel="noopener noreferrer" className="mt-auto">
            <motion.span
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 12px rgba(248, 106, 15, 0.5)",
              }}
              className="inline-block bg-[#f86a0f] text-white px-5 py-2.5 rounded-lg
              font-semibold text-sm hover:bg-[#d65a0b] transition-colors text-center w-full"
            >
              View Live
            </motion.span>
          </Link>
        ) : (
          <span
            className="mt-auto inline-block bg-gray-600 text-white px-5 py-2.5 rounded-lg
            font-semibold text-sm opacity-60 cursor-not-allowed text-center w-full"
          >
            No Live Link
          </span>
        )}
      </div>
    </motion.div>
  );
}
