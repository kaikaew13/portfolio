import React from 'react';

const Button = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <button
        type='button'
        className=' paragraph text-secondary rounded-[10px] 
      h-[40px] w-[116px] border border-secondary text-center py-auto'>
        Learn More
      </button>
    </a>
  );
};

export default Button;
