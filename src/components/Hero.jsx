import React from 'react';

import { hero_bg, hero_bg_phone } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <section id='hero' className='w-full h-full'>
      <img
        src={hero_bg}
        alt='background_hero'
        className=' absolute w-full z-0 sm:block hidden '
      />
      <img
        src={hero_bg_phone}
        alt='background_hero'
        className=' absolute w-full z-0 sm:hidden block brightness-75'
      />

      <div
        className=' z-10 relative lg:mx-[16.5rem] 
      ss:mx-[10rem] mx-[2rem] py-[13%]'>
        <h2
          className=' font-poppins font-bold text-[48px] 
        leading-[72px] text-secondary ss:mx-0 mx-auto
        ss:text-start text-center w-[228px] opacity-0 animation-delay-1000 animate-fade-in'>
          Hello, I'm
        </h2>
        <h1
          className=' font-poppins font-bold sm:text-[76px] text-[65px] 
        leading-[114px] text-gradient uppercase w-fit ss:mx-0 mx-auto
        ss:text-start text-center opacity-0 animation-delay-1500 animate-fade-in'>
          Mahnun.
        </h1>
        <h3
          className=' font-poppins font-bold ss:text-[23px] text-[20px] mb-6
        leading-[48px] text-secondary shadow-sm ss:w-[425px] ss:max-w-[425px]
        ss:text-start text-center mx-0 opacity-0 animation-delay-2000 animate-fade-in'>
          A Software Engineering student looking for an internship.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
