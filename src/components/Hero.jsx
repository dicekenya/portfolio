import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import { FaFacebook, FaInstagram, FaTiktok, FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center 
      bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4 transition-all duration-700"
    >
      {/* Profile Image with animation */}
      <motion.img
        src={profilePic}
        alt="Fredrick Odumbe"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 mb-6 
        shadow-[0_0_25px_rgba(59,130,246,0.6)]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Intro text */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-3 text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Fredrick Odumbe
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Full-Stack Web Developer
      </motion.h2>

      {/* Social Links */}
      <motion.div
        className="flex space-x-6 mb-6 text-blue-600 dark:text-blue-400 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a href="https://www.facebook.com/yung.hunter.79" target="_blank" rel="noreferrer">
          <FaFacebook className="hover:scale-125 transition" />
        </a>
        <a href="https://instagram.com/Lyrical_hunter" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:scale-125 transition" />
        </a>
        <a href="https://tiktok.com/@itsme_dice" target="_blank" rel="noreferrer">
          <FaTiktok className="hover:scale-125 transition" />
        </a>
        <a href="tel:+254707850704" target="_blank" rel="noreferrer">
          <FaPhoneAlt className="hover:scale-125 transition" />
        </a>
      </motion.div>

      {/* Hire Me Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer shadow-lg hover:shadow-blue-500/50 transition"
        >
          Hire Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
