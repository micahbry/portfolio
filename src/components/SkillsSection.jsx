import React from 'react';
import { Element } from 'react-scroll';
import { Icon } from '@iconify/react';
import Html5Icon from '@iconify/icons-simple-icons/html5';
import Css3Icon from '@iconify/icons-simple-icons/css3';
import JsIcon from '@iconify/icons-simple-icons/javascript';
import ReactIcon from '@iconify/icons-simple-icons/react';
import PythonIcon from '@iconify/icons-simple-icons/python';
import DjangoIcon from '@iconify/icons-simple-icons/django';
import NodejsIcon from '@iconify/icons-simple-icons/node-dot-js';
import MongodbIcon from '@iconify/icons-simple-icons/mongodb';
import FirebaseIcon from '@iconify/icons-simple-icons/firebase';
import GitIcon from '@iconify/icons-simple-icons/git';
import MysqlIcon from '@iconify/icons-simple-icons/mysql';
import PostgresqlIcon from '@iconify/icons-simple-icons/postgresql';
import HerokuIcon from '@iconify/icons-simple-icons/heroku';
import GithubIcon from '@iconify/icons-simple-icons/github';

const SkillsSection = () => {
  const frontEndSkills = [
    { name: 'JavaScript', icon: JsIcon, color: '#F7DF1E'},
    { name: 'React', icon: ReactIcon, color: '#61DAFB'},
    { name: 'HTML', icon: Html5Icon, color:  '#E34F26' },
    { name: 'CSS', icon: Css3Icon, color: '#1572B6'},
    { name: 'Angular', icon: JsIcon, color: '#E34F26'},
  ];

  const backEndSkills = [
    { name: 'Python', icon: PythonIcon, color: '#3776AB'},
    { name: 'Django', icon: DjangoIcon, color: '#092E20' },
    { name: 'Node.js', icon: NodejsIcon, color: '#339933'},
    { name: 'MongoDB', icon: MongodbIcon, color: '#47A248'},
    { name: 'Firebase', icon: FirebaseIcon,color: '#FFCA28'},
  ];

  const otherSkills = [
    { name: 'Git', icon: GitIcon, color: '#F05032'},
    { name: 'MySQL', icon: MysqlIcon, color: '#4479A1'},
    { name: 'PostgreSQL', icon: PostgresqlIcon, color: '#336791'},
    { name: 'Heroku', icon: HerokuIcon,color : '#430098'},
    { name: 'GitHub', icon: GithubIcon,color  : '#181717'},
  ];

  const renderSkills = (skills) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="dark:bg-indigo-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-between"
          >
            <div className="text-3xl mb-4">
              <Icon icon={skill.icon} style={{ fontSize: '3rem', color: skill.color }} />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <Element name="skills">
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
        <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-indigo-800">Front End</h2>
            {renderSkills(frontEndSkills)}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-indigo-800">Back End</h2>
            {renderSkills(backEndSkills)}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-indigo-800">Other</h2>
            {renderSkills(otherSkills)}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillsSection;
