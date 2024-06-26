import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Bounded from "./Bounded";

const Footer = () => {
  const name = "Piyush Devendra Kataktalware";
  
  return (
    <Bounded className="text-gray-600 bg-gray-800 py-4 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="name mb-4 md:mb-0">
          <span className="text-xl font-extrabold tracking-tighter text-gray-100">{name}</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/PiyushK-T" className="text-3xl md:text-[45px] sm:text-[30px] text-white hover:text-teal-300">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/piyush-devendra-kataktalware-2b681b221/" className="text-3xl md:text-[45px] sm:text-[30px] text-white hover:text-teal-300">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://www.instagram.com/piyush_kataktalware/" className="text-3xl md:text-[45px] sm:text-[30px] text-white hover:text-teal-300">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://x.com/piyush_talware" className="text-3xl md:text-[45px] sm:text-[30px] text-white hover:text-teal-300">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </Bounded>
  );
};

export default Footer;
