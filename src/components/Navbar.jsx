import React, { useState } from 'react';

import { sidebar_btn, cancel_btn } from '../assets';
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
          {navLinks.map((link, index) =>
            link.id !== 'resume' ? (
              <li key={link.id}>
                <a href={link.link}>
                  <h6
                    className={`nav-text text-secondary ${
                      index === navLinks.length - 1 ? '' : 'mr-10'
                    }`}>
                    {link.title}
                  </h6>
                </a>
              </li>
            ) : (
              <li key={link.id}>
                <a href={link.link} target='_blank' rel='noopener noreferrer'>
                  <h6
                    className={`nav-text text-secondary ${
                      index === navLinks.length - 1 ? '' : 'mr-10'
                    }`}>
                    {link.title}
                  </h6>
                </a>
              </li>
            )
          )}
        </ul>
        <div className=' md:hidden flex cursor-pointer'>
          <img
            src={sidebar_btn}
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
        items-center pt-10 sidebar`}>
        <img
          src={cancel_btn}
          alt='cancel'
          className=' w-[30px] mb-32 cursor-pointer'
          onClick={() => setOpenSidebar((prev) => !prev)}
        />
        {navLinks.map((link) =>
          link.id !== 'resume' ? (
            <li key={link.id}>
              <a href={link.link}>
                <h6
                  className={`nav-text text-secondary mb-6`}
                  onClick={() => setOpenSidebar((prev) => !prev)}>
                  {link.title}
                </h6>
              </a>
            </li>
          ) : (
            <li key={link.id}>
              <a href={link.link} target='_blank' rel='noopener noreferrer'>
                <h6
                  className={`nav-text text-secondary mb-6`}
                  onClick={() => setOpenSidebar((prev) => !prev)}>
                  {link.title}
                </h6>
              </a>
            </li>
          )
        )}
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
