"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Scroll Reveal Controls
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        () => {
          setMessage("Failed to send message. Try again.");
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
      className="py-24 px-6 bg-gradient-to-b from-dark to-dark-lighter/40 
                 text-white backdrop-blur-xl border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-4 
          bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-center text-gray-400 mb-14"
        >
          Let’s create something amazing together.
        </motion.p>

        {/* Glass Card */}
        <motion.form
          variants={fadeUp}
          onSubmit={sendEmail}
          className="
            space-y-6 p-8 rounded-2xl 
            bg-white/5 backdrop-blur-xl shadow-2xl 
            border border-white/10 relative
          "
        >

          {/* Glowing Border */}
          <div className="absolute inset-0 rounded-2xl border border-transparent 
            [background:linear-gradient(120deg,rgba(168,85,247,0.5),rgba(251,146,60,0.5))_border-box] 
            mask-[linear-gradient(#000_0_0)_padding-box,linear-gradient(#000_0_0)] 
            mask-composite:exclude pointer-events-none"></div>

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"   // UPDATED
              required
              className="
                w-full p-3 rounded-lg bg-black/40 text-white 
                placeholder:text-gray-500 outline-none
                focus:ring-2 focus:ring-purple-500 transition
              "
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"  // UPDATED
              required
              className="
                w-full p-3 rounded-lg bg-black/40 text-white 
                placeholder:text-gray-500 outline-none
                focus:ring-2 focus:ring-purple-500 transition
              "
              placeholder="your@email.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-300 mb-1">Subject</label>
            <input
              type="text"
              name="title"  // NEW FIELD
              required
              className="
                w-full p-3 rounded-lg bg-black/40 text-white 
                placeholder:text-gray-500 outline-none
                focus:ring-2 focus:ring-purple-500 transition
              "
              placeholder="What is this about?"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              name="message" // SAME
              required
              rows={5}
              className="
                w-full p-3 rounded-lg bg-black/40 text-white 
                placeholder:text-gray-500 outline-none
                focus:ring-2 focus:ring-purple-500 transition
              "
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="
              w-full py-3 text-lg font-semibold rounded-xl 
              bg-gradient-to-r from-purple-600 to-orange-500 
              hover:opacity-90 transition disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {message && (
            <p className="text-center text-green-400 pt-2 animate-pulse">
              {message}
            </p>
          )}

        </motion.form>
      </div>
    </motion.section>
  );
}
