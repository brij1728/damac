import { Button } from '../ui';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <div className="relative z-10 flex items-center justify-between py-8">
      <div>
        <Image src="/menu.png" alt="Damac" width={150} height={150} />
      </div>
      <div className="hidden lg:flex">
        <Button text="ENQUIRE NOW" />
      </div>
      <div className="lg:hidden">
        <FiMenu className="text-3xl text-secondary-300" />
      </div>
    </div>
  );
};
