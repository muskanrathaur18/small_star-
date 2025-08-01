import React, { useEffect, useRef } from 'react';

const BrandCollaborationSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Clone content for seamless scroll
    swiper.innerHTML += swiper.innerHTML;

    let scrollAmount = 0;

    const autoScroll = () => {
      if (swiper.scrollLeft >= swiper.scrollWidth / 2) {
        swiper.scrollLeft = 0; // Reset to beginning
      } else {
        swiper.scrollLeft += 1; // Smooth scroll
      }
    };

    const interval = setInterval(autoScroll, 20); // 20ms for smoother effect

    return () => clearInterval(interval);
  }, []);

  // Brand logo component
  const BrandLogo = ({ imageSrc, brandName = "BRAND" }) => (
    <div className="flex-shrink-0 w-32 h-32 mx-8 flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border-2 border-gray-400 flex items-center justify-center relative overflow-hidden bg-white">
        <img
          src={imageSrc}
          alt={brandName}
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute inset-0 rounded-full border border-gray-500 opacity-50"></div>
      </div>
    </div>
  );

  const brands = [
    { name: "Brand A", image: "/images/Brand/2.png" },
    { name: "Brand B", image: "/images/Brand/3.png" },
    { name: "Brand C", image: "/images/Brand/biba.png" },
    { name: "Brand D", image: "/images/Brand/big basket.png" },
    { name: "Brand E", image: "/images/Brand/dhl.png" },
    { name: "Brand F", image: "/images/Brand/nukaa.png" },
    { name: "Brand G", image: "/images/Brand/rbs.png" },
    { name: "Brand H", image: "/images/Brand/phillips.png" },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-xl font-medium tracking-wider">
          BRANDS WE HAVE COLLABORATED WITH
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={swiperRef}
          className="flex items-center overflow-x-hidden whitespace-nowrap scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {brands.map((brand, index) => (
            <BrandLogo key={index} brandName={brand.name} imageSrc={brand.image} />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default BrandCollaborationSwiper;
