import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import './Home.css';

const HeroAndWealthSection = () => {
  return (
    <div className="relative">
      {/* === Hero Header Section === */}
      <div className="flex items-start justify-between px-6 md:px-12 py-2 bg-white relative z-10 pb-[20px] lg:pb-[60px]">
        {/* Left Content */}
        <div className="space-y-2 mt-20 w-full">
          {/* First Heading */}
          <div className="flex gap-[10px] flex-wrap md:mb-[20px] items-center justify-center md:justify-normal">
            <h1 className="text-[30px] sm:text-4xl md:text-6xl font-bold md:pl-24">EMPOWER YOUR</h1>
            {/* Get Started Button Positioned */}
            <button className="flex border border-black rounded-full overflow-visible text-sm font-medium bg-white shadow-md hover:shadow-lg transition-all duration-300 z-20 relative items-center gap-[12px] px-[12px] sm:px-[20px] md:px-[30px] md:pr-[10px] py-[8px] hidden md:flex">
              <span
                className="flex items-center"
              >
                Get Started
              </span>
              <span
                className="px-[16px] py-[4px] bg-black text-white flex items-center justify-center rounded-full"
                style={{
                }}
              >
                <ArrowUpRight size={26} />
              </span>
            </button>
          </div>

          {/* Avatar Row and Second Heading */}
          <div className="flex items-center gap-3 relative flex-wrap justify-center md:justify-normal">
            {/* Profile avatars */}
            <div className="hidden md:flex gap-1 pl-24">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user1"
                className="w-8 h-8 rounded-full border-2 border-white shadow"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user2"
                className="w-8 h-8 rounded-full border-2 border-white shadow"
              />
              <img
                src="https://randomuser.me/api/portraits/men/85.jpg"
                alt="user3"
                className="w-8 h-8 rounded-full border-2 border-white shadow"
              />
              <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-white p-[2px]">
                <img
                  src="/images/money.jpg"
                  alt="money"
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Second Heading */}
            <h1 className="text-[28px] sm:text-4xl md:text-6xl mb-4 font-bold">
              FINANCIAL JOURNEY
            </h1>
          </div>
          {/* Avatart Mobile View */}
          <div className="flex gap-4 items-center justify-center md:hidden">
            <div className="flex gap-1">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user1"
                className="small-icons rounded-full border-2 border-white shadow"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user2"
                className="small-icons rounded-full border-2 border-white shadow"
              />
              <img
                src="https://randomuser.me/api/portraits/men/85.jpg"
                alt="user3"
                className="small-icons rounded-full border-2 border-white shadow"
              />
              <div className="small-icons rounded-full border-2 border-blue-500 bg-white p-[2px]">
                <img
                  src="/images/money.jpg"
                  alt="money"
                  className="rounded-full"
                />
              </div>
            </div>
            <button className="flex border border-black rounded-full overflow-visible text-sm font-medium bg-white shadow-md hover:shadow-lg transition-all duration-300 z-20 relative items-center gap-[12px] px-[12px] sm:px-[20px] md:px-[30px] md:pr-[20px]x py-[8px]">
              <span
                className="flex items-center"
              >
                Get Started
              </span>
              <span
                className="px-[16px] py-[4px] bg-black text-white flex items-center justify-center rounded-full"
                style={{
                }}
              >
                <ArrowUpRight size={26} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* === Wealth Builder Section === */}
      <div className="bg-gray-900 pb-24 flex justify-between relative z-10 mt-10 relative">
        {/* === Background Image Positioned === */}
        <div className="absolute z-30 inset-0 top-[-60px] lg:top-[-100px] 2xl:top-[-180px] right-0 left-auto flex justify-end pointer-events-none w-[250px] h-[200px] sm:w-[400px] sm:h-[250px] lg:h-[400px] lg:w-[600px]">
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
              <div className="flex items-center gap-1 mb-6">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-blue-400 text-blue-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300 ml-2">
                  4.8 (1k+ Review)
                </span>
              </div>

              {/* Stats */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-bold">120</span>
                  <span className="text-4xl font-bold text-blue-400">K+</span>
                </div>
                <p className="text-gray-300 text-lg mt-2">
                  Satisfied Customers
                </p>
              </div>

              {/* Description */}
              <div className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </div>

            {/* Rotating Logo */}
            <div className="flex md:absolute md:right-36 md:top-48 justify-center md:justify-end w-full md:w-auto px-6 md:px-0 mt-6 md:mt-0">
              <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] animate-[spin_8s_linear_infinite]">
                <img
                  className="h-full w-full object-contain rounded-full"
                  src="/images/Logo-2.png"
                  alt="Rotating Company Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAndWealthSection;
