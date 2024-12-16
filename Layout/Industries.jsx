import Image from 'next/image'
import React from 'react'

const Industries = () => {
return (
    <div className='my-20 pt-8'>
        <p className='text-secondary text-3xl font-bold  mx-6 md:mx-20 lg:mx-56 text-center md:text-left'>Industries</p>
        <p className="text-base md:text-lg lg:text-xl px-6 md:px-20 lg:px-56 pt-5 text-justify">
            At Task Free, we understand that every business is unique, and different industries have
            specific needs when it comes to customer support. That’s why we offer tailored solutions
            designed to meet the demands of a wide range of sectors. Whether you’re a small business or a
            large enterprise, we have the experience and flexibility to provide the right level of support to
            help your business grow and maintain strong customer relationships.
        </p>
        {/* Medium-Large Screens */}
        <ul className="px-6 md:px-20 lg:px-56 pt-8 hidden lg:grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-14 gap-x-8">
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold  text-base md:text-lg">Small & Medium-Sized Businesses (SMBs)</span><br />
            Task Free offers cost-effective customer support solutions for SMBs, helping you maintain
            professional operations without the overhead of additional in-house staff. From call answering to
            appointment setting, we ensure that your business can respond to customer needs promptly
            and efficiently, even if you’re operating with a small team.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/smb.webp' alt='SMBs' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/lawyer.jpg' alt='laywer' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Professional Services (Accountants, Lawyers, Consultants)</span><br />
                For professionals in the legal, accounting, and consulting fields, we provide reliable support for
                client interactions, appointment scheduling, and urgent inquiries. Our services help you maintain
                a professional image, streamline communication, and ensure that no important call or message
                goes unanswered. Whether it’s scheduling consultations or handling client questions, Task Free
                provides you with a seamless, personalized customer service experience.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">E-Commerce & Retail: </span><br />
                In the fast-paced world of e-commerce and retail, excellent customer service is essential for
                driving customer satisfaction and loyalty. Task Free helps e-commerce businesses with order
                inquiries, product questions, and post-purchase support, ensuring a seamless experience for
                your customers. Our web chat management services also allow you to engage with customers
                in real time, converting casual visitors into loyal buyers.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/ecommerce.webp' alt='ecommerce' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/dr.webp' alt='dr' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Healthcare Providers (Doctors, Dentists, Clinics) </span><br />
                In healthcare, timely and compassionate communication is critical. Task Free provides 24/7
                support for healthcare providers, ensuring that your patients can easily reach you for
                appointments, inquiries, and emergency needs. Whether it’s booking appointments, following up
                on patient inquiries, or managing after-hours calls, we help maintain the professionalism and
                accessibility that healthcare businesses require.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Real Estate: </span><br />
                Real estate agents can benefit from our services that help manage calls, schedule viewings,
                and follow up with potential clients. With Task Free handling the administrative tasks, you can
                focus on selling properties and growing your business. Our services help keep your clients
                informed and engaged, ensuring that no lead is lost and that your business remains organized.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/realestate.jpg' alt='realestate' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/tech.jpeg' alt='tech' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Tech Companies: </span><br />
                Tech businesses often face a high volume of customer inquiries and technical support requests.
                Task Free helps manage calls, troubleshoot issues, and support your customers, allowing your
                team to focus on developing new technologies. Our customer service and technical support
                solutions ensure that your clients receive quick, efficient assistance with every interaction.    
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Legal Firms: </span><br />
                For legal firms, where every call and message may be time-sensitive, Task Free ensures that no
                communication is missed. We help you handle initial client consultations, schedule meetings,
                and manage ongoing legal matters, all with the confidentiality and professionalism required in
                the legal field. Our services ensure that your clients receive timely and attentive service every
                step of the way
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/law.jpg' alt='Law' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/tourism.webp' alt='Tourism' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Hospitality & Tourism: </span><br />
                The hospitality and tourism industry requires constant communication with guests, whether it’s
                making reservations, managing bookings, or addressing inquiries. Task Free offers 24/7 support
                for hotels, travel agencies, and tour operators, helping you maintain excellent customer relations
                and provide a seamless experience for your guests, no matter when they reach out.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Education & Training: </span><br />
                Educational institutions benefit from Task Free’s ability to manage student inquiries, assist with
                course registrations, and support administrative tasks. We help keep your communication
                streamlined, so staff can focus on providing quality education. Whether you’re managing
                prospective student calls or answering questions from current attendees, our services ensure
                that your educational institution runs smoothly and professionally.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/ed.jpg' alt='Ed' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/construction.jpg' alt='Construction' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Construction & Contractors: </span><br />
                For construction businesses and contractors, keeping track of appointments, quotes, and client
                communications is essential. Task Free’s services help manage these tasks efficiently, allowing
                you to focus on projects and deadlines. We help ensure that you never miss an important call,
                whether it’s from a potential client or an existing one, and assist with scheduling, quotes, and
                follow-ups, giving you more time to focus on your work.
        </p>
        </li>
        </ul>
        {/* Small Screens */}
        <ul className="md:hidden lg:hidden px-6 md:px-20 lg:px-56 pt-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-14 gap-x-8">
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold  text-base md:text-lg">Small & Medium-Sized Businesses (SMBs)</span><br />
            Task Free offers cost-effective customer support solutions for SMBs, helping you maintain
            professional operations without the overhead of additional in-house staff. From call answering to
            appointment setting, we ensure that your business can respond to customer needs promptly
            and efficiently, even if you’re operating with a small team.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/smb.webp' alt='SMBs' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Professional Services (Accountants, Lawyers, Consultants)</span><br />
                For professionals in the legal, accounting, and consulting fields, we provide reliable support for
                client interactions, appointment scheduling, and urgent inquiries. Our services help you maintain
                a professional image, streamline communication, and ensure that no important call or message
                goes unanswered. Whether it’s scheduling consultations or handling client questions, Task Free
                provides you with a seamless, personalized customer service experience.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/lawyer.jpg' alt='laywer' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">E-Commerce & Retail: </span><br />
                In the fast-paced world of e-commerce and retail, excellent customer service is essential for
                driving customer satisfaction and loyalty. Task Free helps e-commerce businesses with order
                inquiries, product questions, and post-purchase support, ensuring a seamless experience for
                your customers. Our web chat management services also allow you to engage with customers
                in real time, converting casual visitors into loyal buyers.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/ecommerce.webp' alt='ecommerce' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Healthcare Providers (Doctors, Dentists, Clinics) </span><br />
                In healthcare, timely and compassionate communication is critical. Task Free provides 24/7
                support for healthcare providers, ensuring that your patients can easily reach you for
                appointments, inquiries, and emergency needs. Whether it’s booking appointments, following up
                on patient inquiries, or managing after-hours calls, we help maintain the professionalism and
                accessibility that healthcare businesses require.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/dr.webp' alt='dr' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Real Estate: </span><br />
                Real estate agents can benefit from our services that help manage calls, schedule viewings,
                and follow up with potential clients. With Task Free handling the administrative tasks, you can
                focus on selling properties and growing your business. Our services help keep your clients
                informed and engaged, ensuring that no lead is lost and that your business remains organized.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/realestate.jpg' alt='realestate' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Tech Companies: </span><br />
                Tech businesses often face a high volume of customer inquiries and technical support requests.
                Task Free helps manage calls, troubleshoot issues, and support your customers, allowing your
                team to focus on developing new technologies. Our customer service and technical support
                solutions ensure that your clients receive quick, efficient assistance with every interaction.    
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/tech.jpeg' alt='tech' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Legal Firms: </span><br />
                For legal firms, where every call and message may be time-sensitive, Task Free ensures that no
                communication is missed. We help you handle initial client consultations, schedule meetings,
                and manage ongoing legal matters, all with the confidentiality and professionalism required in
                the legal field. Our services ensure that your clients receive timely and attentive service every
                step of the way
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/law.jpg' alt='Law' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Hospitality & Tourism: </span><br />
                The hospitality and tourism industry requires constant communication with guests, whether it’s
                making reservations, managing bookings, or addressing inquiries. Task Free offers 24/7 support
                for hotels, travel agencies, and tour operators, helping you maintain excellent customer relations
                and provide a seamless experience for your guests, no matter when they reach out.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/tourism.webp' alt='Tourism' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Education & Training: </span><br />
                Educational institutions benefit from Task Free’s ability to manage student inquiries, assist with
                course registrations, and support administrative tasks. We help keep your communication
                streamlined, so staff can focus on providing quality education. Whether you’re managing
                prospective student calls or answering questions from current attendees, our services ensure
                that your educational institution runs smoothly and professionally.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/ed.jpg' alt='Ed' width={500} height={100} className='rounded-xl w-full' />
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out h-auto flex flex-col items-center rounded-2xl py-4 px-3">
        <p className="">
            <span className="text-primary font-semibold text-base md:text-lg">Construction & Contractors: </span><br />
                For construction businesses and contractors, keeping track of appointments, quotes, and client
                communications is essential. Task Free’s services help manage these tasks efficiently, allowing
                you to focus on projects and deadlines. We help ensure that you never miss an important call,
                whether it’s from a potential client or an existing one, and assist with scheduling, quotes, and
                follow-ups, giving you more time to focus on your work.
        </p>
        </li>
        <li className="hover:shadow-custom hover:scale-105 transition-all duration-300 ease-in-out rounded-xl h-auto">
            <Image src='/construction.jpg' alt='Construction' width={500} height={100} className='rounded-xl w-full' />
        </li>
        </ul>
        <p className="text-secondary text-2xl md:text-3xl font-bold mx-6 md:mx-20 lg:mx-56 pt-16 text-center md:text-left">Custom Solutions for Any Industry</p>
        <p className="text-base md:text-lg lg:text-xl px-6 md:px-20 lg:px-56 pt-5 text-justify">
            At Task Free, we know that every business has its own unique requirements. Whether you're in
            healthcare, retail, or any other industry, we customize our services to suit your specific needs.
            No matter the size or complexity of your business, our team is ready to provide you with a
            tailored solution that enhances your customer service and supports your business goals.
        </p>
        <p className="text-base md:text-lg lg:text-xl px-6 md:px-20 lg:px-56 pt-5 text-justify">
            We’re committed to helping businesses across all industries stay connected with their
            customers, streamline operations, and provide exceptional service that builds trust and drives
            success.
        </p>
    </div>
)
}

export default Industries