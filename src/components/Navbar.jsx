import React from 'react';

const Navbar = () => {
  return (
    <nav className=' w-full bg-primary flex items-center justify-between px-[5.75rem] py-1'>
      <h3
        className=' font-poppins font-bold 
      text-[36px] leading-[54px] text-secondary '>
        MAHNUN.
      </h3>
      <ul className=' flex'>
        <li>
          <h6 className=' nav-text text-secondary mr-10'>About</h6>
        </li>
        <li>
          <h6 className=' nav-text text-secondary'>Projects</h6>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
