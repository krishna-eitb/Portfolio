
"use client";
import React, { useState } from "react";
// import Link from "next/link";
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-800 ">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
          <Link to="/"className="hover:text-gray-600 transition duration-300">Krishna S
          </Link>
        </div>
        <nav>
          <div className="hidden md:flex justify-center space-x-8 text-lg">
            <Link to="about" smooth={true} duration={500}   easing="easeInOutQuart"className="hover:text-gray-600 transition duration-300 cursor:pointer">
              About
            </Link>
            <Link to="skills" className="hover:text-gray-600 transition duration-300">
              Skills
            </Link>
            <Link to="experience" className="hover:text-gray-600 transition duration-300">
              Experience
            </Link>
            <Link to="projects" className="hover:text-gray-600 transition duration-300">
              Projects
            </Link>
            <Link to="contact" className="hover:text-gray-600 transition duration-300">
              Contact Us
            </Link>
          </div>
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100">
          <ul className="space-y-6 p-6">
            <li>
              <Link
                to="about" 
                className="block text-gray-800 hover:text-gray-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                className="block text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                className="block text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                className="block text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="block text-gray-800 hover:text-gray-600 transition duration-300"
              >
               Reach Out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
