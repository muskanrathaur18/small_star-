import React, { useEffect, useRef } from 'react';

const BrandCollaborationSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Duplicate content for seamless scrolling
    swiper.innerHTML += swiper.innerHTML;

    const autoScroll = () => {
      if (swiper.scrollLeft >= swiper.scrollWidth / 2) {
        swiper.scrollLeft = 0;
      } else {
        swiper.scrollLeft += 1;
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  const BrandLogo = ({ imageSrc, brandName }) => (
    <div className="flex-shrink-0 mx-6 flex items-center justify-center w-[80px] md:w-[120px]">
      <div className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full border-2 border-gray-400 flex items-center justify-center relative overflow-hidden bg-white">
        <img
          src={imageSrc}
          alt={brandName}
          className="w-full h-full object-contain p-2"
        />
        <div className="absolute inset-0 rounded-full border border-gray-500 opacity-50" />
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
      <div className="text-center mb-10 px-4">
        <h2 className="text-white text-xl md:text-2xl font-semibold tracking-widest Myanmar Khyay">
          BRANDS WE HAVE COLLABORATED WITH
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={swiperRef}
          className="flex items-center whitespace-nowrap overflow-x-hidden scroll-smooth"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {brands.map((brand, index) => (
            <BrandLogo
              key={`brand1-${index}`}
              brandName={brand.name}
              imageSrc={brand.image}
            />
          ))}

          {/* duplicate for seamless scroll */}
          {brands.map((brand, index) => (
            <BrandLogo
              key={`brand2-${index}`}
              brandName={brand.name}
              imageSrc={brand.image}
            />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default BrandCollaborationSwiper;
