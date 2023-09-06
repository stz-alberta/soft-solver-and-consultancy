import React from 'react'
import webTeam from '../../images/team.svg'

function WebDescription() {
    return (
        <section className='px-2 md:px-12'>
            <div className='grid md:grid-cols-2 gap-8 mt-0 md:mt-[-60px] shadow-lg px-4 bg-white rounded-lg' data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl font-bold text-primary'>Website And Feature</h1>
                    <p className='text-xl mt-4 text-gray-500'>We design and develop any types of website. We develop seo frindly website for e-commerce business. Besides, We are ready to design and develop website for any types of organizations. You can also develop personal website with us.</p>
                    <p className='text-xl mt-4 font-semibold text-secondary'>You name it, we will do it..</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={webTeam} alt="our team" className='w-full h-5/6' />
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 my-16 shadow-sm px-4 bg-gray-900 rounded-lg' data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                <div className='flex justify-center items-center'>
                    <img src={webTeam} alt="our team" className='w-full h-5/6' />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl font-bold text-primary'>Services With Your Order</h1>
                    <p className='text-xl mt-4 text-slate-100'>Our team is ready to fulfil your satisfaction. We will give you multiple time review untill it won't be perfect.</p>
                    <p className='text-xl mt-4 text-slate-100'>We are ready to give you any kinds of support in any time. You just contact with us.</p>
                    <p className='text-xl mt-4 font-semibold text-secondary'>Your satisfaction is our pleasure.</p>
                </div>

            </div>
        </section>
    )
}

export default WebDescription