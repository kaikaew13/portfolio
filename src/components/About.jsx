import React from 'react';

import { blue_efx } from '../assets';
import { about } from '../constants';

const About = () => {
  return (
    <section className=' w-full relative overflow-hidden pb-[15rem]'>
      <img
        src={blue_efx}
        alt='background_image'
        className=' w-[975px] sm:h-[654px] h-[500px] absolute  z-0 sm:-left-[35%] -left-[50%]'
      />

      <img
        src={blue_efx}
        alt='background_image'
        className=' w-[975px] h-[654px] absolute z-0 -right-[35%] 
        -top-10 md:block hidden'
      />

      <div className=' w-full relative z-10 pt-20'>
        <div
          className='text-gradient heading uppercase text-center 
      mb-6  w-fit mx-auto'>
          About Me
        </div>
        <div className=' text-secondary paragraph mx-auto ss:max-w-[460px] max-w-[300px]  text-center'>
          {about}
        </div>
      </div>
    </section>
  );
};

export default About;
