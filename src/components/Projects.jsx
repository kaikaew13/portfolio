import React from 'react';
import { useInView } from 'react-intersection-observer';

import Project from './Project';
import { projects } from '../constants';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      id='projects'
      className=' w-full relative overflow-hidden'>
      <div
        className=' orange-gradient w-[1350px] h-[1350px]
      absolute z-[5] md:-left-[55%] sm:-left-[80%] xs:-left-[100%] top-64'></div>
      <div className=' w-full relative z-10 pt-20'>
        <div
          className={`text-gradient heading uppercase text-center 
          mb-6  w-fit mx-auto opacity-0 ${inView ? 'animate-fade-in' : ''}`}>
          Projects
        </div>

        <ul className=' flex flex-col items-center'>
          {projects.map((project, index) => (
            <Project key={project.id} index={index} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
