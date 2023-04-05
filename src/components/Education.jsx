import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { Element } from 'react-scroll';

const Education = () => {
  return (
    <Element name="education">
    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 min-h-screen py-12">
      <div className="education mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Previous Education</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            date=""
            header={<h4 className="font-semibold">ITT Technical Institute - Canton, MI</h4>}
            icon={<FaGraduationCap />}
          >
            <p>Associate's Degree in Network Systems Administration</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="8 - 2022"
            header={<h4 className="font-semibold">Certification</h4>}
            icon={<FaCertificate />}
          >
            <p>PCEP™ – Certified Entry-Level Python Programmer</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="March 6, 2023"
            header={<h4 className="font-semibold">Meta Front-End Developer</h4>}
            icon={<FaCertificate />}
          >
            <p>Meta Front-End Developer by Meta on Coursera</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="March 18, 2023"
            header={<h4 className="font-semibold">Meta Back-End Developer</h4>}
            icon={<FaCertificate />}
          >
            <p>Meta Back-End Developer by Meta on Coursera.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="Currently Active 10-22 - 4-24"
            header={<h4 className="font-semibold">Western Governors University</h4>}
            icon={<FaGraduationCap />}
          >
            <p>Bachelor of Science, Major in Software Engineering</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
    </Element>
  );
};

export default Education;
