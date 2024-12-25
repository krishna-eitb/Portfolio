"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-full bg-white text-gray-800 py-20 md:h-dvh">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Content */}
        <motion.h1
          className="text-xl md:text-2xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Hi, I'm</span> <br />
          <span className="mt-4 block text-3xl md:text-6xl font-bold leading-tight text-gray-900">
            Navaneetha Krishnan S
          </span>
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl font-semibold text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="cool-typing">FRONTEND DEVELOPER</span>
        </motion.h2>
        <motion.p
          className="mt-8 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          A passionate Frontend Developer crafting beautiful user interfaces and
          delightful experiences.
        </motion.p>
        <motion.div
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition duration-300"
          >
            View Projects
          </Link>
          <Link
            href="#skills"
            className="px-6 py-3 bg-white text-black border border-black rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            View Skills
          </Link>
        </motion.div>
      </div>
      <style jsx>{`
        .cool-typing {
          display: inline-block;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          color: #1f2937;
          font-weight: bold;
        }

        .cool-typing::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: #1f2937;
          animation: underline 2s infinite ease-in-out;
        }

        @keyframes underline {
          0%,
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
