import React from 'react';
import webBanner from '../../images/webBanner.png';
import { NavLink } from 'react-router-dom';

function WebBanner() {
    return (
        <div className="w-full h-screen z-0 bg-black bg-cover bg-center bg-gradient-to-tr from-purple-800 to-green-800">
            <img src={webBanner} alt="" className='w-full h-full object-cover fixed top-0 z-0 opacity-30 mix-blend-overlay' data-aos="zoom-out" data-aos-duration="3000" data-aos-easing="ease-in-sine" />
            <div className='px-16 py-48 relative w-full md:w-2/3 flex flex-col justify-center' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                <h1 className='text-slate-100 text-3xl md:text-4xl font-bold uppercase'>-Develop your website with us</h1>
                <h3 className='text-slate-100 text-xl font-light mt-5'>You can design and develop your website with us. We are ready to design and develop your website. You can transform your business into digital platform and We can help you to fulfil your vision..</h3>
                <NavLink to={'/contact'} className="mt-6"><button className='mt-6 bg-gradient-to-tr from-primary to-secondary px-8 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500 shadow-lg'>Contact Us</button></NavLink>
            </div>
        </div>
    )
}

export default WebBanner