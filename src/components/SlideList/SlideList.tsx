import { Items } from '../../../data';
import React from 'react';
import { Slider } from '../ui';

export const SlideList = () => {
  return (
    <>
      <div className="px-814 bg-secondary-400 flex w-full items-center justify-center gap-6 sm:gap-16">
        {Items.map((item, index) => (
          <div key={index}>
            <Slider
              image={item.image}
              title={item.title}
              heading={item.heading}
            />
          </div>
        ))}
      </div>
    </>
  );
};
