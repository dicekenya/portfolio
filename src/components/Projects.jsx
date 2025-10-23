import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Website Builder",
    description:
      "An AI-powered tool that generates fully functional websites from text prompts using React, Node.js, and MongoDB.",
    image: "https://source.unsplash.com/600x400/?website,ai",
    link: "#",
  },
  {
    title: "Room Booking System",
    description:
      "A full-stack web app for booking guest houses and rooms online, integrated with M-Pesa for payments.",
    image: "https://source.unsplash.com/600x400/?hotel,booking",
    link: "#",
  },
  {
    title: "Smart Web Linker",
    description:
      "A smart platform connecting employers and house helps, with built-in chat and admin analytics dashboard.",
    image: "https://source.unsplash.com/600x400/?team,technology",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center transition-all duration-700"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-400/40 hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
