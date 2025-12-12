"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setLoading(false);
          e.currentTarget.reset();
        },
        () => {
          setMessage("❌ Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUp}
      id="contact"
      className="relative w-full py-10 sm:py-14
                 bg-gradient-to-b from-dark to-dark-lighter/40 
                 text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-center mb-2
                     bg-gradient-to-r from-purple-400 to-orange-400 
                     bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-center text-gray-400 mb-6 text-sm sm:text-base"
        >
          Let’s create something amazing together.
        </motion.p>

        {/* Form Card */}
        <motion.form
          variants={fadeUp}
          onSubmit={sendEmail}
          className="relative w-full space-y-4 p-5 sm:p-6
                     rounded-2xl bg-white/5 backdrop-blur-xl 
                     shadow-xl border border-white/10 
                     overflow-hidden"
        >
          {/* Glow Border */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none
                       border border-white/10
                       bg-gradient-to-br from-purple-500/10 to-orange-500/10"
          />

          {/* Name */}
          <Field label="Name">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="input-style"
            />
          </Field>

          {/* Email */}
          <Field label="Email">
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="input-style"
            />
          </Field>

          {/* Subject */}
          <Field label="Subject">
            <input
              type="text"
              name="title"
              required
              placeholder="What is this about?"
              className="input-style"
            />
          </Field>

          {/* Message */}
          <Field label="Message">
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Write your message..."
              className="input-style resize-none"
            />
          </Field>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 text-base sm:text-lg font-semibold rounded-xl 
                       bg-gradient-to-r from-purple-600 to-orange-500 
                       hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {message && (
            <p className="text-center text-green-400 pt-2 text-sm">
              {message}
            </p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}

/* Reusable Field Component */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="block text-gray-300 text-sm">{label}</label>
      {children}
    </div>
  );
}
