import React from 'react';
import { useInView } from 'react-intersection-observer';

import Experience from './Experience';
import { experiences } from '../constants';

const Experiences = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      id='experiences'
      className=' w-full relative overflow-hidden pb-[15rem]'>
      <div className=' w-full relative z-10 pt-20'>
        <div
          className={`text-gradient heading uppercase text-center 
          mb-6  w-fit mx-auto opacity-0 ${inView ? 'animate-fade-in' : ''}`}>
          Experiences
        </div>

        <ul className='md:mx-[8rem] flex flex-wrap justify-center'>
          {experiences.map((experience, index) => (
            <Experience
              key={experience.id}
              index={index}
              experience={experience}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
