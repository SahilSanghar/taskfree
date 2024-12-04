import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div className="relative h-[85.6vh]">
      {/* Background Image */}
      <div className="absolute -top-28 inset-0 -z-50">
        <Image
          src="/hero.svg"
          alt="Hero"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute -top-28 inset-0 bg-black bg-opacity-60 -z-40"></div>

      {/* Content Above the Background */}
      <div className="relative z-50 flex flex-col ms-[220px] justify-center h-full">
        <p className="text-5xl font-semibold text-white -mt-[50px]">Let us handle your calls and customer interactions <br />
            so you can focus on growing your business</p>
        <p className="text-secondary text-3xl">Average price £8 per hour</p>
        <p className="text-3xl text-white pt-10">
            Subscribe to our E-mail to get 10% off your first deal
        </p>
        <div className="space-x-5">
        <input type="text" placeholder='Enter Your E-mail Address' className='w-[55%] bg-[#E5E1DA] placeholder:text-black rounded-full mt-5 py-2 px-5' />
            <button className='bg-secondary px-5 py-2 rounded-2xl'>Subscribe</button>
        </div>
        <div className="bg-secondary rounded-full text-white w-14 h-14 absolute bottom-24 right-20" >&nbsp;</div>
            <p className='absolute right-[70px] bottom-28 text-xl text-white'>Chat Bot</p>
      </div>
    </div>
  );
};

export default HomePage;
