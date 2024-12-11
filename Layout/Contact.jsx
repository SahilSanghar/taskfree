import ContactFooter from '../Components/ContactFooter'
import ContactForm from '../Components/ContactForm'
import React from 'react'

const Contact = () => {
return (
    <div className='md:mx-44 lg:mx-64 mt-24'>
        <p className="text-secondary text-3xl font-bold pb-5 max-sm:ps-3.5 sm:ps-8 md:ps-20">Contact Us</p>
        <ContactForm />
        <ContactFooter />
    </div>
)
}

export default Contact