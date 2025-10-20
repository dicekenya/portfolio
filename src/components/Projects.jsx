import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'AI Website Generator', desc: 'An AI tool that builds websites from text prompts.' },
    { title: 'Job Portal for Househelps', desc: 'Smart platform connecting employers and househelps.' },
    { title: 'Room Booking System', desc: 'Web app for booking guest houses online.' },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
