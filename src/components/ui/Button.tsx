import React from 'react';

interface ButtonProps {
  text: string;
  classNames?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, classNames = '' }) => {
  return (
    <button
      className={`rounded-md border-2 border-primary-100 px-11 py-3 font-poppins text-[13px] font-bold text-primary-100 uppercase ${classNames}`}
    >
      {text}
    </button>
  );
};
