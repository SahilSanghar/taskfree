"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            email,
            phone,
            message
        };

        emailjs.send('service_7x1jvri', 'template_yf737na', templateParams, 'O7LNX4hrMabZdx4Av')
            .then((response) => {
                console.log('Email sent successfully:', response);
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Error sending message. Please try again.');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 mx-32 ps-20">
                <div className="">
                    <p className="text-primary text-lg ps-5">E-mail</p>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="bg-[#D9D9D9] rounded-full h-[40px] w-[300px]" 
                    />
                </div>
                <div className="">
                    <p className="text-primary text-lg ps-5">Phone Number</p>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className="bg-[#D9D9D9] rounded-full h-[40px] w-[300px]" 
                    />
                </div>
            </div>
            <div className="">
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    name="" 
                    id="" 
                    placeholder="Write Us a message (optional)" 
                    className="bg-[#D9D9D9] placeholder:text-black w-[62.5%] rounded-3xl ms-[210px] py-1.5 px-6 my-3 h-[100px]"
                ></textarea>
            </div>
            <div className="w-[640px] h-[40px] rounded-full ms-[215px] text-center bg-primary text-white">
                <button className="font-semibold text-xl py-1">Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;
