"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  const card = (
    <div className="bg-dark-gray rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-primary/10 group">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3
          className="text-primary text-xl font-semibold mb-2"
          style={{ fontFamily: "Poppins" }}
        >
          {title}
        </h3>

        <p
          className="text-text-off-white/80 text-base leading-relaxed mb-4 font-inter"
          style={{ fontWeight: 400 }}
        >
          {description}
        </p>

        <Button
          variant="primary"
          className="text-sm px-5 py-2.5 bg-primary text-dark hover:bg-[#FF8533] hover:shadow-lg hover:shadow-primary/20"
        >
          View Project
        </Button>
      </div>
    </div>
  );

  return link ? (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {card}
    </Link>
  ) : (
    card
  );
}
