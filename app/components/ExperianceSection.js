"use client"
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="bg-white text-black py-20" id='experience'>
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Experience
        </motion.h2>

        {/* Git Tree Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-300 z-0 transform -translate-x-1/2"></div>

          {/* Experience 1: Frontend Developer */}
          <motion.div
            className="timeline-node flex items-center justify-start mb-16 relative z-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-white flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="ml-8 flex flex-col items-start">
              <h3 className="text-2xl font-semibold mb-1">Frontend Developer</h3>
              <p className="text-lg font-semibold text-gray-600 mb-2">EITB Global Info Solution Pvt Ltd | 2023 - Present</p>
              <p className="text-gray-700 max-w-md">As a Frontend Developer at EITB Global Info Solution, I work on building and optimizing web applications using modern technologies like React, Next.js, and Tailwind CSS.</p>
            </div>
          </motion.div>

          {/* Experience 2: Process Associate */}
          <motion.div
            className="timeline-node flex items-center justify-end mb-16 relative z-10"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="mr-8 flex flex-col items-start text-right">
              <h3 className="text-2xl font-semibold mb-1">Associate</h3>
              <p className="text-lg font-semibold text-gray-600 mb-2">Mahindra Logistics | 2022 - 2023</p>
              <p className="text-gray-700 max-w-md">At Mahindra Logistics, I was responsible for streamlining business processes, analyzing workflows, and client escaltion Tickets to ensure smooth Delivery</p>
            </div>
          </motion.div>

          {/* Experience 3: Process Associate */}
          <motion.div
            className="timeline-node flex items-center justify-start mb-16 relative z-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="ml-8 flex flex-col items-start">
              <h3 className="text-2xl font-semibold mb-1">Process Associate</h3>
              <p className="text-lg font-semibold text-gray-600 mb-2">Rivigo Logistcs (Mahindra Group) | 2020 - 2022</p>
              <p className="text-gray-700 max-w-md">In my role, I was responsible for streamlining business processes, analyzing workflows, and client escaltion Tickets to ensure smooth Delivery</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
