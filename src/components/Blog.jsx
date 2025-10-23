import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'My Journey as a Developer',
      date: 'October 2025',
      excerpt: 'How I started coding and the tools that shaped me as a full-stack developer.',
    },
    {
      title: 'Building Modern Websites with React',
      date: 'September 2025',
      excerpt: 'A quick overview of how React, Tailwind, and animations work together beautifully.',
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-blue-400">Blog</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-left"
          >
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-500 text-sm mb-3">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
