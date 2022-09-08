import React from 'react';

interface BoxProps {
  text: string;
}

const Box = ({ text }: BoxProps) => {
  return <div className='box'>{text}</div>;
};

export default Box;
