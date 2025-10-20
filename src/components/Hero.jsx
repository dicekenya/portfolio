import React from 'react';
import { Link } from 'react-scroll';
import profilePic from '../assets/profile.jpg'; // ✅ adjust name if different
import { FaFacebook, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4"
    >
      {/* Profile image */}
      <img
        src={profilePic}
        alt="Fredrick Odumbe"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 mb-6 shadow-lg"
      />

      {/* Intro */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-blue-600 dark:text-blue-400">
        Fredrick Odumbe
      </h1>
      <h2 className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
        Full-Stack Web Developer
      </h2>

      {/* Social icons */}
      <div className="flex space-x-6 mb-6 text-blue-600 dark:text-blue-400 text-2xl">
        <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
          <FaFacebook className="hover:scale-125 transition" />
        </a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:scale-125 transition" />
        </a>
        <a href="https://tiktok.com/@yourhandle" target="_blank" rel="noreferrer">
          <FaTiktok className="hover:scale-125 transition" />
        </a>
        <a href="tel:+254700000000" target="_blank" rel="noreferrer">
          <FaPhoneAlt className="hover:scale-125 transition" />
        </a>
      </div>

      {/* Button */}
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer"
      >
        Hire Me
      </Link>
    </section>
  );
};

export default Hero;
