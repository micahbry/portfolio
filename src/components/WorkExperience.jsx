import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WorkExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const workHistory = [
    {
      title: 'Full Stack Engineer Intern',
      company: 'Seminaut Inc',
      date: 'February 2023 - May 2023',
      description: [
        'Developed and maintained web applications using FastAPI and Flask as backend frameworks.',
        'Implemented responsive and dynamic user interfaces using ReactJS.',
        'Utilized Google Cloud for deploying and managing applications.',
        'Collaborated with cross-functional teams to deliver high-quality software products.',
        'Assisted with troubleshooting and bug fixing to ensure smooth functioning of the applications.',
      ],
      skills: [
        'Proficient in FastAPI and Flask for building backend services.',
        'Experienced in ReactJS for building user interfaces.',
        'JavaScript, HTML, and CSS for building web applications.',
        'Skilled in collaborating with cross-functional teams to deliver high-quality software products.',
        'Experienced in using Git for version control.',    
      ],
    },
    {
      title: 'End User Support Specialist',
      company : 'Michigan Medicine Help Desk',
      date: 'November 2016 - Present',
      description: [
        'Provide customer assistance – Awarded the “Making a difference Award” over 15 times.',
        'General Computing issues – exposure to Windows 7, 10, 12 Server.',
        'Printer Configuration – installed printer drivers, configured printers to workstations and printer.',
        'Network Connectivity – troubleshooting network connectivity issues.',
        'Web scripting – exposure to HTML, CSS, JavaScript, and PHP.',
        // ...
      ],
      skills: [
        'User Authentication – Active Directory, LDAP, and Kerberos.',
        'Problem Solving – troubleshooting and problem solving skills.',
        'Customer Service – excellent customer service skills.',
        'Communication – excellent communication skills.',
      
      ], },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center pattern-grid-sm">
      <div>
        <div className="relative w-4/5 max-w-lg">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
          <div className="space-y-10">
            {workHistory.map((entry, index) => (
              <div
                data-aos="fade-in"
                className={`relative p-5 pb-8 mt-5 mb-20 bg-gray-100 rounded-lg shadow-md ${
                  index % 2 === 0 ? 'mr-1/2 pr-12' : 'ml-1/2 pl-12'
                }`}
                key={index}
              >
                <h3 className="text-lg mb-1">{entry.title}</h3>
                {entry.description.map((desc, i) => (
                  <p className="mb-4" key={i}>
                    {desc}
                  </p>
                ))}
                {entry.skills && (
                  <>
                    <h4 className="text-base font-semibold">Skills:</h4>
                    {entry.skills.map((skill, i) => (
                      <p className="mb-4" key={i}>
                        {skill}
                      </p>
                    ))}
                  </>
                )}
                <h4 className="text-base font-semibold">{entry.company}</h4>
                <p>{entry.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
