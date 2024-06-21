import { Header } from '../Header';
import Image from 'next/image';
import { PriceCard } from '../ui';
import React from 'react';
import { SlideList } from '../SlideList';

export const Hero = () => {
  return (
    <>
      <div className="h:full relative flex h-screen w-full flex-col pb-10 pl-4 pr-6 sm:max-h-[700px]">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          objectFit="cover"
          className="absolute inset-0 z-[-1]"
        />
        <Header />
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between">
          <div>
            <p className="font-oswald text-[37px] font-medium uppercase text-secondary-300 sm:text-[44px]">
              Harbour Lights <br />
              de<span className="text-primary-100"> GRESOGONO</span>
            </p>
            <p className="mt-4 font-poppins text-[14px] font-bold text-secondary-300 sm:text-[25px]">
              1, 2 & 3 Bedrooms Seaside Apartments <br />
              in Dubai Maritime City
            </p>
            <div className="mt-10 flex flex-col gap-4 font-poppins text-[14px] text-secondary-100">
              <p className="max-w-sm border-l-4 border-primary-100 bg-black/25 p-2">
                Rental Returns of{' '}
                <span className="text-base font-bold">UPTO 11%**</span>
              </p>
              <p className="max-w-sm border-l-4 border-primary-100 bg-black/25 p-2">
                Capital Appreciation of{' '}
                <span className="text-base font-bold">UPTO 32%**</span>
              </p>
            </div>
          </div>
          <PriceCard />
        </div>
      </div>
      <SlideList />
    </>
  );
};
