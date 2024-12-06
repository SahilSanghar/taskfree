import ContactFooter from '../Components/ContactFooter'
import ContactForm from '../Components/ContactForm'
import React from 'react'

const Contact = () => {
return (
    <div className='mx-64'>
        <p className="text-secondary text-3xl font-bold pb-5">Contact Us</p>
        <ContactForm />
        <ContactFooter />
    </div>
)
}

export default Contact