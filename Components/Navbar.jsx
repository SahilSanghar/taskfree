"use client"
import Image from 'next/image';
import Link from 'next/link'; // Import Link for routing
import React, { useState } from 'react';

const Navbar = () => {
  // State to track the active navigation item
  const [active, setActive] = useState('Services');

  // Menu items with their routes
  const menuItems = [
    { name: 'Home', route: '/' },
    { name: 'Industries', route: '/industries' },
    { name: 'Testimonials', route: '/testimonials' },
    { name: 'Services', route: '/services' },
    { name: 'About Us', route: '/about' },
    { name: 'Contact Us', route: '/contact' },
    { name: 'Sign-up', route: '/signup' },
  ];

  return (
    <div className="flex items-center justify-start ms-48 space-x-20">
      {/* Logo */}
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />

      {/* Navigation Menu */}
      <ul className="bg-[#0A3981] text-white flex items-center space-x-20 rounded-full px-10">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer h-[50px] w-[80px] py-3  ${
              active === item.name ? 'text-[#E38E49]' : ''
            }`}
          >
            <Link href={item.route} onClick={() => setActive(item.name)} // Update active state on click
                className="hover:text-[#E38E49] transition"
              >
                {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
