"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const content = {
  heroImage: '/hero.svg',
  heroText: 'Let us handle your calls and customer interactions so you can focus on growing your business',
  pricingText: 'Average price £8 per hour',
  subscriptionPrompt: 'Subscribe to our E-mail to get 10% off your first deal',
  emailPlaceholder: 'Enter Your E-mail Address',
  subscribeButton: 'Subscribe',
  bookNowText: 'Book Now',
  formTitle: 'Booking Form',
  formDescription: 'Please fill in your details to book an appointment.',
  formFields: [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Enter your name' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email' },
    { name: 'phone', type: 'tel', label: 'Phone Number', placeholder: 'Enter your phone number' },
    { name: 'datetime', type: 'datetime-local', label: 'Date & Time', placeholder: '' },
    { name: 'message', type: 'textarea', label: 'Message', placeholder: 'Your message' },
  ],
  email: {
    serviceId: 'service_7x1jvri',
    templateId: 'template_u5smgxr',
    userId: 'O7LNX4hrMabZdx4Av',
  },
  messages: {
    success: 'Message sent successfully!',
    error: 'Error sending message. Please try again.',
  },
  submitButton: 'Proceed',
};

const BookPage = () => {
  const [formData, setFormData] = useState(
    content.formFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const [formErrors, setFormErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form before submitting
  const validateForm = () => {
    const errors = {};
    content.formFields.forEach((field) => {
      if (!formData[field.name]?.trim() && field.type !== "textarea") {
        errors[field.name] = `${field.label} is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit form to EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Prepare the template parameters to send via EmailJS
    const templateParams = { ...formData };

    emailjs
      .send(
        'service_7x1jvri',  // Your EmailJS service ID
        "template_u5smgxr",   // Your EmailJS template ID
        templateParams,
        'O7LNX4hrMabZdx4Av'  // Your EmailJS user ID
      )
      .then(
        () => {
          toast.success("Booking request sent successfully! 🎉");
          setFormData(
            content.formFields.reduce((acc, field) => {
              acc[field.name] = "";
              return acc;
            }, {})
          );
          setFormErrors({}); // Clear errors after successful submission
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          toast.error("Booking request failed. Please try again.");
        }
      );
  };

  return (
    <div className="p-8 max-w-md mx-auto mt-24">
      <h1 className="text-2xl font-bold mb-6">{content.formTitle}</h1>
      <p className="mb-4">{content.formDescription}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {content.formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium mb-1">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            )}
            {formErrors[field.name] && (
              <p className="text-red-500 text-xs">{formErrors[field.name]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {content.submitButton}
        </button>
      </form>
    </div>
  );
};

export default BookPage;
