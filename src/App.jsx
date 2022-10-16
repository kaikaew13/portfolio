import React from 'react';

import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App h-full w-full bg-gradient m-0'>
      <div className=' w-full overflow-hidden justify-center'>
        <Navbar />
      </div>
      <div className='w-full overflow-hidden justify-center mt-[62px]'>
        <Hero />
      </div>
      <div className='w-full justify-center xs:my-[750px] ss:my-[1000px] sm:my-[5rem] md:my-[10rem] lg:my-[15rem] my-[30rem]'>
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
