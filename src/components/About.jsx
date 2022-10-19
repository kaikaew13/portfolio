import React from 'react';
import { useInView } from 'react-intersection-observer';

import { blue_efx } from '../assets';
import { about } from '../constants';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      id='about'
      className=' w-full relative overflow-hidden pb-[15rem]'>
      <img
        src={blue_efx}
        alt='background_image'
        id='bg_image'
        className=' w-[975px] sm:h-[654px] h-[500px] absolute  z-0 sm:-left-[35%] -left-[50%]'
      />

      <img
        src={blue_efx}
        alt='background_image'
        id='bg_image'
        className=' w-[975px] h-[654px] absolute z-0 -right-[35%] 
        -top-10 md:block hidden'
      />

      <div className=' w-full relative z-10 pt-20'>
        <div
          className={`text-gradient heading uppercase text-center 
          mb-6  w-fit mx-auto opacity-0 ${inView ? ' animate-fade-in' : ''}`}>
          About Me
        </div>
        {about.map((paragraph, index) => (
          <div
            key={index}
            className={`text-secondary paragraph mx-auto ss:max-w-[460px] 
         max-w-[300px]  text-center opacity-0 animation-delay-500
         ${inView ? ' animate-fade-in' : ''}
         ${index === about.length - 1 ? '' : 'mb-6'}`}>
            {paragraph}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
