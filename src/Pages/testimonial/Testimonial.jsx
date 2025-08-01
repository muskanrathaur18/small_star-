import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Davis Koleman",
    position: "Company Owner",
    image: "/images/Rectangle.png",
    text: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. “",
  },
  {
    name: "Sophia Lee",
    position: "Financial Analyst",
    image: "/images/Rectangle-2.png",
    text: "“ Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. “",
  },
  {
    name: "Michael Smith",
    position: "CEO, FinCorp",
    image: "/images/Rectangle-1.png",
    text: "“ Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante. “",
  },
];

const Testimonial = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6 md:px-20">
      {/* Background Design */}
      <div className="absolute inset-0 bg-[url('/bg-puzzle.png')] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            What People Are Saying <br /> About Our Services
          </h2>
          <p className="text-gray-500 text-sm md:absolute md:right-20 md:top-20 max-w-xs">
            Navigating Your Finance Together Trusted Financial Resources and People
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 md:p-10 gap-6">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-70 h-80 object-cover rounded-md"
                />

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-2xl text-gray-800 italic mb-4">{item.text}</p>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.position}</p>
                </div>

                {/* Arrows */}
                <div className="flex gap-3 mt-4 md:mt-0">
                  <button className="custom-prev w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="custom-next w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
