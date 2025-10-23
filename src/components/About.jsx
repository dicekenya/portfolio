import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 
      dark:from-gray-800 dark:to-gray-900 text-center transition-all duration-700"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Fredrick Odumbe</span>, 
        a passionate <span className="italic">Full-Stack Web Developer</span> who loves turning 
        ideas into beautiful, functional web applications. My focus is on creating clean, 
        responsive, and scalable solutions that enhance user experience.
      </motion.p>

      <motion.div
        className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map((skill) => (
          <div
            key={skill}
            className="p-4 border rounded-lg shadow hover:shadow-blue-400/40 transition hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
