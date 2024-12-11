import TestimonialGrid from '../Components/TestimonialGrid'
import React from 'react'

const Testimonial = () => {
return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-56 mt-10 sm:mt-16 md:mt-24">
        <p className="text-secondary text-lg sm:text-2xl md:text-3xl font-bold text-center sm:text-left mt-28">Reviews from our Clients</p>
        <TestimonialGrid />
    </div>
)
}

export default Testimonial