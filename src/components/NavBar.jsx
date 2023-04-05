import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import YourLogo from '../assets/your-logo.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-800 p-4">
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <img src={YourLogo} alt="Your Logo" className="h-8 md:h-12 mr-8" />
        <button
          className="md:hidden block text-white hover:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex justify-center space-x-4 md:space-x-8 w-full md:w-auto`}
        >
            <li>
              <Link to="/" className="text-white hover:text-gray-300 px-2 md:px-4 block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 px-2 md:px-4 block py-2"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/work-experience"
                className="text-white hover:text-gray-300 px-2 md:px-4 block py-2"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="text-white hover:text-gray-300 px-2 md:px-4 block py-2"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-white hover:text-gray-300 px-2 md:px-4 block py-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="text-white hover:text-gray-300 px-2 md:px-4 block py-2"
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
