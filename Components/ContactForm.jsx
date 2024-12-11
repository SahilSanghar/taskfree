"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/; // Assuming phone number should be 10 digits

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return; // Stop submission if there are validation errors
    }

    const templateParams = {
      email,
      phone,
      message,
    };

    // Show loading toast
    const toastId = toast.info("Submitting...", { autoClose: false });

    setIsSubmitting(true);

    emailjs
      .send('service_7x1jvri', 'template_yf737na', templateParams, 'O7LNX4hrMabZdx4Av')
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.update(toastId, {
          render: "Message sent successfully! 🎉",
          type: "success",
          autoClose: 5000,
        });
        setEmail('');
        setPhone('');
        setMessage('');
        setErrors({});
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.update(toastId, {
          render: "Error sending message. Please try again.",
          type: "error",
          autoClose: 5000,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-primary text-lg">E-mail</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`bg-[#D9D9D9] rounded-full h-[40px] w-full px-4 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <p className="text-primary text-lg">Phone Number</p>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`bg-[#D9D9D9] rounded-full h-[40px] w-full px-4 ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>
      <div className="mt-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write Us a message (optional)"
          className={`bg-[#D9D9D9] placeholder:text-black w-full rounded-3xl py-2 px-4 h-[100px] ${errors.message ? 'border-red-500' : ''}`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      <div className="mt-4 flex justify-center">
        <button className="w-full max-w-[300px] h-[40px] rounded-full bg-primary text-white font-semibold text-xl">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
