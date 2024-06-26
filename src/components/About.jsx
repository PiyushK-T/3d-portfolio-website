import React from "react";
import { education } from "../data";
import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const About = () => {
  return (
      <div className='text-center md:text-left md:px-20 lg:px-40'>
      <h2 className={`${styles.sectionText}`}>About Me</h2>
      <div>
        <h2 className={`${styles.subsectionText}`}>Education</h2>
        <div className='flex flex-col md:flex-row md:justify-between gap-8 md:gap-20 '>
          {education.map((edu, index) => (
            <div key={index} className='mb-4 flex-1'>
              <h3 className={`${styles.subsectionTitle}`}>{edu.degree}</h3>
              <div className='max-w-max md:max-w-7xl mx-auto list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6 mt-3'>
              <div className={`${styles.subsectionDetail}`}>
              <p>{edu.university}</p>
              <p>{edu.address}</p>
              <p>{edu.year}</p>
            </div>
            </div>
            </div>
          ))}
        </div>
        <h2 className={`${styles.subsectionText}`}>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className='mb-4 flex-1'>
              <h3 className={`${styles.subsectionTitle}`}>{exp.title}</h3>
              <div className='max-w-7xl list-none space-y-0 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6 mt-3'>
              <p className={`${styles.subsectionDetail}`}>{exp.company_name} | {exp.date}</p>
              <div className="text-teal-600 font-semibold md:text-[20px] sm:text-[12px] text-[10px] ml-2">
              <ul className="list-disc ml-0 space-y-3">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
            </div>
            </div>
            </div>
          ))}
        </div>
        <h2 className={`${styles.subsectionText}`}>Skills</h2>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <div className="p-8">
          <div className="mb-6">
            <h3 className={`${styles.subsectionTitle}`}>Beginner</h3>
            <div className={`${styles.icon}`}>
              <i className="devicon-threejs-original-wordmark"></i>
              <i className="devicon-tailwindcss-plain-wordmark"></i>
            </div>
          </div>

          <div className="mb-6">
            <h3 className={`${styles.subsectionTitle}`}>Intermediate</h3>
            <div className={`${styles.icon}`}>
              <i className="devicon-c-plain"></i>
              <i className="devicon-cplusplus-plain"></i>
              <i className="devicon-java-plain-wordmark"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-python-plain-wordmark"></i>
              <i className="devicon-react-original-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-materialui-plain"></i>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-jupyter-plain-wordmark"></i>
              <i className="devicon-android-plain-wordmark"></i>
              <i className="devicon-figma-plain"></i>
            </div>
          </div>

          <div className="mb-6">
            <h3 className={`${styles.subsectionTitle}`}>Advanced</h3>
            <div className={`${styles.icon}`}>
              <i className="devicon-mysql-plain-wordmark"></i>
              <i className="devicon-postgresql-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-blender-original-wordmark"></i>
            </div>
          </div>
        </div>
      </div>
    // </div> 
  );
};

export default SectionWrapper(About, "about");
