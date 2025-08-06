import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import './Home.css';

const HeroAndWealthSection = () => {
  return (
    <div className="relative">
      {/* === Hero Header Section === */}
      <div className="flex items-start justify-between px-6 md:px-12 py-1 bg-white relative z-10 pb-[15px] lg:pb-[15px]">
        {/* Left Content */}
        <div className="space-y-1 mt-20 w-full">
          {/* First Heading + Desktop Button */}
          <div className="flex gap-[10px] flex-wrap items-center justify-center md:justify-normal">
          <h1 className="text-[31px] sm:text-[85px] font-khyay md:pl-24" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>
              EMPOWER YOUR
            </h1>

            <button className="hidden md:flex border border-black rounded-full overflow-visible text-sm font-medium bg-white shadow-md hover:shadow-lg transition-all duration-300 z-20 relative items-center gap-[12px] px-[12px] sm:px-[20px] md:px-[30px] md:pr-[10px] py-[8px]">
              <span className="flex items-center text-Montserrat">Get Started</span>
              <span className="px-[16px] py-[4px] bg-black text-white flex items-center justify-center rounded-full">
                <ArrowUpRight size={26} />
              </span>
            </button>
          </div>

          {/* Avatar Row and Second Heading */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6 pl-0 md:pl-24">
            {/* Profile Avatars (Desktop Only) */}
            <div className="hidden md:flex gap-1">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/85.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="w-8 h-8 rounded-full border-2 border-white shadow"
                />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-white p-[2px]">
                <img src="/images/money.jpg" alt="money" className="rounded-full" />
              </div>
            </div>

            {/* Second Heading */}
            <h1 className="text-[27px]  sm:text-[85px]  mb-6 " style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>
              FINANCIAL JOURNEY
            </h1>
          </div>

          {/* Avatars + Button (Mobile Only) */}
          <div className="flex gap-4 items-center justify-center md:hidden">
            <div className="flex gap-1">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/85.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="w-8 h-8 rounded-full border-2 border-white shadow"
                />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-white p-[2px]">
                <img src="/images/money.jpg" alt="money" className="rounded-full" />
              </div>
            </div>

            <button className="flex border border-black rounded-full overflow-visible text-[10px]  bg-white shadow-md hover:shadow-lg transition-all duration-300 z-20 relative items-center gap-[8px]  py-[2px] pl-1">
              <span className="flex items-center">Get Started</span>
              <span className="px-[16px] py-[4px] bg-black text-white flex items-center justify-center rounded-full">
                <ArrowUpRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* === Wealth Builder Section === */}
      <div className="bg-gray-900  flex justify-between z-10 mt-10 relative">
        {/* === Background Image Positioned === */}
        <div className="absolute z-30 inset-0 top-[-60px] lg:top-[-100px] 2xl:top-[-130px] right-0 left-auto flex justify-end pointer-events-none w-[250px] h-[200px] sm:w-[420px] sm:h-[250px] lg:h-[539px] lg:w-[880px] ">
          <img
            className="h-full w-full"
            src="/images/Simple-Letter.png"
            alt="background"
          />
        </div>

        <div className="w-full pt-[80px]">
          <div className="relative flex flex-wrap items-center justify-between sm:pt-[50px]">
            {/* Left Section - Stats */}
            <div className="text-white pl-[20px] sm:pl-28 pt-16 z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1 ">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                ))}
                <Star className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300 ml-2">
                  4.8 (1k+ Review)
                </span>
              </div>

              {/* Stats */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-[40px] sm:text-[60px] md:text-[85px]" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>120</span>
                  <span className="text-[40px] sm:text-[60px] md:text-[85px] text-blue-400" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>K+</span>
                </div>
                <p className="text-gray-300 text-[15px]  mt-2" style={{ fontFamily: "font-family: 'Montserrat" }}>
                  Satisfied Customers
                </p>
              </div>

              {/* Description */}
              <div className="text-gray-400 text-[15px] max-w-xs leading-relaxed" style={{ fontFamily: "font-family: 'Montserrat" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </div>

            {/* Rotating Logo with Circular Text */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center  sm:mt-0">
              <img
                src="/images/Vector 2.png"
                alt="Logo"
                className="w-10 h-10 z-10"
              />
              <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -20, 0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"
                  />
                </defs>
                <text fill="white" fontSize="4" fontWeight="bold" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    WEALTH BUILDERS • WEALTH BUILDERS • WEALTH BUILDERS •
                    <animate
                      attributeName="startOffset"
                      from="0%" to="100%"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAndWealthSection;
