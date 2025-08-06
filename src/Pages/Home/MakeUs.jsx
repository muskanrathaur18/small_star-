import React, { useState, useEffect } from 'react';
import { CheckCircle, Award } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = "", color = "text-blue-600", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className={`text-5xl font-bold ${color}`}>
      {count}{suffix}
    </span>
  );
};

export default function StandOutSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[30px] sm:text-[33px] text-gray-900 mb-2" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>What Make Us</h2>
          <h2 className="text-[28px] sm:text-[33px]  text-gray-900" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>Stand Out From Rest ?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Column - Illustration (now appears first for left side) */}
          <div className="flex justify-center">
            <img src="/images/Services.svg" alt="Services Illustration" />
          </div>

          {/* Left Column - Stats (now second, so appears on right side) */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-2">
                  <AnimatedCounter end={120} suffix="K+" color="text-blue-600 text-[39px] " style={{ fontFamily: "Myanmar Khyay, sans-serif" }}/>
                </div>
                <p className="text-[15px]  text-gray-700" style={{ fontFamily: "font-family: 'Montserrat" }}>Satisfied Customers</p>
              </div>
              <div className="text-center">
                <div className="mb-2">
                  <AnimatedCounter end={70} suffix="K+" color="text-blue-600 text-[39px]" style={{ fontFamily: "Myanmar Khyay, sans-serif" }} />
                </div>
                <p className="text-[15px]  text-gray-700" style={{ fontFamily: "font-family: 'Montserrat" }}>Positive Reviews</p>
              </div>
              <div className="text-center">
                <div className="mb-2">
                  <AnimatedCounter end={120} suffix="Y+" color="text-blue-600 text-[39px] " style={{ fontFamily: "Myanmar Khyay, sans-serif" }}/>
                </div>
                <p className="text-[15px] text-gray-700" style={{ fontFamily: "font-family: 'Montserrat" }}>Year Experience</p>
              </div>
              <div className="text-center">
                <div className="mb-2">
                  <AnimatedCounter end={120} suffix="K+" color="text-blue-600 text-[39px] " style={{ fontFamily: "Myanmar Khyay, sans-serif" }}/>
                </div>
                <p className="text-[15px]  text-gray-700"style={{ fontFamily: "font-family: 'Montserrat" }}>Happy Customers</p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-gray-600 text-[18px] sm:text-[22px] "style={{ fontFamily: "font-family: 'Montserrat" }}>
                In Today Fast-Paced World Financial Stability and
                Literacy play a crucial role in shaping our lives
              </p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
