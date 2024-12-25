"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-800 py-20" id="about">
      <div className="container mx-auto px-6 md:px-12">
        {/* About Me Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I am a dedicated Frontend Developer with a passion for crafting
            exceptional web experiences. My journey in coding has been fueled
            by creativity and an eagerness to learn.
          </motion.p>
        </div>

        {/* Education Tree */}
        <div className="relative">
        <motion.div
            className="absolute w-2 h-full left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5 }}
          />

          <div className="space-y-12">
            {/* HSC */}
            <div className="flex items-center justify-between md:flex-row-reverse ">
              <motion.div
                className="bg-gray-100 rounded-lg shadow-lg p-6 md:w-5/12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-2">B Tech Information Technology</h3>
                <p className="text-gray-600 mb-1"><strong>College : </strong>Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology </p>
                <p className="text-gray-600"><strong>CGPA : </strong> 7.2</p>
              </motion.div>
              <div className="w-16 h-16 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center text-gray-800 font-bold relative md:absolute md:left-1/2 transform md:-translate-x-1/2 "
              >
                2018
              </div>
            </div>

            {/* SSLC */}
            <div className="flex items-center justify-between">
              <motion.div
                className="bg-gray-100 rounded-lg shadow-lg p-6 md:w-5/12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-2">HSC</h3>
                <p className="text-gray-600 mb-1"><strong>School : </strong> St Joseph's  Matriculation Higher Secondary School</p>
                <p className="text-gray-600"><strong>Percentage : </strong> 64%</p>
              </motion.div>
              <div className="w-16 h-16 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center text-gray-800 font-bold relative md:absolute md:left-1/2 transform md:-translate-x-1/2">
                2014
              </div>
            </div>

            {/* UG */}
            <div className="flex items-center justify-between md:flex-row-reverse">
              <motion.div
                className="bg-gray-100 rounded-lg shadow-lg p-6 md:w-5/12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-2">SSLC</h3>
                <p className="text-gray-600 mb-1"><strong>School : </strong> St Joseph's  Matriculation Higher Secondary School</p>
                <p className="text-gray-600"><strong>Percentage : </strong> 80%</p>
              </motion.div>
              <div className="w-16 h-16 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center text-gray-800 font-bold relative md:absolute md:left-1/2 transform md:-translate-x-1/2">
                2012
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
