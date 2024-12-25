"use client"
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg font-semibold mb-2">Made by Navaneetha Krishnan S</p>
          <p className="text-sm">&copy; 2024 All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
