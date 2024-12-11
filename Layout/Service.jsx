"use client"
import Image from "next/image";
import React, { useState } from "react";
import { TbPhoneCalling } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { BsPhoneFlip } from "react-icons/bs";
import { Ri24HoursLine } from "react-icons/ri";
import { IoChatbubbles } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { MdFeedback } from "react-icons/md";

const Service = () => {
  // State to track the currently active popup
  const [activePopup, setActivePopup] = useState(null);

  // Service data array
  const services = [
    {
      title: "Call Handling",
      description: "Personalized inbound call answering, from occasional needs to 24/7 support.",
      description1: "Task Free’s call handling services are designed to provide seamless, professional communication that enhances customer satisfaction and supports business efficiency...",
      icon: <TbPhoneCalling className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "Appointment Setting",
      description: "Scheduling appointments via outbound calls and managing confirmations.",
      description1: "Scheduling appointments via outbound calls and managing confirmations...",
      icon: <FaUserCheck className="text-secondary h-8 w-8 m-auto relative top-0.5 left-1" />,
    },
    {
      title: "Virtual Call Center",
      description: "Scalable customer service for both inbound and outbound operations.",
      description1: "Task Free’s virtual call center services offer businesses a cost-effective and efficient solution for managing customer communications...",
      icon: <FaHeadphones className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "Custom Phone Numbers",
      description: "Setup of geographic, toll-free, or local-rate numbers for your business needs.",
      description1: "Task Free’s custom phone number service offers businesses the flexibility and branding opportunities they need to streamline communication...",
      icon: <BsPhoneFlip className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "24/7 Emergency Call Answering",
      description: "Round-the-clock support to handle urgent customer needs.",
      description1: "Task Free’s 24/7 emergency call answering service ensures that your business is always available to handle urgent customer needs...",
      icon: <Ri24HoursLine className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "Web Chat Answering",
      description: "Engage website visitors and convert leads through live chat support.",
      description1: "Task Free’s web chat answering service helps businesses engage with website visitors in real time...",
      icon: <IoChatbubbles className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "Business Continuity Support",
      description: "Seamless call handling during disruptions or emergencies.",
      description1: "Task Free’s business continuity support ensures you can continue operations even during disruptions or emergencies...",
      icon: <MdSupportAgent className="text-secondary h-7 w-7 m-auto relative top-0.5" />,
    },
    {
      title: "Customer Feedback Collection",
      description: "Outbound calls or surveys to gather valuable customer insights.",
      description1: "Task Free’s Customer Feedback Collection service helps businesses gather valuable insights from their customers...",
      icon: <MdFeedback className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
  ];

  return (
    <div className="relative h-[85.6vh] mt-[6.2rem]">
      {/* Background Image */}
      <div className="absolute -top-28 inset-0 -z-50">
        <Image
          src="/service.svg"
          alt="Service"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute -top-28 inset-0 -z-40"></div>

      {/* Content Above the Background */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-10 md:mx-20 xl:mx-40">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-[255px] w-full flex flex-col items-center rounded-2xl py-3"
          >
            <div className="bg-primary h-20 w-20 rounded-full flex items-center justify-center">
              {service.icon}
            </div>
            <div className="flex flex-col items-center pt-2">
              <p className="text-secondary font-bold text-lg text-center">{service.title}</p>
              <p className="text-primary text-sm px-5 text-center">
                {service.description}
              </p>
            </div>
            <div className="pt-1.5">
              <p
                className="text-secondary font-bold cursor-pointer"
                onClick={() => setActivePopup(index)}
              >
                View more
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {activePopup !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg max-w-xl w-full">
            <h2 className="text-lg font-bold mb-4">
              {services[activePopup].title}
            </h2>
            <p>{services[activePopup].description1}</p>
            <button
              onClick={() => setActivePopup(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
