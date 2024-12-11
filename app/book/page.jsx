"use client";
import React, { useState } from "react";

const BookPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit form to generate Google Calendar event link
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message, date, time } = formData;

    // Format date and time
    const startTime = `${date}T${time}:00`;
    const endTime = `${date}T${Number(time.split(":")[0]) + 1}:${time.split(":")[1]}:00`;

    // Create Google Calendar URL
    const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+${name}&details=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    )}&dates=${startTime.replace(/-/g, "")}/${endTime.replace(
      /-/g,
      ""
    )}&sf=true&output=xml`;

    // Redirect user to Google Calendar URL
    window.open(calendarUrl, "_blank");
  };

  return (
    <div className="p-8 max-w-md mx-auto mt-24">
      <h1 className="text-2xl font-bold mb-6">Book a Meeting</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <div className="flex space-x-2">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="flex-1 p-2 border rounded"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="flex-1 p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default BookPage;
