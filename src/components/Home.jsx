import React, { useState, useEffect } from 'react';


const Home = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/micahbry')
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  }, []);

  if (!githubData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 pattern-grid-sm">
      <figure className="bg-white p-8 rounded-xl shadow-md dark:bg-gray-800 w-full max-w-md">
        <img
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={githubData.avatar_url}
          alt="Micah Bryant"
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-indigo-400">
              Micah Bryant
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-indigo-800 dark:text-indigo-400">Detroit Mi,</div>
            <div className="text-gray-500">
             Full Stack Developer
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Home;
