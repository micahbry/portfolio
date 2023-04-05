import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SkillsSection from './components/SkillsSection';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'tailwindcss/tailwind.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
