import { Items } from '../../../data';
import React from 'react';
import { Slider } from '../ui';

export const SlideList = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-10 bg-secondary-400 sm:gap-20">
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
