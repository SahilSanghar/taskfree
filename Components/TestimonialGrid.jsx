import Image from 'next/image';
import React from 'react';

const TestimonialGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 md:gap-x-16 lg:gap-x-32 px-2 sm:px-5 md:px-10 lg:ms-10 py-5">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-[#D9D9D9] h-auto max-w-full sm:h-[280px] w-full sm:w-[520px] rounded-3xl flex flex-col sm:flex-row items-center sm:items-start py-2"
        >
          <Image
            src="/testimonialImg.svg"
            alt="Testimonial Image"
            width={150}
            height={150}
            className="m-4 sm:m-2.5 sm:ms-5"
          />
          <div className="px-4 sm:px-2 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              ))}
            </div>
            <p className="text-sm font-bold mb-2">
              Amazing Service and Professional Staff!
            </p>
            <p className="text-sm">
              I had an excellent experience with Task Free! The team was
              professional, courteous, and quick to assist with my inquiries.
              They made the process so smooth and stress-free. It’s clear they
              prioritize customer satisfaction, and their communication skills
              are top-notch. 
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
