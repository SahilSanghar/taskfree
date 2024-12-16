"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineMessage } from "react-icons/md";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

const HomePage = ({ content }) => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    name: '',
    phone: '',
    message: '',
    email: '',  
    datetime: '', 
  });
  const [popupErrors, setPopupErrors] = useState({
    name: '',
    phone: '',
    message: '',
    email: '', 
    datetime: '',  
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Validation function for popup form
  const validatePopupForm = () => {
    const errors = {};
    if (!popupData.name.trim()) errors.name = 'Name is required';
    if (!popupData.phone.trim()) errors.phone = 'Phone number is required';
    if (!popupData.message.trim()) errors.message = 'Message is required';
    if (!popupData.email.trim() || !/\S+@\S+\.\S+/.test(popupData.email)) errors.email = 'Email is required';  // Check for email
    if (!popupData.datetime.trim()) errors.datetime = 'Date is required';     // Check for date
    setPopupErrors(errors);

    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Email sending via EmailJS
    emailjs
      .send(
        content.email.serviceId,
        "template_u5smgxr",
        { email },
        content.email.userId
      )
      .then(
        () => {
          toast.success("Subscribed successfully! 🎉");
          setEmail("");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          toast.error("Subscription failed. Please try again.");
        }
      );
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();

    console.log("Popup Data:", popupData); // Log popupData before validation
    console.log("Popup Errors Before Validation:", popupErrors);

    // Validate popup form data
    if (!validatePopupForm()) {
      console.log("Validation Errors:", popupErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    // Collect the popup form data
    const templateParams = {
      name: popupData.name,
      phone: popupData.phone,
      message: popupData.message,
      email: popupData.email,  // Send email data
      datetime: popupData.datetime     // Send time data
    };

    emailjs
      .send(
        content.email.serviceId,
        "template_u5smgxr",
        templateParams,
        content.email.userId
      )
      .then(
        () => {
          toast.success("Form submitted successfully! 🎉");
          setPopupData({ name: '', phone: '', message: '', email: '', datetime: '' });
          setShowPopup(false);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          toast.error("Form submission failed. Please try again.");
        }
      );
  };

  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setPopupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    console.log(`Field Updated: ${name} = ${value}`);
  };

  return (
    <div className="relative h-screen mt-20 lg:mt-[6.25rem]">
      {/* Background Image */}
      <div className="absolute -top-28 inset-0 -z-50">
        {/* <Image
          src={content.heroImage}
          alt="Hero"
          fill
          className="object-cover"
        /> */}
        {/* Image for PC */}
        <Image
          src="/PC.png"
          alt="Hero PC"
          fill
          className="hidden md:block object-cover"
        />
        {/* Image for Mobile */}
        <Image
          src="/Mobile.png"
          alt="Hero Mobile"
          fill
          className="block md:hidden object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute -top-20 inset-0 bg-black bg-opacity-60 -z-40"></div>

      {/* Content */}
      <div className="relative z-50 flex flex-col items-start lg:ms-[190px] justify-center h-full px-6 lg:px-0">
        <p className="text-2xl lg:text-5xl font-semibold text-white -mt-10 lg:-mt-[50px]">
          {content.heroText}
        </p>
        <p className="text-lg lg:text-3xl text-secondary mt-4 lg:mt-0">
          {content.pricingText}
        </p>
        <p className="text-lg lg:text-3xl text-white pt-6 lg:pt-10">
          {content.subscriptionPrompt}
        </p>
        <div className="space-x-0 lg:space-x-5 mt-4 lg:mt-0 flex flex-col lg:flex-row">
          <form onSubmit={handleSubscribe} className="flex flex-col lg:flex-row items-stretch lg:items-center space-y-3 lg:space-y-0 lg:space-x-5 pt-3">
            <input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.emailPlaceholder}
              required
              className="lg:w-[700px] sm:w-[80%] bg-[#E5E1DA] placeholder:text-black rounded-full py-2 px-4"
            />
            <button
              type="submit"
              className="bg-secondary px-4 lg:px-5 py-2 rounded-2xl text-sm lg:text-base"
            >
              {content.subscribeButton}
            </button>
          </form>
        </div>

        {/* Popup Trigger */}
        {!showPopup && (
          <div
            onClick={togglePopup}
            className="bg-primary rounded-full text-white w-12 lg:w-16 h-12 lg:h-14 absolute bottom-10 lg:bottom-14 right-10 lg:right-20 text-center flex items-center justify-center space-x-1 cursor-pointer"
          >
            <MdOutlineMessage className="h-5 w-5 lg:h-7 lg:w-7" />
            {/* <p className="text-sm lg:text-lg">{content.bookNowText}</p> */}
          </div>
        )}

        {/* Popup Form */}
        {showPopup && (
          <div className="absolute bottom-5 right-6 lg:right-10 bg-white text-black w-[260px] lg:w-[300px] p-4 rounded-lg shadow-lg animate-slide-up">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm lg:text-base">{content.formTitle}</p>
              <button
                onClick={togglePopup}
                className="text-red-500 font-bold text-base lg:text-lg"
              >
                X
              </button>
            </div>
            <p className="mt-2 text-xs lg:text-sm">{content.formDescription}</p>

            <form className="mt-4 space-y-3" onSubmit={handlePopupSubmit}>
              {content.formFields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-xs lg:text-sm font-medium">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={popupData[field.name]}
                      onChange={handlePopupChange}
                      rows="3"
                      className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={field.placeholder}
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={popupData[field.name]}
                      onChange={handlePopupChange}
                      className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={field.placeholder}
                    />
                  )}
                  {/* Display error messages */}
                  {popupErrors[field.name] && (
                    <p className="text-red-500 text-xs">{popupErrors[field.name]}</p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg w-full text-xs lg:text-base"
              >
                {content.submitButton}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
