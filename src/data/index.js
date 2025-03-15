 import {
  portfolio1,
  portfolio2,
  portfolio3,
  WR1,
  WR2,
  SE1,
  SE2,
  SE3,
  SE4,
  CamP1,
  CamP2,
  CamP3,
  CamP4,
 } from '../assets';

  export const navLinks = [
    {
      id: "hero",
      title: "Home",
    },
    {
    id: "about",
    title: "About me",
    },
    {
      id: "portfolio",
      title: "Projects",
    },
   {
      id: "contact",
      title: "Contact",
    },
  ];
  const education = [
    {
      degree:"M.S. in Computer Science",
      university: "Stevens Institute of Technology",
      address:"Hoboken, New Jersey, USA",
      year:"07/2023 - 05/2025",
    },
    {
      degree:"B.E. in Computer Engineering",
      university: "Pune Institute of Technology, S.P.P.U.",
      address:"Pune, Maharashtra, India",
      year:"07/2018 - 07/2022",
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Project Intern",
      company_name: "RobIN Automotives",
      date: "09/2021 - 06/2022",
      details: [
       "Designed and developed an EV website with complaint handling, order tracking, and service center features.",
      "Built a Machine Learning model to analyze customer reviews and classify them, training on the COCO-2017 dataset using Logistic Regression, Linear Support Vector Classification, and Bernoulli Naïve Bayes.",
      "Collaborated in a 4-member team, showcasing project coordination and development expertise.",
      "Languages used: JavaScript, Python, HTML, CSS"
      ],
    },
  ];
  
  const portfolio = [
    {
      name:"ServiceEasy (Web app for electronic device service centers)",
      description:
      `Developed a web platform for device service requests with ticketing, account management, and an admin dashboard, 
      ensuring functionality and user satisfaction in a team of four.`,
      tech:`JavaScript, HTML, CSS`,
      images: [SE1, SE2, SE3, SE4], 
    },
    {
      name:"CampusPulse (Web app for managing events and finding roommates)",
      description:
      `Created a student event management app with features like event creation, registration, real-time notifications, 
      and roommate finding. Implemented user-centric designs collaboratively in a team environment.`,
      tech:`JavaScript, HTML, CSS`,
      images: [CamP1, CamP2, CamP3, CamP4], 
    },
    {
      name: "Portfolio Website",
      description:
      `Built a portfolio website using ReactJS, Tailwind CSS, and Vite to showcase web development and machine learning projects. 
      Integrated self-designed 3D models created in Blender to enhance visual appeal.`,
      tech:`JavaScript, TypeScript, Threejs, HTML, CSS`,
      images: [portfolio1, portfolio2, portfolio3], 
      },
      {
      name: "White Radish (Mobile Software Service for Farmers)",
      description:
      `Collaborated in a 4-member team to develop an Android app connecting farmers directly with customers. Led 
        the UI design process and contributed to backend development for a seamless user experience`,
      tech:`Java`,
      images: [WR1, WR2], 
    },
  ];
  
  export { education, experiences, portfolio };
  