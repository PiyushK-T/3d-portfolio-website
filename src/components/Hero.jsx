import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Bounded from "./Bounded.tsx"
import FoxCanvas from "./Fox.jsx";

// Function to split a name into individual letters
const renderLetters = (name, key) => {
  if (!name) return null;
  return name.split("").map((letter, index) => (
    <span
      key={index}
      className={`name-animation ${key}-letter-${index} inline-block opacity-0`}
    >
      {letter}
    </span>
  ));
};

const Hero = ({scrollContainer }) => {
  const firstName = "Piyush";
  const lastName = "Kataktalware";

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1, 0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, [scrollContainer]);

  return (
    <Bounded className="md:h-screen h-screen flex items-center justify-center" ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <FoxCanvas className="" scrollContainer={scrollContainer} />
        <div className="col-start-1 md:row-start-1 " data-speed=".2">
          <h1
            className="mb-8 text-[clamp(1rem,9vmin,9rem)] font-extrabold leading-none tracking-tighter"
            aria-label={`${firstName} ${lastName}`}
            style={{ whiteSpace: "nowrap" }}
          >
            <span className="block text-slate-300 ">
              {renderLetters(firstName, "firstName")}
              {/* {firstName} */}
            </span>
            <span className="-mt-[.1em] block text-slate-500 ">
              {renderLetters(lastName, "lastName")}
              {/* {lastName} */}
            </span>
          </h1>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
