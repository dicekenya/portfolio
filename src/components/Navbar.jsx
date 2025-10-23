import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/logo.png'; // optional if you have a logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo / Name */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Fredrick
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium items-center">
          <li><Link to="hero" smooth duration={500} className="hover:text-blue-500 cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth duration={500} className="hover:text-blue-500 cursor-pointer">About</Link></li>
          <li><Link to="projects" smooth duration={500} className="hover:text-blue-500 cursor-pointer">Projects</Link></li>
          <li><Link to="contact" smooth duration={500} className="hover:text-blue-500 cursor-pointer">Contact</Link></li>

          {/* 🌗 Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl transition hover:scale-110"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {/* 📄 Download CV Button */}
          <a
            href="/OLUOCH_FREDRICK_ODUMBE_CV.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Download CV
          </a>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 flex flex-col items-center py-6 space-y-4 text-gray-700 dark:text-gray-200">
          <li><Link to="hero" smooth duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="projects" smooth duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="contact" smooth duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>

          {/* 🌗 Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl transition hover:scale-110"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {/* 📄 Download CV Button */}
          <a
            href="/OLUOCH_FREDRICK_ODUMBE_CV.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Download CV
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
