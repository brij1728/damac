import React from 'react';

export const PriceCard = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8 rounded-[14px] bg-primary-400/10 px-8 pt-8 backdrop-blur">
      <div className="gap-3 text-secondary-300">
        <p className="font-poppins text-[13px] font-normal uppercase">
          Pricing starting from
        </p>
        <p className="font-oswald text-5xl font-medium">$ 425,000</p>
        <p className="font-oswald text-2xl font-normal">AED 1.3 Million</p>
      </div>
      <button className="rounded bg-primary-100 px-10 py-3 font-poppins text-[13px] font-bold uppercase text-white">
        Get a presentation
      </button>
      <div>
        <p className="font-poppins text-[13px] text-primary-500">
          Get an Expert’s Presentation of Real <br />
          Estate in Dubai for Life and investment
        </p>
      </div>
    </div>
  );
};
