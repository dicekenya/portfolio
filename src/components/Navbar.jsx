// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import useTheme from '../hooks/useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">All About Me</h1>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
            {['hero', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <Link to={item} smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
