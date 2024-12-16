"use client"
import Image from 'next/image';
import Link from 'next/link'; // Import Link for routing
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";

const Navbar = () => {
  // State to track the active navigation item, defaulting to 'Home'
  const [active, setActive] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu visibility

  // Menu items with their routes
  const menuItems = [
    { name: 'Home', route: '/' },
    { name: 'Industries', route: '/industries' },
    { name: 'Testimonials', route: '/testimonials' },
    { name: 'Services', route: '/services' },
    { name: 'About Us', route: '/about' },
    { name: 'Contact Us', route: '/contact' },
    { name: 'Book Us', route: '/calendly.com/taskfree221/30min' },
  ];

  return (
    <div className="flex items-center justify-between px-10 sm:px-8 md:px-40 fixed top-0 h-24 w-screen z-[9999] backdrop-blur-md">
      {/* Logo */} 
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden h-10 w-10">
        {isMenuOpen ? (
          <ImCross
            color=""
            className="text-4xl cursor-pointer p-2 rounded-lg text-primary bg-secondary"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <GiHamburgerMenu
            color=""
            className="text-4xl cursor-pointer p-1 rounded-lg text-primary bg-secondary"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
      {/* Navigation Menu */}
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row bg-primary text-white items-center space-y-4 md:space-y-0 md:space-x-12 md:rounded-full rounded-lg md:px-10 absolute md:relative top-20 md:top-0 right-0 md:right-auto w-2/4 md:w-auto`}
      >
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer w-full md:w-auto text-center py-2 md:py-3 ${
              active === item.name ? 'text-[#E38E49]' : ''
            }`}
          >
            {item.name === 'Book Us' ? (
              <a
                href='https://calendly.com/taskfree221/30min'
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security feature
                className="hover:text-[#E38E49] transition"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </a>
            ) : (
              <Link
                href={item.route}
                onClick={() => {
                  setActive(item.name);
                  setIsMenuOpen(false); // Close menu on item click
                }}
                className="hover:text-[#E38E49] transition"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
