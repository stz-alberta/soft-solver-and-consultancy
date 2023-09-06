import React from 'react'
import aboutImg from '../../images/about_us.svg';

function AboutBanner() {
    return (
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-6xl font-bold text-primary'>About US</h1>
                <p className='text-xl mt-4'><span className='text-secondary font-semibold uppercase'>Soft Solver and Consultancy</span> is a company that provides comprehensive IT solutions to businesses across the globe. Our team of seasoned professionals is dedicated to delivering top-notch services and products customized to meet our client’s unique needs.</p>
            </div>
        
            <img src={aboutImg} alt="About us" />
        </div>
    )
}

export default AboutBanner