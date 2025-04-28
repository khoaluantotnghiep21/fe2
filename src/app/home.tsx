'use client';
import React from 'react';

import Image from 'next/image';
import { mockData } from '@/mock/mockData';
import CarouselCustom from './components/CarouselCustom';

const Content: React.FC = () => {
  if (!mockData?.carousel || !Array.isArray(mockData.carousel)) {
    return <div>Error: Carousel data not available</div>;
  }

  const carouselItems = [
    ...mockData.carousel,
    {
      desktopSrc: mockData.carousel[0]?.desktopSrc || '/images/fallback.png',
      mobileSrc: mockData.carousel[0]?.mobileSrc || '/images/fallback_mobile.png',
      alt: 'image1',
      desktopWidth: 960,
      desktopHeight: 300,
      mobileWidth: 384,
      mobileHeight: 200,
    },
    {
      desktopSrc: mockData.carousel[1]?.desktopSrc || '/images/fallback.png',
      mobileSrc: mockData.carousel[1]?.mobileSrc || '/images/fallback_mobile.png',
      alt: 'image2',
      desktopWidth: 960,
      desktopHeight: 300,
      mobileWidth: 384,
      mobileHeight: 200,
    },
  ];

  return (
    <div className="space-y-8">
      <CarouselCustom items={carouselItems} />


      {/* Desktop Layout 2 cột */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {/* Cột trái: 1 hình to */}
        <div className="col-span-2">
          <Image
            src="/images/bannerungthu.png"
            alt="Banner Ung Thu"
            width={960}
            height={600}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Cột phải: 2 hình nhỏ trên dưới */}
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <Image
              src="/images/bannerungthu.png"
              alt="Banner nhỏ 1"
              width={480}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/banneryte1.png"
              alt="Banner nhỏ 2"
              width={480}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Content;
