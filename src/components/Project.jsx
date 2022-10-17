import React from 'react';
import { useInView } from 'react-intersection-observer';

import Button from './Button';

const Project = ({ project, index }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <li
      ref={ref}
      className={` mb-14 ${
        index % 2 === 0 ? 'md:-ml-[8rem]' : 'md:ml-[8rem]'
      } opacity-0 ${inView ? 'animate-fade-in' : ''} `}>
      <div
        className={`p-container p-6 flex ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        } flex-col-reverse items-center mx-3`}>
        <div
          className={`${
            index % 2 === 0 ? 'md:mr-10 ' : ''
          } mr-0 max-w-[400px]`}>
          <h2 className=' sub-heading text-secondary mb-3'>{project.title}</h2>
          <p className=' paragraph text-secondary_d mb-3'>{project.desc}</p>
          <div className=' flex justify-start flex-wrap mb-6 '>
            {project.techStacks.map((tech, index) => (
              <img
                key={`tech${index}`}
                src={tech}
                alt={`tech${index}`}
                className=' max-h-[40px] mr-2'
              />
            ))}
          </div>
          <Button link={project.link} />
        </div>
        <div className={`md:mb-0 mb-6 ${index % 2 === 1 ? 'md:mr-10' : ''}`}>
          <img
            src={project.poster}
            alt='Kitsu.io Clone'
            className=' max-w-[500px] h-auto w-full rounded-[10px]'
          />
        </div>
      </div>
    </li>
  );
};

export default Project;
