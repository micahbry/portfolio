import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Particles from 'react-tsparticles';
import { Element } from 'react-scroll';

const AboutMe = () => {
  return (
    <Element name="about-me">
    <div className="about-me min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center pattern-grid-sm relative">
      <Particles
        className="absolute w-full h-full z-[-1]"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <div className="container bg-white p-8 rounded-xl shadow-md dark:bg-gray-800 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 dark:text-indigo-400">About Me</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div className="relative">
              <img src="assets/Micah.svg" alt="Micah" />
              </div>
              <div>
            <img src="/assets/SheriAndMicah.svg" alt="My wife Sheri and I during our honeymoon" />
          </div>
          <div>
            <img src="/assets/MicahErich.svg" alt="My son Mj (at 3 months)" />
          </div>
          <div className="relative">
            <img src="/assets/KingMighty1.jpg" alt="KingMighty" />
            <a href="https://album.link/us/i/1498712874" className="carousel-link absolute bottom-0 left-0 p-2 text-white bg-blue-600 rounded hover:bg-blue-500">Click Me</a>
          </div>
          <div className="relative">
            <img src="/assets/KingMighty2.jpg" alt="KingMighty2" />
            <a href="https://album.link/us/i/1563116041" className="carousel-link absolute bottom-0 left-0 p-2 text-white bg-blue-600 rounded hover:bg-blue-500">Click Me</a>
          </div>
          <div className="relative">
            <img src="/assets/OurRealistMoment.jpg" alt="Our Realist Moment" />
            <a href="https://album.link/us/i/1542695563" className="carousel-link absolute bottom-0 left-0 p-2 text-white bg-blue-600 rounded hover:bg-blue-500">Click Me</a>
          </div>
          <div className="relative">
            <img src="/assets/ProjectAndPyramids.jpg" alt="Projects and Pyramids" />
            <a href="https://album.link/us/i/1434979585" className="carousel-link absolute bottom-0 left-0 p-2 text-white bg-blue-600 rounded hover:bg-blue-500">Click Me</a>
          </div>
        </Carousel>
        <p className="text-lg text-gray-500">
          I am a highly-motivated Full Stack Developer with a passion for creating visually appealing and functional web applications. With hands-on experience in React, Python, and various other technologies, I am constantly expanding my skill set to stay at the forefront of the industry. I am currently seeking a full-time position as a Software Engineer, where I can contribute my expertise and grow within a dynamic team. On my free time, I enjoy playing video games, watching movies, exercising, and spending time with my family. I also am a hip hop artist by the name of King Micah the Infamous. I have worked with Skyzoo, Marv Won, Elzhi, Guilty Simpson, and Gangsta boo to name a few. I currently have four studio albums with my recent one being KingMighty2 (released 2021). As a father to a lovable baby boy, and a husband to my wife, Sheri. I am constantly looking for ways to improve my life and the lives of those around me. I am a firm believer that we are all capable of achieving greatness, and I am excited to see what the future holds.
        </p>
      </div>
    </div>
    </Element>
  );
};

export default AboutMe;
