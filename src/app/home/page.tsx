'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import { mockData } from '@/mock/mockData';
import CarouselCustom from '../../shared/components/Carousel';
import CardItem from '../../shared/components/CardItem';
import {TestService} from "@/apis/test/testService";

const Content: React.FC = () => {
    // State for managing the selected option in CardItem
    const [selectedOption, setSelectedOption] = useState<string>('Hộp');

    useEffect(() => {
        let resp = new TestService().getTest();
        alert(process.env.VITE_API_BASE_URL)
    }, []);
    // Validate carousel data
    if (!mockData?.carousel || !Array.isArray(mockData.carousel)) {
        return <div>Error: Carousel data not available</div>;
    }

    // Validate slider data
    if (!mockData?.slider || !Array.isArray(mockData.slider)) {
        return <div>Error: Slider data not available</div>;
    }

    const carouselItems = [
        ...mockData.carousel,
        {
            desktopSrc: mockData.carousel[0]?.desktopSrc || '/images/404.png',
            mobileSrc: mockData.carousel[0]?.mobileSrc || '/images/404.png',
            alt: 'image1',
            desktopWidth: 960,
            desktopHeight: 300,
            mobileWidth: 384,
            mobileHeight: 200,
        },
        {
            desktopSrc: mockData.carousel[1]?.desktopSrc || '/images/404.png',
            mobileSrc: mockData.carousel[1]?.mobileSrc || '/images/404.png',
            alt: 'image2',
            desktopWidth: 960,
            desktopHeight: 300,
            mobileWidth: 384,
            mobileHeight: 200,
        },
    ];

    const sliderItem = [
        ...mockData.slider,
        {
            desktopSrc: mockData.slider[0]?.desktopSrc || '/images/404.png',
            mobileSrc: mockData.slider[0]?.mobileSrc || '/images/404.png',
            alt: 'image1',
            desktopWidth: 960,
            desktopHeight: 300,
            mobileWidth: 384,
            mobileHeight: 200,
        },
        {
            desktopSrc: mockData.slider[1]?.desktopSrc || '/images/404.png',
            mobileSrc: mockData.slider[1]?.mobileSrc || '/images/404.png',
            alt: 'image2',
            desktopWidth: 960,
            desktopHeight: 300,
            mobileWidth: 384,
            mobileHeight: 200,
        },
    ];

    const mockProduct = {
        imageUrl: '/images/slider3.png',
        discount: '-19.000đ',
        title: 'Hỗn dịch uống men vi sinh Enterogermina Gut Defense Sanofi tăng...',
        options: ['Hộp', 'Vỉ', 'Ống'],
        initialOption: 'Hộp',
        price: '165.000đ / Hộp',
        originalPrice: '184.000đ',
        subText: 'Hộp 2 Vỉ x 10 Ống',
        buttonText: 'Chọn mua',
    };

    // Handler for option change
    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    // Handler for button click
    const handleButtonClick = () => {
        alert(`Added ${mockProduct.title} to cart! Option: ${selectedOption}`);
    };

    return (
        <>
            <CarouselCustom items={carouselItems} />
            <div className="max-w-5xl mx-auto relative justify-between mt-3">
                <div className="hidden md:grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                        <CarouselCustom items={sliderItem} />
                    </div>

                    <div className="flex flex-col gap-3">
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

                <div className='flex gap-2 mt-3'>
                    <div>
                        <CardItem
                            imageUrl={mockProduct.imageUrl}
                            discount={mockProduct.discount}
                            title={mockProduct.title}
                            options={mockProduct.options}
                            selectedOption={selectedOption}
                            onOptionChange={handleOptionChange}
                            price={mockProduct.price}
                            originalPrice={mockProduct.originalPrice}
                            subText={mockProduct.subText}
                            buttonText={mockProduct.buttonText}
                            onButtonClick={handleButtonClick}
                        />
                    </div>

                    <div>
                        <CardItem
                            imageUrl={mockProduct.imageUrl}
                            discount={mockProduct.discount}
                            title={mockProduct.title}
                            options={mockProduct.options}
                            selectedOption={selectedOption}
                            onOptionChange={handleOptionChange}
                            price={mockProduct.price}
                            originalPrice={mockProduct.originalPrice}
                            subText={mockProduct.subText}
                            buttonText={mockProduct.buttonText}
                            onButtonClick={handleButtonClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;