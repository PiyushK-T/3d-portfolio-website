import React from "react";
import Slider from "react-slick";
import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ name, description, tech, images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 my-10 md:my-20 items-center">
      {images && images.length > 0 && (
        <div className="relative w-full md:w-3/5">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${name}_image_${index}`}
                  className="w-full h-auto object-cover md:rounded-3xl border-2 border-white"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}

      <div className={`w-full ${images && images.length > 0 ? 'md:w-2/5' : 'md:w-full'} px-6 md:px-10 flex flex-col justify-center text-left`}>
        <h3 className="text-cyan-700 font-bold text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight">
          {name}
        </h3>
        <p className="mt-4 text-teal-400 font-semibold text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          {description}
        </p>
        <p className="mt-4 text-teal-400 font-semibold text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          {tech}
        </p>
      </div>
    </div>
  );
};

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const Portfolio = () => {
  return (
    <div className="text-center md:text-left md:px-6 lg:px-20 xl:px-40 overflow-hidden">
      <div>
        <h2 className={`${styles.sectionText}`} id="portfolio">
          Projects
        </h2>
      </div>

      <div className="mt-10 md:mt-20">
        {portfolio.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
