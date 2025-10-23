// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useTheme from './hooks/useTheme'; // optional if you have it; harmless if present
import Blog from './components/Blog';

function App() {
  // initialize theme (safe to call even if you don't use it elsewhere)
  try { useTheme(); } catch (e) {}

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />
      <main className="pt-16"> {/* space for fixed navbar */}
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Blog />
      </main>
    </div>
  );
}

export default App;
