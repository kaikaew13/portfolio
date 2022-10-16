import React from 'react';

import Button from './Button';
import { react, node, mongo, express, kitsuio } from '../assets';

const Projects = () => {
  return (
    <section className=' w-full relative overflow-hidden'>
      <div
        className=' orange-gradient w-[1350px] h-[1350px]
      absolute z-0 md:-left-[55%] sm:-left-[80%] xs:-left-[100%] top-64'></div>
      <div className=' w-full relative z-10 pt-20'>
        <div
          className='text-gradient heading uppercase text-center 
      mb-6  w-fit mx-auto'>
          Projects
        </div>

        <ul className=' flex flex-col items-center'>
          <li className=' mb-14 md:-ml-[8rem]'>
            <div className=' p-container p-6 flex md:flex-row flex-col-reverse items-center mx-3'>
              <div className=' md:mr-4 mr-0 max-w-[400px]'>
                <h2 className=' sub-heading text-secondary mb-3'>
                  Kitsuo.io Clone
                </h2>
                <p className=' paragraph text-secondary_d mb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque id ex non quam semper dictum. In libero massa, tempor
                  quis urna et, imperdiet ornare metus. Praesent vitae sagittis
                  dui, at rhoncus turpis. Vestibulum ac diam sit amet lorem
                  tempor ultrices. Nam vel tortor quis leo pharetra laoreet.
                </p>
                <div className=' flex justify-start flex-wrap mb-6 '>
                  <img src={mongo} alt='mongo' className=' max-h-[40px] mr-1' />
                  <img
                    src={express}
                    alt='express'
                    className=' max-h-[40px] mr-1'
                  />
                  <img src={react} alt='react' className=' max-h-[40px] mr-1' />
                  <img src={node} alt='node' className=' max-h-[40px] mr-1' />
                </div>
                <Button />
              </div>
              <div className=' md:mb-0 mb-6'>
                <img
                  src={kitsuio}
                  alt='Kitsu.io Clone'
                  className=' max-w-[500px] rounded-[10px]'
                />
              </div>
            </div>
          </li>
          <li className=' mb-14 md:ml-[8rem]'>
            <div className=' p-container p-6 flex md:flex-row-reverse flex-col-reverse items-center mx-3'>
              <div className=' max-w-[400px]'>
                <h2 className=' sub-heading text-secondary mb-3'>
                  Kitsuo.io Clone
                </h2>
                <p className=' paragraph text-secondary_d mb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque id ex non quam semper dictum. In libero massa, tempor
                  quis urna et, imperdiet ornare metus. Praesent vitae sagittis
                  dui, at rhoncus turpis. Vestibulum ac diam sit amet lorem
                  tempor ultrices. Nam vel tortor quis leo pharetra laoreet.
                </p>
                <div className=' flex justify-start flex-wrap mb-6 '>
                  <img src={mongo} alt='mongo' className=' max-h-[40px] mr-1' />
                  <img
                    src={express}
                    alt='express'
                    className=' max-h-[40px] mr-1'
                  />
                  <img src={react} alt='react' className=' max-h-[40px] mr-1' />
                  <img src={node} alt='node' className=' max-h-[40px] mr-1' />
                </div>
                <Button />
              </div>
              <div className=' md:mb-0 mb-6 md:mr-4 mr-0'>
                <img
                  src={kitsuio}
                  alt='Kitsu.io Clone'
                  className=' max-w-[500px] rounded-[10px]'
                />
              </div>
            </div>
          </li>
          <li className=' mb-14 md:-ml-[8rem]'>
            <div className=' p-container p-6 flex md:flex-row flex-col-reverse items-center mx-3'>
              <div className=' mr-4 max-w-[400px]'>
                <h2 className=' sub-heading text-secondary mb-3'>
                  Kitsuo.io Clone
                </h2>
                <p className=' paragraph text-secondary_d mb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque id ex non quam semper dictum. In libero massa, tempor
                  quis urna et, imperdiet ornare metus. Praesent vitae sagittis
                  dui, at rhoncus turpis. Vestibulum ac diam sit amet lorem
                  tempor ultrices. Nam vel tortor quis leo pharetra laoreet.
                </p>
                <div className=' flex justify-start flex-wrap mb-6 '>
                  <img src={mongo} alt='mongo' className=' max-h-[40px] mr-1' />
                  <img
                    src={express}
                    alt='express'
                    className=' max-h-[40px] mr-1'
                  />
                  <img src={react} alt='react' className=' max-h-[40px] mr-1' />
                  <img src={node} alt='node' className=' max-h-[40px] mr-1' />
                </div>
                <Button />
              </div>
              <div className=' md:mb-0 mb-6'>
                <img
                  src={kitsuio}
                  alt='Kitsu.io Clone'
                  className=' max-w-[500px] rounded-[10px]'
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
