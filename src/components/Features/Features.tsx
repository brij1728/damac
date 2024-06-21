import { Amenities } from '../../../data';
import { AmenitiesCard } from '../ui';
import React from 'react';

export const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full mx-auto lg:w-10/12">
      <div className="flex flex-col text-primary-300 justify-center items-center text-center">
        <div className="uppercase font-oswald text-2xl sm:text-3xl leading-none decoration-0 font-100 tracking-widest">
          <p>Harbour</p>
          <p>Lights</p>
        </div>
        <p className="font-poppins text-[8px] leading-none mt-1">
          de GRISOGONO
        </p>
        <p className="uppercase text-[6px] leading-none">GENEVE</p>
      </div>
      <p className="uppercase font-oswald text-3xl sm:text-4xl font-normal p-4 text-primary-200">
        Features & Amenities
      </p>
      <div className="text-secondary-500 font-poppins text-base font-normal flex flex-col justify-center items-center text-center">
        <p>
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront
        </p>
        <p>
          lifestyle. Its maritime-inspired amenities provide an unmatched
          seaside experience, offering a
        </p>
        <p>life of tranquility and bliss</p>.
      </div>
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 justify-center w-full">
        {Amenities.map((item, index) => (
          <AmenitiesCard key={index} image={item.image} title={item.title} />
        ))}
      </div>
      <div className="pt-6 w-full flex justify-end">
        <p className="text-secondary-600 text-xs">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
      </div>
    </div>
  );
};
