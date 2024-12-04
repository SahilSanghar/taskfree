import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const ContactFooter = () => {
return (
    <div>
        <div className="bg-primary h-32 w-screen -ms-[256px] fixed bottom-0 -z-20">
            <div className="bg-[#D9D9D9] h-[170px] w-[1000px] mx-[300px] rounded-2xl z-20 -mt-24">
                <div className="grid grid-cols-3 gap-24 mx-32 z-50 fixed top-[420px]">
                    <div className="flex flex-col items-center">
                        <div className="bg-secondary h-20 w-20 rounded-full">
                            <IoMailOpenOutline className='h-10 w-10 m-5' />
                        </div>
                        <div className="flex flex-col items-center text-primary">
                            <p className="font-bold text-2xl">Mail us</p>
                            <p className="">info@taskfree.co.uk</p>
                            <p className="">taskfree221@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-secondary h-20 w-20 rounded-full">
                            <IoCallOutline className='h-10 w-10 m-5' />
                        </div>
                        <div className="flex flex-col items-center text-primary">
                            <p className="font-bold text-2xl">Call us</p>
                            <p className="">0987654321</p>
                            <p className="">0987656787</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-secondary h-20 w-20 rounded-full">
                            <IoLocationOutline className='h-10 w-10 m-5' />
                        </div>
                        <div className="flex flex-col items-center text-primary">
                            <p className="font-bold text-2xl">Our Location</p>
                            <p className="">Manchester 123, London</p>
                            <p className="">United Kingdom</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ContactFooter