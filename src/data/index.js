 import {
  portfolio1,
  portfolio2,
  portfolio3,
  WR1,
  WR2,
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
      degree:"Masters of Science in Computer Science",
      university: "Stevens Institute of Technology",
      address:"Hoboken, New Jersey, USA",
      year:"2023 - Present",
    },
    {
      degree:"Bachelors of Engineering in Computer Engineering",
      university: "Pune Institute of Technology, S.P.P.U.",
      address:"Pune, Maharashtra, India",
      year:"2018 - 2022",
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Project Intern",
      company_name: "RobIN Automotives",
      date: "Sep 2021 - Jun 2022",
      details: [
        "Developed an Industry 4.0 SaaS portal.",
        "Responsible for creating an end-to-end website for customers as well as for the EV industry-related entities such as service centers, factories, workers, outlets, etc.",
       "Technologies used: HTML, CSS, ReactJS, Material UI, NodeJS, ExpressJS, Mongoose, JWT, MongoDB Atlas, Heroku",
      ],
    },
  ];
  
  const portfolio = [
    {
      name: "Sentiment Analysis of Customers using Machine Learning",
      description:
      `Collaborated in a four-person team to develop a robust machine learning model aimed at analyzing and classifying customer reviews 
      using the COCO-2017 dataset. This project focused on leveraging Natural Language Processing (NLP) techniques to preprocess textual 
      data and employed algorithms such as Logistic Regression, Linear Support Vector Classification, and Bernoulli Naïve Bayes for training 
      and optimization. The goal was to enhance understanding of customer sentiment in a dynamic industrial context, aiming to improve operational 
      strategies and customer satisfaction through insightful feedback analysis.`,
      tech:``,
    },
    {
      name: "Rain Prediction using Machine Learning",
      description:
      `As part of a collaborative trio, we developed a robust machine learning model to predict rainfall. Our approach involved preprocessing 
      diverse meteorological data and utilizing Logistic Regression, Random Forest, and Gradient Boosting algorithms to address class imbalances 
      and achieve accuracies between 78% and 86%. Our goal was to enhance weather forecasting accuracy and provide actionable insights for 
      weather-sensitive sectors. Future work includes refining models, adding relevant features, and exploring advanced techniques for even 
      stronger predictions.`,
      tech:``,
    },
    {
      name: "Android app connecting farmers with customers",
      description:
      `Collaborated in a four-person team to design and code a mobile 
      software service connecting farmers directly with customers and transporters.`,
      tech:``,
      images: [WR1, WR2], 
    },
    {
      name: "Portfolio Website",
      description:
      "Developed a portfolio website using Three.js, Tailwind CSS, and Vite featuring custom self designed and modeled 3D models.",
      tech:``,
      images: [portfolio1, portfolio2, portfolio3], 
      },
  ];
  
  export { education, experiences, portfolio };
  