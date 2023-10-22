import React from 'react';
import { useInView } from 'react-intersection-observer';

import Button from './Button';

const Experience = ({ experience, index }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <li
      ref={ref}
      className={`mb-14 opacity-0 ${inView ? 'animate-fade-in' : ''} `}>
      <div className={`p-container p-6 flex flex-col justify-between mx-3`}>
        <div className={`max-w-[400px]`}>
          <div className='flex justify-between items-baseline'>
            <h2 className='sub-heading text-secondary mb-3'>
              {experience.title}
            </h2>
            <p className='paragraph text-secondary_d mb-3'>
              {experience.timeline}
            </p>
          </div>
          <p className='paragraph text-secondary mb-3'>{experience.role}</p>
          <p className=' paragraph text-secondary_d mb-3'>{experience.desc}</p>
        </div>
        <div className=' flex justify-start flex-wrap mb-6 '>
          {experience.techStacks.map((tech, index) => (
            <img
              key={`tech${index}`}
              src={tech}
              alt={`tech${index}`}
              className=' max-h-[40px] mr-2'
            />
          ))}
        </div>
        <Button link={experience.link} />
      </div>
    </li>
  );
};

export default Experience;
