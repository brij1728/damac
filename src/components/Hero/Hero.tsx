import { Header } from '../Header';
import Image from 'next/image';
import React from 'react';

export const Hero = () => {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        sizes="100vw"
        width={1432}
        height={651}
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />
      <Header />
    </div>
  );
};
