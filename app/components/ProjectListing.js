"use client"
import { motion } from 'framer-motion';

export default function ProjectListing() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Project Card 1 */}
          <motion.div
            className="project-card bg-gray-800 rounded-xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 hover:translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-img mb-6">
              <motion.img
                src="/novated.png"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Novated Choice</h3>
            <p className="text-gray-400 mb-4">A short description of the project goes here. It's a web application that does X, Y, and Z.</p>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-semibold">View Project</a>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            className="project-card bg-gray-800 rounded-xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-img mb-6">
              <motion.img
                src="/mmsg.png"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">MMS</h3>
            <p className="text-gray-400 mb-4">A brief explanation of what this project does. It is built with React, Node.js, and Tailwind CSS.</p>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-semibold">View Project</a>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            className="project-card bg-gray-800 rounded-xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 hover:translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-img mb-6">
              <motion.img
                src="/ocean.png"
                alt="Project 3"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ocean</h3>
            <p className="text-gray-400 mb-4">Here’s a summary of the project. It uses Next.js, Tailwind CSS, and APIs to provide an engaging user experience.</p>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-semibold">View Project</a>
          </motion.div>

          {/* Project Card 4 */}
          <motion.div
            className="project-card bg-gray-800 rounded-xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 hover:translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-img mb-6">
              <motion.img
                src="/elephant.png"
                alt="Project 4"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Elephant</h3>
            <p className="text-gray-400 mb-4">This is a description of the fourth project. It’s a platform that enables seamless communication between users.</p>
            <a href="#" className="text-teal-400 hover:text-teal-500 font-semibold">View Project</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
