"use client";

import React from "react";
import { InfiniteMovingCards } from "../Components/ui/infinite-moving-cards";

export function MovingTestimonial() {
  return (
    (<div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "Task Free has significantly improved our efficiency at Cosy Ghar Interior. Their support with scheduling and client communication has allowed us to focus more on design, leading to smoother workflows and happier clients. Highly recommended.",
    name: "Sarina Gurung",
    title: "CEO at Cosy Ghar Interior",
    image: "/cosy.png",
    alt: "Cosy"
  },
  {
    quote:
      "Task Free has been a real asset to our team. They’ve taken care of all the admin, so we can focus on what we do best, matching great people with great roles. Their efficiency and professionalism have made a huge difference, and I can’t recommend them enough.",
    name: "Damar Gurung",
    title: "Director at Red Parrot Recruitment Ltd.",
    image: "/redpr.png",
    alt: "Red Parrot Recruitment"
  },
  {
    quote: "Task Free has been a valuable asset to our business. They’ve efficiently managed our admin, freeing us up to focus on providing tailored mortgage advice. Their support has been seamless and reliable, and I wouldn't hesitate to recommend them.",
    name: "Ramesh Ghale",
    title: "Director at Ghale Mortgages",
    image: "/ghale.png",
    alt: "Ghale Mortgages"
  },
  {
    quote: "Task Free has been a fantastic support to our team at Elm Apartments. Their efficient handling of admin tasks has freed us up to focus on delivering exceptional guest experiences. I highly recommend their services, they’ve been a great asset to our business.",
    name: "Sajan Thapa",
    title: "CEO at Elm Appartments",
    image: "/elm.png",
    alt: "Elm Appartments"
  },
  {
    quote: "Task Free has been a real asset to AMN Consultancy Limited. Their team efficiently handles all our admin tasks, from scheduling to client correspondence, allowing us to focus on providing strategic insights and solutions for our clients. The support has been seamless, and we’re now able to work more efficiently and deliver better results. I highly recommend their services for any business looking to streamline operations.",
    name: "Numan Ali",
    title: "Senior Business Analyst at AMN Consultancy Limited",
    image: "/amn.png",
    alt: "AMN Consultancy Limited"
  },
  {
    quote: "Working with Task Free has been a real game-changer for us at Yeti Homes. Their team has seamlessly handled our administrative tasks, giving us the time and space to focus on delivering top-quality service to our clients. Task Free’s virtual assistants are not only efficient but also proactive, always staying ahead of our needs. They've truly helped us streamline our operations and improve our overall efficiency. If you're looking to lighten the load and enhance your business operations, I can't recommend Task Free enough.",
    name: "Yam Roka",
    title: "Director at Yeti Homes",
    image: "/yeti.png",
    alt: "Yeti Homes"
  },
];
