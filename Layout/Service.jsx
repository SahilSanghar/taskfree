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
      description1: "Task Free’s call handling services are designed to provide seamless, professional communication that enhances customer satisfaction and supports business efficiency. Our experienced team manages every call with care, offering personalized greetings, professional handling, and consistent service. Whether it’s answering inquiries, taking messages, or scheduling appointments, every interaction reflects your brand’s tone and values. We provide detailed message logging, urgent call prioritization, and efficient routing to the right team members, ensuring no opportunity is missed. Our 24/7 availability means your customers can reach you anytime, and we handle spikes in call volume during peak times to maintain uninterrupted service. Additionally, we offer tailored scripts and branding to ensure a consistent customer experience that aligns with your business. With features like call overflow management, appointment scheduling, and call screening, our services improve operational efficiency while saving you the cost and effort of hiring additional staff. Task Free’s call handling is a flexible, scalable solution ideal for businesses of all sizes, from SMBs to industries like healthcare, real estate, e-commerce, and tech. We combine expertise, technology, and a human touch to",
      icon: <TbPhoneCalling className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "Appointment Setting",
      description: "Appointment-setting services streamline scheduling and ensure smooth process.",
      description1: "TaskFree’s appointment-setting services streamline scheduling and ensure a smooth process for both businesses and their customers. Our professional team handles everything from booking appointments to sending confirmations and reminders, making it easy for your clients to stay informed and engaged. Whether you need to manage consultations, meetings, or service bookings, we provide a seamless solution that saves you time and reduces scheduling errors. We integrate directly with your calendar systems, ensuring appointments are updated in real-time and preventing double bookings. Our service includes rescheduling, follow-ups, and reminders, allowing your team to focus on core tasks while we manage the logistics. Every interaction is personalized to reflect your business's brand and tone, leaving a positive impression on your clients.TaskFree’s appointment setting enhances customesatisfaction and operational efficiency by ensurinclear communication and timely scheduling. It’s aideal solution for industries such as healthcarereal estate, professional services, and educationhelping businesses maintain organization, improvclient retention, and optimize resource allocationWith TaskFree, you can trust that your appointmenmanagement is in expert hands",
      icon: <FaUserCheck className="text-secondary h-8 w-8 m-auto relative top-0.5 left-1" />,
    },
    {
      title: "Virtual Call Center",
      description: "Scalable customer service for both inbound and outbound operations.",
      description1: "Task Free’s virtual call center services offer businesses a cost-effective and efficient solution for managing customer communications without the need for a physical office setup. Our virtual call center operates with a professional team trained to handle inbound and outbound calls, ensuring every interaction reflects your business’s values and priorities. For inbound services, we manage customer inquiries, provide support, schedule appointments, and take messages with professionalism and care. Outbound services include lead follow-ups, client retention calls, surveys, and proactive engagement to help your business grow and maintain strong customer relationships. These services are customized to suit your specific needs, whether you’re focusing on customer support, sales, or administrative tasks. Our advanced technology and seamless integration with your systems enable us to provide real-time updates, call analytics, and tailored scripts to maintain consistency in brand communication. With scalability to handle fluctuating call volumes and 24/7 availability, our virtual call center ensures that your business is always accessible to customers. Task Free’s virtual call center is ideal for industries such as e-commerce, healthcare, real estate, tech companies, and professional services. It eliminates the overhead of maintaining a physical call center while delivering high-quality, reliable service. Whether you’re a growing small business or an established enterprise, our virtual call center supports your operations and enhances customer satisfaction.",
      icon: <FaHeadphones className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "Custom Phone Numbers",
      description: "Setup of geographic, toll-free, or local-rate numbers for your business needs.",
      description1: "Task Free’s custom phone number service offers businesses the flexibility and branding opportunities they need to streamline communication and stand out in the marketplace. By providing dedicated phone numbers tailored to specific purposes, such as sales, support, or marketing campaigns, we help you organize and manage customer interactions more effectively. With a custom phone number, you can enhance your business’s professional image and make it easier for customers to reach the right department or service. Whether you need local, toll-free, or vanity numbers, we provide options that align with your brand identity and operational requirements. These numbers can also be used for targeted marketing campaigns, allowing you to track call performance and ROI effectively. Our service includes seamless integration with your existing systems, ensuring all calls are logged, routed, and managed efficiently. Paired with our call handling and virtual receptionist services, a custom phone number becomes a powerful tool for improving accessibility and customer satisfaction. Task Free’s custom phone numbers are perfect for businesses of all sizes, from startups to established enterprises, and across industries like healthcare, retail, real estate, and professional services. With our support, you can maintain a professional presence while keeping your operations organized and customer-focused.",
      icon: <BsPhoneFlip className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "24/7 Emergency Call Answering",
      description: "Round-the-clock support to handle urgent customer needs.",
      description1: "Task Free’s 24/7 emergency call answering service ensures that your business is alwaysavailable to handle urgent customer needs, no matter thetime of day or night. Our highly trainedteam provides professional and empathetic support duringcritical moments, offering yourcustomers immediate assistance and reassurance.This service is particularly valuable for businesses thatoperate outside traditional office hours orhandle time-sensitive situations. Whether it’s respondingto emergency maintenance requests,urgent healthcare inquiries, or after-hours customerconcerns, we ensure that every call isanswered promptly and efficiently.We customize our approach to reflect your businesspolicies and communication style, providingclear, accurate information and escalating urgent mattersto the appropriate contacts. Our team prioritizes calls based on urgency, ensuring that critical issues are addressed immediately while maintaining excellent service quality. Task Free’s 24/7 emergency call answering is an ideal solution for industries such as healthcare, property management, legal services, and utilities. With our reliable support, your business can provide peace of mind to your customers, protect your reputation, and maintain smooth operations around the clock. ",
      icon: <Ri24HoursLine className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "Web Chat Answering",
      description: "Engage website visitors and convert leads through live chat support.",
      description1: "Task Free’s web chat answering service helps businesses engage with website visitors in real time, turning passive browsers into active customers. By offering immediate, professional support through live chat, we ensure that your website visitors receive the answers they need, improving customer satisfaction and increasing conversion rates. Our team is trained to handle inquiries ranging from general questions to more complex support requests, offering personalized, clear responses that align with your brand voice. Whether it’s answering product questions, guiding users through the purchasing process, or addressing service concerns, our experts are there to help at every step. With our web chat service, you benefit from seamless integration with your website, allowing us to provide instant communication and lead capture capabilities. We can qualify leads, schedule appointments, or direct inquiries to the right department, ensuring that no opportunity is missed. Our real-time support also helps reduce bounce rates and enhances the overall user experience. Task Free’s web chat answering service is perfect for e-commerce businesses, tech companies, service providers, and anyone looking to offer quick, efficient customer service online. With our professional support, you can enhance your digital customer experience, build stronger relationships, and drive more conversions. ",
      icon: <IoChatbubbles className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
    {
      title: "Business Continuity Support",
      description: "Seamless call handling during disruptions or emergencies.",
      description1: "Task Free’s web chat answering service helps businesses engage with website visitors in real time, turning passive browsers into active customers. By offering immediate, professional support through live chat, we ensure that your website visitors receive the answers they need, improving customer satisfaction and increasing conversion rates. Our team is trained to handle inquiries ranging from general questions to more complex support requests, offering personalized, clear responses that align with your brand voice. Whether it’s answering product questions, guiding users through the purchasing process, or addressing service concerns, our experts are there to help at every step. With our web chat service, you benefit from seamless integration with your website, allowing us to provide instant communication and lead capture capabilities. We can qualify leads, schedule appointments, or direct inquiries to the right department, ensuring that no opportunity is missed. Our real-time support also helps reduce bounce rates and enhances the overall user experience. Task Free’s web chat answering service is perfect for e-commerce businesses, tech companies, service providers, and anyone looking to offer quick, efficient customer service online. With our professional support, you can enhance your digital customer experience, build stronger relationships, and drive more conversions",
      icon: <MdSupportAgent className="text-secondary h-7 w-7 m-auto relative top-0.5" />,
    },
    {
      title: "Customer Feedback Collection",
      description: "Outbound calls or surveys to gather valuable customer insights.",
      description1: "Task Free’s Customer Feedback Collection service helps businesses gather valuable insights from their customers, ensuring that you continuously improve your products, services, and customer experience. By systematically collecting feedback, we enable you to better understand customer needs, identify areas for improvement, and strengthen relationships with your client base. Our team handles the process professionally, conducting surveys, following up with customers, and asking the right questions to gather actionable data. We can create tailored feedback forms, conduct post-service surveys, and even follow up with customers after a purchase to assess their satisfaction. This helps you stay informed on customer opinions and address any issues before they escalate. With our seamless integration, we ensure that feedback is captured and organized efficiently, enabling your team to analyze it quickly and take appropriate actions. Whether it’s through phone surveys, web forms, or email outreach, Task Free provides the tools and support you need to collect meaningful feedback from your customers. Task Free’s Customer Feedback Collection service is perfect for industries such as e-commerce, healthcare, hospitality, and professional services, where understanding customer sentiment is key to growth. By using our service, you can enhance your offerings, improve customer satisfaction, and create a more loyal customer base. ",
      icon: <MdFeedback className="text-secondary h-8 w-8 m-auto relative top-0.5" />,
    },
  ];

  return (
    <div className="relative h-[85.6vh] mt-[7rem]">
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
            className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-[255px] w-full flex flex-col items-center rounded-2xl py-3"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-10 z-50">
          <div className="bg-white p-5 rounded-lg max-w-2xl w-full">
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
