import React from 'react';

import { sidebar } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav
      className=' w-full bg-primary flex items-center 
    justify-between md:px-[5.75rem] px-[2rem] py-1 fixed z-[20]'>
      <a href='#home'>
        <h3
          className=' font-poppins font-bold 
      text-[36px] leading-[54px] text-secondary uppercase 
      to-gradient cursor-pointer'>
          Mahnun.
        </h3>
      </a>
      <ul className=' md:flex hidden'>
        {navLinks.map((link, index) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>
              <h6
                className={`nav-text text-secondary ${
                  index === navLinks.length - 1 ? '' : 'mr-10'
                }`}>
                {link.title}
              </h6>
            </a>
          </li>
        ))}
        {/* <li>
          <h6 className=' nav-text text-secondary mr-10'>About</h6>
        </li>
        <li>
          <h6 className=' nav-text text-secondary'>Projects</h6>
        </li> */}
      </ul>
      <div className=' md:hidden flex'>
        <img src={sidebar} alt='sidebar' className=' h-[30px] ' />
      </div>
    </nav>
  );
};

export default Navbar;
