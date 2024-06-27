import { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Hero, Portfolio, About, Navbar, Footer } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10 md:mt-0 mt-[-100px] md:mb-0 mb-[30px]'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="about" className='relative z-30 bg-primary mt-[-2px]'>
            <About />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            <Portfolio />
          </div>
          <div id="contact" className='relative z-40 bg-primary mt-[-100px]'>
            <Contact scrollContainer={wrapperRef} />
          </div>
          <div id="footer" className='relative z-40 bg-primary mt-[-2px]'>
            <Footer scrollContainer={wrapperRef} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
