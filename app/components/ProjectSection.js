"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Novated Choice",
    description: "A brief description of the first project showcasing its features and tech stack.",
    image: "/novated.png",
    link: "#",
  },
  {
    id: 2,
    title: "MMS",
    description: "An overview of the second project highlighting its functionality and design.",
    image: "/mmsg.png",
    link: "#",
  },
  {
    id: 3,
    title: "Oceanic",
    description: "Details of the third project focusing on its innovative aspects.",
    image: "/ocean.png",
    link: "#",
  },
  {
    id: 4,
    title: "elephant",
    description: "Key points about the fourth project emphasizing its performance and scalability.",
    image: "/elephant.png",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-black py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{project.title}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-block px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition duration-300"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.button
            className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            See More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
