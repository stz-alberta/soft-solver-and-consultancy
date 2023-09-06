import React from 'react';
import why from '../../images/whyImg.svg';

function WhyChoose() {
    return (
        <section className='mt-16'>
            <div className='grid md:grid-cols-2 gap-8'>
                <img src={why} alt="About us" />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-6xl font-bold text-primary'>Why You Choose?</h1>
                    <ul className='mt-8 text-xl'>
                        <li className='mt-2'># We provide you a quality work.</li>
                        <li className='mt-2'># Our team is very faster and we give a fastest delivery.</li>
                        <li className='mt-2'># We will give multiple reviews untill your satisfiction.</li>
                        <li className='mt-2'># We are very budget friendly.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose