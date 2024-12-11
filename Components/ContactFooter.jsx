import React from 'react';
import { IoMailOpenOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5';

const ContactFooter = () => {
  return (
    <div className="bg-primary py-8 md:w-[150.8%] md:-ms-[15.99rem] mt-32 relative">
      <div className="bg-[#D9D9D9] max-w-[90%] md:max-w-[80%] lg:max-w-[70%] -mt-20 mx-auto rounded-2xl p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-secondary h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-full">
              <IoMailOpenOutline className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="text-primary mt-4">
              <p className="font-bold text-lg md:text-2xl">Mail us</p>
              <p className="text-sm md:text-base">info@taskfree.co.uk</p>
              <p className="text-sm md:text-base">taskfree221@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-secondary h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-full">
              <IoCallOutline className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="text-primary mt-4">
              <p className="font-bold text-lg md:text-2xl">Call us</p>
              <p className="text-sm md:text-base">+44 7383 332304</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-secondary h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-full">
              <IoLocationOutline className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="text-primary mt-4">
              <p className="font-bold text-lg md:text-2xl">Our Location</p>
              <p className="text-sm md:text-base">5 Trafford Rd, Salford M5 3NR</p>
              <p className="text-sm md:text-base">United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
