import React from 'react';

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'];

  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        I’m a passionate web developer focused on creating modern, responsive, and user-friendly web applications.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 px-4 py-2 rounded-lg font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
