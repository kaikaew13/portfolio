import React from 'react';

import { footer_bg } from '../assets';
import { contacts } from '../constants';

const Footer = () => {
  return (
    <section id='footer' className=' w-full h-full relative'>
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
          {contacts.map((contact, index) => (
            <a
              key={contact.id}
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src={contact.icon}
                alt={contact.id}
                className={`w-[40px] h-[40px] ${
                  index === contacts.length - 1 ? '' : 'mr-10'
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
