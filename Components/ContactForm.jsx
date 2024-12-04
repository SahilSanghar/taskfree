import React from 'react'

const ContactForm = () => {
return (
    <div>
        <div className="grid grid-cols-2 mx-32 ps-20">
            <div className="">
                <p className="text-primary text-lg ps-5">E-mail</p>
                <input type="text" className='bg-[#D9D9D9] rounded-full h-[40px] w-[300px]' />
            </div>
            <div className="">
                <p className="text-primary text-lg ps-5">Phone Number</p>
                <input type="text" className='bg-[#D9D9D9] rounded-full h-[40px] w-[300px]' />
            </div>
        </div>
        <div className="">
            <textarea name="" id="" placeholder='Write Us a message (optional)' className='bg-[#D9D9D9] placeholder:text-black w-[62.5%] rounded-3xl ms-[210px] py-1.5 px-6 my-3 h-[100px]'></textarea>
        </div>
        <div className="w-[640px] h-[40px] rounded-full ms-[215px] text-center bg-primary text-white">
            <button className='font-semibold text-xl py-1'>Submit</button>
        </div>
    </div>
)
}

export default ContactForm