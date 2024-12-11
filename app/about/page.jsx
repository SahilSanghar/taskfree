import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='my-20 pt-5'>
      <p className='text-secondary text-3xl font-bold mx-56'>About Task Free</p>
      <p className="text-xl px-56 pt-5">
        At Task Free, we are dedicated to providing businesses with professional, reliable, and efficient
        customer interaction solutions that help them thrive in today’s fast-paced world. With over 5
        years of experience, our team is committed to offering seamless services that allow businesses
        to focus on growth, innovation, and delivering exceptional value to their customers.
      </p>
      <p className='text-secondary text-3xl font-bold mx-56 mt-20'>Our Mission</p>
      <p className="text-xl px-56 pt-5">
        Our mission is simple: to provide businesses with the support they need to operate smoothly,
        stay connected with customers, and ensure that every interaction is professional and impactful.
        We believe in offering tailored solutions that align with the unique needs of each business,
        making customer service a strategic advantage rather than a burden.
      </p>
      <p className='text-secondary text-3xl font-bold mx-56 mt-20'>Why Choose Task Free?</p>
      <ul className="flex flex-wrap justify-center gap-5 px-5 lg:px-56 pt-8">
        <li className="bg-[#D9D9D9] hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto w-full sm:w-[48%] md:w-[45%] lg:w-[40%] p-4 rounded-2xl">
          <p className="">
            <span className="text-primary font-semibold">Experience and Expertise: </span>
            With 5 years of experience in customer service and virtual
            assistance, we have built a reputation for delivering high-quality, dependable solutions that
            businesses trust.
          </p>
        </li>
        <li className="bg-[#D9D9D9] hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto w-full sm:w-[48%] md:w-[45%] lg:w-[40%] p-4 rounded-2xl">
          <p className="">
            <span className="text-primary font-semibold">UK-Based Team:</span>
            Our team operates from the UK, bringing local expertise and cultural
            understanding to each interaction. We focus on providing personalized services, with a strong
            commitment to customer satisfaction.
          </p>
        </li>
        <li className="bg-[#D9D9D9] hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto w-full sm:w-[48%] md:w-[45%] lg:w-[40%] p-4 rounded-2xl">
          <p className="">
            <span className="text-primary font-semibold">No Scripts, Just Real People:</span>
            We believe in authentic, human connections. Our team members
            are trained to communicate in a natural, friendly manner, ensuring that your customers always
            feel valued and heard.
          </p>
        </li>
          <li className="bg-[#D9D9D9] hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto w-full sm:w-[48%] md:w-[45%] lg:w-[40%] p-4 rounded-2xl">      
          <p className="">
            <span className="text-primary font-semibold">Comprehensive Services: </span>
            From call handling to appointment scheduling, virtual receptionists to
            web chat management, we offer a wide range of services that cover all aspects of customer
            communication. We take care of the details, so you can focus on the bigger picture.
          </p>
        </li>
          <li className="bg-[#D9D9D9] hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto w-full sm:w-[48%] md:w-[45%] lg:w-[40%] p-4 rounded-2xl">
          <p className="">
            <span className="text-primary font-semibold">Transparent Pricing: </span>
            At Task Free, we believe in fair and clear pricing. Our services are
            straightforward, with no hidden fees, ensuring you know exactly what you’re paying for—every
            step of the way
          </p>
        </li>
      </ul>
      <p className='text-secondary text-3xl font-bold mx-56 mt-10'>Our Values</p>
      <p className="text-xl px-56 pt-5">
        At Task Free, our values are at the heart of everything we do. we prioritize:
      </p>
      <ul className="px-44 mx-40 pt-8 grid grid-cols-2 grid-rows-3 gap-y-14">
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-[100px] w-[490px] flex flex-col items-center rounded-2xl py-4 px-3">
          <p className="">
            <span className="text-primary font-semibold">Reliability: </span>
            We understand that your business depends on trust and consistent service. That’s
            why we ensure that every call, message, and inquiry is handled with professionalism and care.
          </p>
        </li>
        <li className="rounded-xl mt-3 ms-40">
            <Image src='/rl.jpg' alt='Ed' width={80} height={50} className='hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-[100px] w-[490px] flex flex-col items-center rounded-2xl py-4 px-3">
          <p className="">
            <span className="text-primary font-semibold">Professionalism: </span>
            We take pride in offering top-notch customer service that reflects positively on
            your brand. Our team is trained to handle every situation with skill and professionalism.
          </p>
        </li>
        <li className="rounded-xl mt-3 ms-40">
            <Image src='/rl.jpg' alt='Ed' width={80} height={50} className='hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-[100px] w-[490px] flex flex-col items-center rounded-2xl py-4 px-3">
          <p className="">
            <span className="text-primary font-semibold">Client Satisfaction: </span>
            We measure our success by the satisfaction of our clients. Every interaction
            is designed to provide exceptional value and enhance the customer experience.
          </p>
        </li>
        <li className="rounded-xl mt-3 ms-40">
            <Image src='/rl.jpg' alt='Ed' width={80} height={50} className='hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl' />
        </li>
      </ul>
    </div>
  )
}

export default AboutPage