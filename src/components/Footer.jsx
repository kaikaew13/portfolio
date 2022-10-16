import React from 'react';

import { footer_bg, github_white, linkedin_white } from '../assets';

const Footer = () => {
  return (
    <section className=' w-full h-full relative'>
      <img
        src={footer_bg}
        alt='footer_background'
        className=' z-0 absolute  bottom-0 w-full block'
      />
      <div
        className='w-full flex sm:flex-row flex-col-reverse items-center relative z-10
        justify-between md:px-[5.75rem] px-[2rem] sm:pb-8 pb-4 mt-[10rem] '>
        <p className=' paragraph text-secondary font-bold'>
          © 2022 Mahnun Saratunti
        </p>
        <div className=' flex sm:mb-0 mb-6'>
          <img
            src={github_white}
            alt='github'
            className=' w-[40px] h-[40px] mr-10'
          />
          <img
            src={linkedin_white}
            alt='linkedin'
            className=' w-[40px] h-[40px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
