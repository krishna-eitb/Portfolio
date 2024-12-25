"use client"
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function SkillSection() {
  return (
    <section className="h-auto bg-black text-white py-20 relative md:h-vh" id='skills'>
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Technical Skills
        </motion.h2>

        {/* Modern Advanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Skill Card 1: HTML */}
          <motion.div
            className="skill-card p-8 rounded-xl shadow-lg backdrop-blur-md border-2 border-gray-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-transparent hover:backdrop-blur-none hover:border-2 hover:border-pink-500"
            initial={{ opacity: 0, y: 100 }} // Start from bottom (slide-in)
            whileInView={{ opacity: 1, y: 0 }} // End position
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container mb-4">
              <FaHtml5 size={50} className="text-orange-500 mx-auto" />
            </div>
            <p className="text-lg font-semibold">HTML</p>
          </motion.div>

          {/* Skill Card 2: CSS */}
          <motion.div
            className="skill-card p-8 rounded-xl shadow-lg backdrop-blur-md border-2 border-gray-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-transparent hover:backdrop-blur-none hover:border-2 hover:border-blue-500"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container mb-4">
              <FaCss3Alt size={50} className="text-blue-500 mx-auto" />
            </div>
            <p className="text-lg font-semibold">CSS</p>
          </motion.div>

          {/* Skill Card 3: JavaScript */}
          <motion.div
            className="skill-card p-8 rounded-xl shadow-lg backdrop-blur-md border-2 border-gray-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-transparent hover:backdrop-blur-none hover:border-2 hover:border-yellow-500"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container mb-4">
              <FaJsSquare size={50} className="text-yellow-500 mx-auto" />
            </div>
            <p className="text-lg font-semibold">JavaScript</p>
          </motion.div>

          {/* Skill Card 4: React */}
          <motion.div
            className="skill-card p-8 rounded-xl shadow-lg backdrop-blur-md border-2 border-gray-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-transparent hover:backdrop-blur-none hover:border-2 hover:border-cyan-500"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container mb-4">
              <FaReact size={50} className="text-cyan-500 mx-auto" />
            </div>
            <p className="text-lg font-semibold">React</p>
          </motion.div>

          {/* Skill Card 5: Node.js */}
          <motion.div
            className="skill-card p-8 rounded-xl shadow-lg backdrop-blur-md border-2 border-gray-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-transparent hover:backdrop-blur-none hover:border-2 hover:border-green-500"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container mb-4">
              <FaNodeJs size={50} className="text-green-500 mx-auto" />
            </div>
            <p className="text-lg font-semibold">Node.js</p>
          </motion.div>

          {/* Skill Card 6: Git */}
          <motion.div
            className="skill-card p-8 rounded-xl shadow-lg backdrop-blur-md border-2 border-gray-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-transparent hover:backdrop-blur-none hover:border-2 hover:border-red-500"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container mb-4">
              <FaGitAlt size={50} className="text-red-500 mx-auto" />
            </div>
            <p className="text-lg font-semibold">Git</p>
          </motion.div>

          {/* Skill Card 7: Next.js */}
          <motion.div
            className="skill-card p-8 rounded-xl shadow-lg backdrop-blur-md border-2 border-gray-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-transparent hover:backdrop-blur-none hover:border-2 hover:border-white"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container mb-4">
              <SiNextdotjs size={50} className="text-white mx-auto" />
            </div>
            <p className="text-lg font-semibold">Next.js</p>
          </motion.div>

          {/* Skill Card 8: Tailwind CSS */}
          <motion.div
            className="skill-card p-8 rounded-xl shadow-lg backdrop-blur-md border-2 border-gray-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-transparent hover:backdrop-blur-none hover:border-2 hover:border-teal-500"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-container mb-4">
              <SiTailwindcss size={50} className="text-teal-400 mx-auto" />
            </div>
            <p className="text-lg font-semibold">Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
