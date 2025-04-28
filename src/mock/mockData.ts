export interface CarouselItem {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
}

export const mockData = {
  carousel: [
    {
      desktopSrc: "/images/banner1_desktop.png",
      mobileSrc: "/images/banner1_mobile.png",
      alt: "banner1",
      desktopWidth: 1920,
      desktopHeight: 600,
      mobileWidth: 768,
      mobileHeight: 400,
    },
    {
      desktopSrc: "/images/banner2_desktop.png",
      mobileSrc: "/images/banner2_mobile.png",
      alt: "banner2",
      desktopWidth: 1920,
      desktopHeight: 600,
      mobileWidth: 768,
      mobileHeight: 400,
    },
  ],
  slider: [
    {
      desktopSrc: "/images/slider1.png",
      mobileSrc: "/images/slider1-mobile.png",
      alt: "slide",
      desktopWidth: 1920,
      desktopHeight: 600,
      mobileWidth: 768,
      mobileHeight: 400,
    },
  ],
};
