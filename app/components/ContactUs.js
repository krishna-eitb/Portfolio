"use client"
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="bg-white text-gray-800 py-20" id='contact'>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side Content: Links and Additional Information */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-6xl font-semibold mb-4">
              Let’s get in touch!
            </h3>
            <p className="text-lg mb-8">
              I am always open to new opportunities. Whether you're looking to collaborate on a project, need help, or just want to chat, feel free to drop a message. I'll get back to you as soon as possible.
            </p>
            
            {/* Social Links */}
            <motion.div
              className="flex justify-start gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-black hover:text-gray-700 transition duration-300"
              >
                <FaLinkedin />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-black hover:text-gray-700 transition duration-300"
              >
                <FaGithub />
              </motion.a>

              {/* Resume */}
              <motion.a
                href="/path/to/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-black hover:text-gray-700 transition duration-300"
              >
                <FaFileAlt />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side Content: Contact Form */}
          <motion.div
            className="bg-gray-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 mt-2 rounded-xl bg-gray-200 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 mt-2 rounded-xl bg-gray-200 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold">Your Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-4 mt-2 rounded-xl bg-gray-200 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-4 mt-2 rounded-xl bg-gray-200 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  placeholder="Type your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 mt-6 rounded-xl bg-black text-white font-semibold transition-all duration-300 ease-in-out hover:bg-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
