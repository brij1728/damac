import { Header } from '../Header';
import Image from 'next/image';
import { PriceCard } from '../ui';
import React from 'react';

export const Hero = () => {
  return (
    <div className="relative flex h-screen w-full flex-col pl-4 pr-6">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />
      <Header />
      <div className="mt-6 flex sm:flex-row sm:justify-between">
        <div>
          <p className="font-oswald text-[44px] font-medium uppercase text-secondary-300">
            Harbour Lights <br />
            de<span className="text-primary-100"> GRESOGONO</span>
          </p>
          <p className="text mt-4 font-poppins text-[25px] font-bold text-secondary-300">
            1, 2 & 3 Bedrooms Seaside Apartments <br />
            in Dubai Maritime City
          </p>
        </div>
        <div>
          <PriceCard />
        </div>
      </div>
    </div>
  );
};
