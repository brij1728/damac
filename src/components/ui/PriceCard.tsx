import React from 'react';

export const PriceCard = () => {
  return (
    <div className="backdrop-blur-4xl flex flex-col items-start justify-center gap-2 rounded bg-primary-400/65 px-8 py-4 font-oswald">
      <div className="text-secondary-300">
        <p className="text-[13px] uppercase">Pricing starting from</p>
        <p className="text-4xl font-medium">$ 425,000</p>
        <p className="text-lg font-normal">AED 1.3 Million</p>
        <button className="mt-4 rounded bg-primary-100 px-10 py-3 text-[13px] font-bold uppercase text-white">
          Get a presentation
        </button>
      </div>
      <footer className="pt-5">
        <p className="font-poppins text-[13px] text-primary-500">
          Get an Expert’s Presentation of Real <br />
          Estate in Dubai for Life and investment
        </p>
      </footer>
    </div>
  );
};
