import React from 'react';

import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App h-full w-full bg-gradient'>
      <div className=' w-full overflow-hidden justify-center'>
        <Navbar />
      </div>
      <div className='w-full overflow-hidden justify-center'>
        <Hero />
      </div>
      <div className='w-full justify-center'>
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
