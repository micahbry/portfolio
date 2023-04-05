import React from 'react';
import { Element } from 'react-scroll';
const Footer = () => {
  return (
    <Element name="footer">
    <footer className="bg-gradient-to-r from-indigo-800 via-indigo-500 to-purple-500 p-4 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center space-x-4 text-center">
          <a
            href="https://github.com/micahbry"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-300 px-2 py-1 transition-all duration-200 transform hover:scale-110"
          >
            GitHub
          </a>
          <a href="mailto:micahbry@gmail.com" className="text-white hover:text-gray-300 px-2 py-1 transition-all duration-200 transform hover:scale-110">
            Email
          </a>
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-300 px-2 py-1 transition-all duration-200 transform hover:scale-110"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/micahbry/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-300 px-2 py-1 transition-all duration-200 transform hover:scale-110"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/micahbry87"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-300 px-2 py-1 transition-all duration-200 transform hover:scale-110"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
    </Element>
  );
};

export default Footer;
