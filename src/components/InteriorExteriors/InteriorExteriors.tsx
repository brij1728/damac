'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '../ui';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';

export const InteriorExteriors = () => {
  const [showInteriors, setShowInteriors] = useState(false);

  const settings = {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: false, // Disable navigation on larger screens
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 w-full mx-auto lg:w-10/12">
      <div className="flex justify-end gap-2 w-full my-5">
        <Button
          text="Exteriors"
          classNames={`${
            !showInteriors
              ? 'text-secondary-300 bg-primary-200 border-secondary-300'
              : 'text-primary-200 border-primary-200 border-[0.5px]'
          }`}
          onClick={() => setShowInteriors(false)}
        />
        <Button
          text="Interiors"
          classNames={`${
            showInteriors
              ? 'text-secondary-300 bg-primary-200 border-secondary-300'
              : 'text-primary-200 border-primary-200 border-[0.5px]'
          }`}
          onClick={() => setShowInteriors(true)}
        />
      </div>
      <div className="w-full">
        {!showInteriors ? (
          <div className="mb-4 w-full flex justify-center">
            <Image
              src="/exteriors.png"
              alt="Exterior"
              width={1120}
              height={500}
              layout="responsive"
            />
          </div>
        ) : (
          <div className="relative w-full">
            <Swiper {...settings} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>
                <Image
                  src="/interiors1.jpg"
                  alt="Interior1"
                  width={265}
                  height={170}
                  className="object-cover"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/interiors2.jpg"
                  alt="Interior2"
                  width={265}
                  height={170}
                  className="object-cover"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/interiors3.jpg"
                  alt="Interior3"
                  width={265}
                  height={170}
                  className="object-cover"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/interiors4.jpg"
                  alt="Interior4"
                  width={265}
                  height={170}
                  className="object-cover"
                  layout="responsive"
                />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white text-primary-200 rounded-full shadow-md cursor-pointer">
              <FaArrowLeft className="text-primary-200" />
            </div>
            <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white text-primary-200 rounded-full shadow-md cursor-pointer">
              <FaArrowRight className="text-primary-200" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
