import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-8 pl-4 pr-6">
      <div>
        <Image src="/menu.png" alt="Damac" width={150} height={150} />
      </div>
      <div className="hidden lg:flex">
        <button className="rounded-md border-2 border-primary-100 px-11 py-3 font-poppins text-[13px] font-bold text-primary-100">
          ENQUIRE NOW
        </button>
      </div>
      <div className="lg:hidden">
        <FiMenu className="text-3xl text-secondary-300" />
      </div>
    </div>
  );
};
