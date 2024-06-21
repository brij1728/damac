import { Items } from '../../../data';
import React from 'react';
import { Slider } from '../ui';

export const SlideList = () => {
  return (
    <div className="bg-secondary-400 w-full">
      <div className="px-4 py-8 flex w-full  items-center justify-center gap-6 mx-auto sm:px-8 lg:w-10/12">
        {Items.map((item, index) => (
          <div key={index} className="flex-1 min-w-[200px] max-w-[300px] px-2">
            <Slider
              image={item.image}
              title={item.title}
              heading={item.heading}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
