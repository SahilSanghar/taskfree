import Image from "next/image";
import React from "react";
import { TbPhoneCalling } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { BsPhoneFlip } from "react-icons/bs";
import { Ri24HoursLine } from "react-icons/ri";
import { IoChatbubbles } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { MdFeedback } from "react-icons/md";

const Service = () => {
  // Service data array
  const services = [
    {
      title: "Call Handling",
      description:
        "Personalized inbound call answering, from occasional needs to 24/7 support.",
      icon: <TbPhoneCalling className="text-secondary h-8 w-8 m-auto relative top-6" />,
    },
    {
      title: "Appointment Setting",
      description:
        "Scheduling appointments via outbound calls and managing confirmations.",
      icon: <FaUserCheck className="text-secondary h-8 w-8 m-auto relative top-6" />,
    },
    {
      title: "Virtual Call Center",
      description:
        "Scalable customer service for both inbound and outbound operations.",
      icon: <FaHeadphones className="text-secondary h-8 w-8 m-auto relative top-6" />,
    },
    {
      title: "Custom Phone Numbers",
      description:
        "Setup of geographic, toll-free, or local-rate numbers for your business needs.",
      icon: <BsPhoneFlip className="text-secondary h-8 w-8 m-auto relative top-6" />,
    },
    {
      title: "24/7 Emergency Call Answering",
      description:
        "Round-the-clock support to handle urgent customer needs",
      icon: <Ri24HoursLine className="text-secondary h-8 w-8 m-auto relative top-6" />,
    },
    {
      title: "Web Chat Answering",
      description:
        "Engage website visitors and convert leads through live chat support",
      icon: <IoChatbubbles className="text-secondary h-8 w-8 m-auto relative top-6" />,
    },
    {
      title: "Business Continuity Support",
      description:
        "Seamless call handling during disruptions or emergencies.",
      icon: <MdSupportAgent className="text-secondary h-8 w-8 m-auto relative top-6" />,
    },
    {
      title: "Customer Feedback Collection",
      description:
        "Outbound calls or surveys to gather valuable customer insights.",
      icon: <MdFeedback className="text-secondary h-8 w-8 m-auto relative top-6" />,
    },
  ];

  return (
    <div className="relative h-[85.6vh]">
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
      <div className="grid grid-cols-4 grid-rows-2 gap-y-10 mx-20 ps-40">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-[255px] w-[220px] flex flex-col items-center rounded-2xl py-3"
          >
            <div className="bg-primary h-20 w-20 rounded-full">{service.icon}</div>
            <div className="flex flex-col items-center pt-2">
              <p className="text-secondary font-bold text-lg text-center">{service.title}</p>
              <p className="text-primary text-sm px-5 text-center">
                {service.description}
              </p>
            </div>
            <div className="pt-1.5">
              <p className="text-secondary font-bold">View more</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
