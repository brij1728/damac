import { Header } from '../Header';
import Image from 'next/image';
import { PriceCard } from '../ui';
import React from 'react';

export const Hero = () => {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />
      <Header />
      <div className="flex sm:flex-row">
        <div></div>
        <div>
          <PriceCard />
        </div>
      </div>
    </div>
  );
};
