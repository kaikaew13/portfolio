import React from 'react';

import { sidebar } from '../assets';

const Navbar = () => {
  return (
    <nav className=' w-full bg-primary flex items-center justify-between md:px-[5.75rem] px-[2rem] py-1'>
      <h3
        className=' font-poppins font-bold 
      text-[36px] leading-[54px] text-secondary uppercase'>
        Mahnun.
      </h3>
      <ul className=' md:flex hidden'>
        <li>
          <h6 className=' nav-text text-secondary mr-10'>About</h6>
        </li>
        <li>
          <h6 className=' nav-text text-secondary'>Projects</h6>
        </li>
      </ul>
      <div className=' md:hidden flex'>
        <img src={sidebar} alt='sidebar' className=' h-[30px] ' />
      </div>
    </nav>
  );
};

export default Navbar;
