import React from 'react'
import whyImg from '../../images/whyImg.svg';
import delivery from '../../images/delivery.svg';
function WhyDetails() {
    return (
        <section className='px-2 md:px-12'>
            <div className='grid md:grid-cols-2 gap-8 mt-[-60px] shadow-xl z-20 px-4 bg-white rounded-lg' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl font-bold text-primary'>Build Your Website With Us</h1>
                    <p className='text-xl mt-4 text-gray-500'>We are ready to build up your website. We have expert and talented developer team. Contact with our team and place your order. We will do it untill your satisfaction. We can devlop personal portfolio website, e-commerce website, inventory management website etc.</p>
                </div>
                <div>
                    <img src={whyImg} alt="About us" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 shadow-sm z-20 px-4 bg-white rounded-lg my-16'>
                <div>
                    <img src={delivery} alt="About us" />
                </div>
                <div className='flex flex-col justify-center' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                    <h1 className='text-4xl font-bold text-primary'>Budget Friendly And Fastest Delivery</h1>
                    <p className='text-xl mt-4 text-gray-500'>We are very budget friendy and we are ready to provide you a quality work. We are commited to give you the best quality work.</p>
                    <p className='text-xl mt-4 text-gray-500'>Our team is very faster. We will give you the fastest delivery..</p>
                </div>
            </div>
        </section>
    )
}

export default WhyDetails