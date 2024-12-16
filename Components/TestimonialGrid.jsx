"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define the data for the testimonials and about sections
const testimonials = [
  {
    company: 'Cosy Ghar Interior',
    ceo: 'Sarina Gurung',
    testimony:
      '“Task Free has significantly improved our efficiency at Cosy Ghar Interior. Their support with scheduling and client communication has allowed us to focus more on design, leading to smoother workflows and happier clients. Highly recommended.”',
    about:
      'At Cosy Ghar Interior, we specialise in transforming residential and commercial spaces into organised, calm, and inviting environments. Based in London, we work with clients across the UK and internationally, offering tailored interior design solutions that promote well-being and relaxation. Whether through Scandinavian-inspired minimalism, boho chic, or Japandi style, we create spaces that are both beautiful and functional, helping our clients fall in love with their surroundings.',
    howWeHelped:
      'Working with Cosy Ghar Interior has been a real pleasure for us at Task Free. They came to us needing help with managing all the admin that was taking up time from their creative work. From sorting out emails to booking appointments and keeping everything organised, we’ve stepped in to take care of the day to day tasks. This has allowed them to focus on what they do best, designing stunning spaces. By streamlining their operations, we’ve helped them stay on top of things and deliver even better results for their clients. It’s been great supporting them and watching their business grow.',
      src: '/cosy.png',
      alt: 'Cozy'
  },
  {
    company: 'Red Parrot Recruitment',
    ceo: 'Damar Gurung',
    testimony:
      '“Task Free has been a real asset to our team. They’ve taken care of all the admin, so we can focus on what we do best, matching great people with great roles...”',
    about:
      'At Red Parrot Recruitment Ltd, we provide reliable, cost-effective recruitment solutions across a variety of sectors, including healthcare, hospitality, office, and professional roles. With over 40 years of experience, we’re dedicated to matching the right talent with the right organisations, offering both temporary and permanent staffing solutions. Our goal is to offer a high quality, personalised service that meets the unique needs of each client.',
    howWeHelped:
      'Working with Red Parrot Recruitment Ltd has been a rewarding experience for us at Task Free. Their team was handling a lot of administrative work, everything from scheduling interviews to managing client emails that was taking up valuable time they could have spent on recruitment. We’ve been able to step in and take over those tasks, keeping everything organised and running smoothly behind the scenes. By freeing them from the day to day admin, we’ve helped them stay focused on what they do best, finding the perfect talent for their clients. It’s been a pleasure helping them stay on track and improve their efficiency.',
      src: '/redpr.png',
      alt: 'Redpr'
  },
  {
    company: 'Ghale Mortgages',
    ceo: 'Ramesh Ghale',
    testimony:
      '“Task Free has been a valuable asset to our business. They’ve efficiently managed our admin, freeing us up to focus on providing tailored mortgage advice...”',
    about:
      "At Ghale Mortgages, we specialise in providing bespoke mortgage and protection advice tailored to each client's unique circumstances. Our aim is to truly understand your needs and provide clear, comprehensive guidance, helping you navigate the mortgage process and make the right choices for your future. Whether face to face or over the phone, we offer expert advice that fits around your schedule, ensuring you receive the best solutions to meet your goals.",
    howWeHelped:
      'Working with Ghale Mortgages has been a great partnership for us at Task Free. They were finding it challenging to manage all the admin that comes with running a busy mortgage advisory business. We’ve helped by taking care of everything from scheduling appointments to handling client inquiries and managing emails. By stepping in to handle these tasks, we’ve allowed them to focus more on offering personalised advice to their clients. Our support has helped them stay organised, save time, and stay responsive, ensuring they can maintain a high level of service. It’s been rewarding to help them streamline their operations and make their workday run more smoothly.',
      src: '/ghale.png',
      alt: 'Ghale'
      
  },
  {
    company: 'Elm Apartments',
    ceo: 'Sajan Thapa',
    testimony:
      '“Task Free has been a fantastic support to our team at Elm Apartments. Their efficient handling of admin tasks has freed us up to focus on delivering exceptional guest experiences...”',
    about:
      'At Elm Apartments, we pride ourselves on offering exceptional service and creating a memorable experience for our guests. Whether you’re in Manchester for business or leisure, our dedicated team goes the extra mile to ensure your stay is as comfortable and enjoyable as possible. We focus on providing a welcoming environment with all the comforts of home.',
    howWeHelped:
      'Working with Elm Apartments has been a great experience for us at Task Free. They were busy managing bookings, guest inquiries, and all the daily admin, which was starting to pile up. We’ve been able to take that off their plate by handling the scheduling, responding to guest questions, and organising the office tasks. With us handling the behind-the-scenes work, they’ve been able to focus more on giving their guests a fantastic experience. It’s been rewarding to help them streamline their operations and improve their service delivery.',
      src: '/elm.png',
      alt: 'Elm'
  },
  {
    company: 'AMN Consultancy Limited',
    ceo: 'Numan Ali',
    testimony:
      '“Task Free has been a real asset to AMN Consultancy Limited. Their team efficiently handles all our admin tasks, from scheduling to client correspondence...”',
    about:
      "At AMN Consultancy Limited, we specialise in providing expert business analysis and strategic consulting services to organisations looking to improve operational efficiency and drive sustainable growth. With a focus on delivering tailored solutions, we work closely with our clients across various industries to optimise processes, streamline operations, and maximise profitability. Our team of experienced consultants is dedicated to delivering results that align with each client's unique goals and challenges.",
    howWeHelped:
      'Working with AMN Consultancy Limited has been a great experience for us at Task Free. Their team was doing amazing work with business analysis and consultancy, but the admin side of things was starting to take up more time than they’d like. We’ve been able to step in and take care of things like scheduling, client communications, and general office tasks, which has really freed them up to focus on what they do best, helping their clients. By handling the day to day stuff, we’ve helped them stay organised and responsive, which has made a big difference in the service they provide. It’s been fantastic working with them and supporting their growth.',
      src: '/amn.png',
      alt: 'Ayetimn'
  },
  {
    company: 'Yeti Homes Estates',
    ceo: 'Yam Roka',
    testimony:
      '“Working with Task Free has been a real game-changer for us at Yeti Homes. Their team has seamlessly handled our administrative tasks...”',
    about:
      'At Yeti Homes, we are passionate about providing exceptional service to landlords while maintaining a strong duty of care to tenants. Founded by property investors who understand the challenges of the industry, our goal is simple: to offer a straightforward, no-nonsense approach to property management and lettings. We pride ourselves on low fees, legal compliance, and efficient processes, ensuring both landlords and tenants have a smooth experience. Thanks to our dedication and client-focused approach, much of our growth comes from referrals, building a strong reputation for delivering results that benefit everyone involved.',
    howWeHelped:
      "Working with Yeti Homes Estates has been a rewarding partnership for us at Task Free. They were swamped with managing property listings, booking viewings, and handling client inquiries leaving little time for what really matters. We took care of the admin side of things, from scheduling to email management, so their team could focus on providing top-tier service to their clients. By streamlining their processes, we've helped them stay organised and responsive, giving them more time to grow their relationships and offer an even better experience to landlords and tenants alike. It’s been great to see how much smoother everything runs now.",
      src: '/yeti.png',
      alt: 'Yeti'
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handlePopupOpen = (index) => {
    setSelectedTestimonial(index);
  };

  const handlePopupClose = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card bg-white hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onClick={() => handlePopupOpen(index)}
          >
          <div className="">
            <Image src={testimonial.src} alt={testimonial.alt} width={500} height={50} className='h-[25vh] w-[50vw]' />
            <h3 className="font-bold text-xl">{testimonial.company}</h3>
            <p className="text-sm text-gray-600">{testimonial.ceo}</p>
          </div>
          <div className="">
            <p className="mt-4">{testimonial.testimony}</p>
          </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedTestimonial !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full">
            <h3 className="font-bold text-xl">{testimonials[selectedTestimonial].company}</h3>
            <p className="text-sm text-gray-600">{testimonials[selectedTestimonial].ceo}</p>
            <div className="grid grid-cols-2 gap-5">
            <div className="mt-4">
              <h4 className="font-semibold">About:</h4>
              <p>{testimonials[selectedTestimonial].about}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">How We Helped:</h4>
              <p>{testimonials[selectedTestimonial].howWeHelped}</p>
            </div>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
