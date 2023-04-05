import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/micahbry/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  const littleLemonRepo = repos.find((repo) => repo.name === 'LittleLemon-FrontEnd-Capstone');
  const filteredRepos = repos.filter((repo) => repo.name !== 'LittleLemon-FrontEnd-Capstone');

  return (
    <Element name="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 items-center justify-center pattern-grid-sm">
        <div className="p-4 bg-gray-100 shadow-lg rounded-md">
          <img src="/assets/KingMighty2.svg" alt="King Mighty" className="w-full h-32 mb-4" />
          <h3 className="text-lg font-semibold mb-2">King Mighty</h3>
          <p className="mb-4">A website built for King Mighty| used Angular and Firebase for deployment</p>
          <a
            href="https://kingmighty2.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Visit Site
          </a>
        </div>
        {littleLemonRepo && (
          <div key={littleLemonRepo.id} className="p-4 bg-gray-100 shadow-lg rounded-md">
            <img src="/assets/LittleLemon.svg" alt="Little Lemon" className="w-full h-32 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{littleLemonRepo.name}</h3>
            <p className="mb-4">{littleLemonRepo.description}</p>
            <a
              href={littleLemonRepo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub Repo
            </a>
            <a
              href="https://micahbry.github.io/LittleLemon-FrontEnd-Capstone/"
              target="_blank"
              rel="noreferrer"
              className="ml-4 text-green-600 hover:text-green-800"
            >
              Live Demo
            </a>
          </div>
        )}
        {filteredRepos.map((repo) => (
          <div key={repo.id} className="p-4 bg-gray-100 shadow-lg rounded-md">
            <h3 className="text-lg font-semibold mb-2">{repo.name}</h3>
            <p className="mb-4">{repo.description}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub Repo
            </a>
            {repo.name === 'Little-Lemon' && (
              <a
                href="https://micahbry.github.io/Little-Lemon/"
                target="_blank"
                rel="noreferrer"
                className="ml-4 text-green-600 hover:text-green-800"
              >
                Live Demo
              </a>
            )}
          </div>
        ))}
         </div>
    </Element>
  );
};

export default Projects;
