"use client"
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-20">
      {/* About Me and Who I Am - White Background */}
      <div className="container mx-auto px-6 mb-20">
        {/* About Me Section */}
        <div className="bg-white p-12 rounded-xl shadow-lg mb-16">
          <motion.h2
            className="text-4xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg text-gray-700 text-center">
            I am a passionate Frontend Developer with a strong foundation in building dynamic and user-friendly web applications. With expertise in web technologies such as HTML, CSS, JavaScript, React, and Next.js, I continuously strive to improve my skills and deliver high-quality digital experiences.
          </p>
        </div>

        {/* Who I Am Section */}
        <div className="bg-white p-12 rounded-xl shadow-lg">
          <motion.h3
            className="text-2xl font-semibold text-center mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Who I Am
          </motion.h3>
          <p className="text-lg text-gray-700 text-center">
            My journey began with an interest in design and technology, and I aim to merge creativity with functionality to solve real-world problems through clean and efficient code. I focus on delivering high-quality user experiences with an emphasis on performance and accessibility.
          </p>
        </div>
      </div>

      {/* Education - Black Background */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Education
          </motion.h3>

          {/* Education Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* First Education Entry: SSLC */}
            <motion.div
              className="bg-transparent border-4 border-white p-8 rounded-xl shadow-lg relative transition-transform duration-500 transform hover:scale-105 hover:border-2 hover:border-pink-500 hover:rotate-12"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring' }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                <span className="font-semibold">2016</span>
              </div>
              <h4 className="text-xl font-medium text-center mt-14">Secondary School Leaving Certificate (SSLC)</h4>
              <p className="text-center mt-2 text-sm">ABC School</p>
              <p className="mt-4 text-center">85% - Focused on core subjects including Mathematics and Science.</p>
            </motion.div>

            {/* Second Education Entry: HSC */}
            <motion.div
              className="bg-transparent border-4 border-white p-8 rounded-xl shadow-lg relative transition-transform duration-500 transform hover:scale-105 hover:border-2 hover:border-blue-500 hover:rotate-12"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring' }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                <span className="font-semibold">2018</span>
              </div>
              <h4 className="text-xl font-medium text-center mt-14">Higher Secondary Certificate (HSC)</h4>
              <p className="text-center mt-2 text-sm">XYZ College</p>
              <p className="mt-4 text-center">90% - Specialized in Physics, Chemistry, and Mathematics.</p>
            </motion.div>

            {/* Third Education Entry: UG */}
            <motion.div
              className="bg-transparent border-4 border-white p-8 rounded-xl shadow-lg relative transition-transform duration-500 transform hover:scale-105 hover:border-2 hover:border-teal-500 hover:rotate-12"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring' }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                <span className="font-semibold">2022</span>
              </div>
              <h4 className="text-xl font-medium text-center mt-14">Bachelor of Science in Computer Science (UG)</h4>
              <p className="text-center mt-2 text-sm">University of ABC</p>
              <p className="mt-4 text-center">80% - Focused on software development, web technologies, and algorithms.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
