import HomePage from "../Layout/HomePage";
import { MovingTestimonial } from "../Layout/MovingTestimonial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function Home() {
  return (
    <div>
      <HomePage content={content} />
      <MovingTestimonial />
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
}
