import Image from 'next/image';
import React from 'react';

interface SliderProps {
  image: string;
  title: string;
  heading: string;
}

export const Slider: React.FC<SliderProps> = ({ image, title, heading }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-1 bg-secondary-400 p-8">
        <Image src={image} alt={title} width={50} height={50} />
        <p className="whitespace-nowrap font-poppins text-xs font-normal uppercase text-primary-200 sm:text-base">
          {title}
        </p>
        <h2 className="whitespace-nowrap font-oswald text-2xl font-medium uppercase text-primary-200 sm:text-3xl">
          {heading}
        </h2>
        <div className="mt-4 h-1 w-20 bg-primary-200/15"></div>
      </div>
    </div>
  );
};
