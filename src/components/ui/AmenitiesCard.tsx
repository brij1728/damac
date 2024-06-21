import Image from 'next/image';
import React from 'react';

interface AmenitiesCardProps {
  image: string;
  title: string[];
}

export const AmenitiesCard: React.FC<AmenitiesCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-lg p-4 items-center justify-center gap-2 rounded-xl w-full">
      <div className="w-full flex justify-center items-center">
        <Image
          src={image}
          alt={title.join(' ')}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="font-semibold text-sm font-poppins text-primary-200 text-center w-full">
        {title.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};
