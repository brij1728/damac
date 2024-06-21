import { Button } from '../ui';
import Image from 'next/image';
import React from 'react';

export const InteriorExteriors = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full mx-auto lg:w-10/12">
      <div className="flex justify-end gap-2 w-full my-5">
        <Button
          text="Exteriors"
          classNames="text-secondary-300 bg-primary-200 border-secondary-300"
        />
        <Button
          text="Interiors"
          classNames="text-primary-200 border-primary-200 border-[0.5px]"
        />
      </div>
      <div className="w-full ">
        <div className="mb-4 w-full flex justify-center">
          <Image
            src="/exteriors.png"
            alt="Exterior"
            width={1120}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="flex justify-center gap-1 sm:gap-4">
          <Image
            src="/interiors1.jpg"
            alt="Interior1"
            width={265}
            height={170}
            className="object-cover"
            layout="responsive"
          />
          <Image
            src="/interiors2.jpg"
            alt="Interior2"
            width={265}
            height={170}
            className="object-cover"
            layout="responsive"
          />
          <Image
            src="/interiors3.jpg"
            alt="Interior3"
            width={265}
            height={170}
            className="object-cover"
            layout="responsive"
          />
          <Image
            src="/interiors4.jpg"
            alt="Interior4"
            width={265}
            height={170}
            className="object-cover"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};
