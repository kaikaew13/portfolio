import React, { useState } from 'react';

import { sidebar } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  if (openSidebar) {
    console.log('yes');
  }

  return (
    <React.Fragment>
      <nav
        className=' w-full bg-primary flex items-center
    justify-between md:px-[5.75rem] px-[2rem] py-1 fixed z-20'>
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
        </ul>
        <div className=' md:hidden flex cursor-pointer'>
          <img
            src={sidebar}
            alt='sidebar'
            className=' h-[30px] '
            onClick={() => setOpenSidebar((prev) => !prev)}
          />
        </div>
      </nav>
      <ul
        className={` ${
          openSidebar ? 'flex' : 'hidden'
        } flex-col fixed right-0 h-full w-[40%] bg-primary z-30 
        items-center pt-40 sidebar`}>
        <li>
          <h6 className={`nav-text text-secondary mb-6`}>About</h6>
        </li>
        <li>
          <h6 className={`nav-text text-secondary mb-6`}>Projects</h6>
        </li>
      </ul>
      <div
        className={` ${
          openSidebar ? 'block' : 'hidden'
        } fixed w-full h-full z-[25] bg-opacity-60 bg-black`}
        onClick={() => setOpenSidebar((prev) => !prev)}></div>
    </React.Fragment>
  );
};

export default Navbar;
