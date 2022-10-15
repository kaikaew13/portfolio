import React from 'react';

import { hero_bg } from '../assets';

const Hero = () => {
  return (
    <section id='home' className=' flex flex-col'>
      <img src={hero_bg} alt='background_image' />
    </section>
  );
};

export default Hero;
