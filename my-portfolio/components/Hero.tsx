"use client";

import React from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

const textVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Hero() {
  const [text] = useTypewriter({
    words: ["Prince Udoewah"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
    delaySpeed: 2000,
  });

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center pt-16 md:pt-20 bg-dark overflow-hidden"
    >
      <Container className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* LEFT SIDE */}
        <motion.div
          className="flex-1 space-y-4 text-center lg:text-left"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            custom={0}
            variants={textVariant}
            className="text-text-off-white/60 font-inter"
          >
            Hi,
          </motion.p>

          {/* NAME */}
          <motion.h1
            custom={1}
            variants={textVariant}
            className="text-white font-semibold max-w-[600px] leading-snug flex flex-wrap items-end gap-2"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-light">
              I&apos;m
            </span>

            <span
              className="
                text-primary font-poppins font-bold
                text-3xl sm:text-5xl md:text-6xl lg:text-[55px]
                whitespace-nowrap
                flex items-end
              "
            >
              {text}
              <span className="ml-1 text-primary animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariant}
            className="text-white font-poppins font-semibold text-xl md:text-2xl"
          >
            a Frontend Developer
          </motion.p>

          <motion.p
            custom={3}
            variants={textVariant}
            className="text-text-off-white/80 max-w-xl mx-auto lg:mx-0 font-inter text-base md:text-lg leading-relaxed"
          >
            Passionate about creating beautiful, responsive, and user-friendly
            web experiences. I specialize in modern JavaScript, React, and
            Next.js frameworks that bring ideas to life.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            custom={4}
            variants={textVariant}
            className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                onClick={() => {
                  const target = document.getElementById("projects");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/prince-udoewah-801637111/",
                    "_blank"
                  )
                }
              >
                View LinkedIn Profile
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            custom={5}
            variants={textVariant}
            className="flex justify-center lg:justify-start gap-2 pt-4"
          >
            <div className="h-1 w-12 bg-primary rounded-full" />
            <div className="h-1 w-6 bg-primary/50 rounded-full" />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          className="relative flex-shrink-0 mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative mx-auto border-4 border-primary rounded-full overflow-hidden shadow-xl"
          >
            <Image
              src="/images/profile.jpeg"
              alt="Prince Joseph Udoewah"
              fill
              className="rounded-full object-cover"
              priority
            />
          </motion.div>

          {/* Glow Effects */}
          <motion.div
            animate={{ scale: [1, 1.35, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -z-10 -top-6 -right-8 w-24 h-24 bg-primary/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -z-10 -bottom-6 -left-6 w-28 h-28 bg-primary/20 rounded-full blur-3xl"
          />
        </motion.div>
      </Container>
    </section>
  );
}
