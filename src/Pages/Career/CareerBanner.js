import React from 'react';
import careerImg from '../../images/career.svg';

function CareerBanner() {
    return (
        <div className='grid md:grid-cols-2 gap-8 px-8'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl mt-8 md:mt-0 md:text-6xl font-bold text-primary'>Join Our Team</h1>
                <p className='text-xl mt-4'>Join our team of dedicated professionals and make a difference. We are always looking for passionate individuals to help us deliver the best solutions. If you're looking for a dynamic work environment and the opportunity to grow, we want to hear from you. Apply today and become part of a team committed to excellence.</p>
            </div>
            <img src={careerImg} alt="About us" />
        </div>
    )
}

export default CareerBanner