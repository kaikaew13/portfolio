import React from 'react';

import { hero_bg, hero_bg_phone } from '../assets';

const Hero = () => {
  return (
    <section id='home' className='w-full h-full'>
      <img
        src={hero_bg}
        alt='background_image'
        className=' absolute w-full z-0 sm:block hidden'
      />
      <img
        src={hero_bg_phone}
        alt='background_image'
        className=' absolute w-full z-0 sm:hidden block'
      />

      <div className=' z-10 relative lg:mx-[16.5rem] ss:mx-[10rem] mx-[2rem] py-[13%]'>
        <h2
          className=' font-poppins font-bold text-[48px] 
        leading-[72px] text-secondary min-w-[228px] 
        ss:text-start text-center'>
          Hello, I'm
        </h2>
        <h1
          className=' font-poppins font-bold text-[76px] 
        leading-[114px] text-gradient uppercase min-w-[371px]
        ss:text-start text-center'>
          Mahnun.
        </h1>
        <h3
          className=' font-poppins font-bold ss:text-[32px] text-[28px] 
        leading-[48px] text-secondary ss:w-[425px] ss:max-w-[425px] ss:min-w-[425px]
        ss:text-start text-center mx-0'>
          A Software Engineering student at KMITL
        </h3>
      </div>
    </section>
  );
};

export default Hero;
