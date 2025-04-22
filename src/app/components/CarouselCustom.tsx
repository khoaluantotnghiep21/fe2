import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const CarouselCustom: React.FC = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <Carousel autoplay autoplaySpeed={5000}>
          <div className="w-full">
            <Image
              src="/images/banner1_desktop.png"
              alt="banner1"
              width={1920}
              height={600}
              sizes="(min-width: 768px) 100vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/banner2_desktop.png"
              alt="banner2"
              width={1920}
              height={600}
              sizes="(min-width: 768px) 100vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Carousel autoplay autoplaySpeed={3000}>
          <div className="w-full">
            <Image
              src="/images/banner1_mobile.png"
              alt="banner1"
              width={768}
              height={400}
              sizes="(max-width: 767px) 100vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/banner2_mobile.png"
              alt="banner2"
              width={768}
              height={400}
              sizes="(max-width: 767px) 100vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselCustom;
