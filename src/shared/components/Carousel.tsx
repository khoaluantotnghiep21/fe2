import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

interface CarouselItem {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
}

interface CarouselCustomProps {
  items: CarouselItem[];
  desktopWidth?: number;
  desktopHeight?: number;
  mobileWidth?: number;
  mobileHeight?: number;
}

const CarouselCustom: React.FC<CarouselCustomProps> = ({
  items = [],
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
}) => {
  if (!items.length) {
    return <div>No items to display</div>;
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <Carousel arrows infinite={true} autoplay autoplaySpeed={5000}>
          {items.map((item: CarouselItem, index: number) => (
            <div key={index} className="w-full">
              <Image
                src={item.desktopSrc}
                alt={item.alt}
                width={desktopWidth ?? item.desktopWidth}
                height={desktopHeight ?? item.desktopHeight}
                sizes="(min-width: 768px) 100vw"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Carousel autoplay autoplaySpeed={3000}>
          {items.map((item: CarouselItem, index: number) => (
            <div key={index} className="w-full">
              <Image
                src={item.mobileSrc}
                alt={item.alt}
                width={mobileWidth ?? item.mobileWidth}
                height={mobileHeight ?? item.mobileHeight}
                sizes="(max-width: 767px) 100vw"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselCustom;