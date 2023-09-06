import React from 'react';
import banner from '../../images/banner.jpg';
import { NavLink } from 'react-router-dom';



function Banner() {
    return (
        <header>
            <div className="w-full h-screen bg-black bg-cover bg-center relative bg-gradient-to-tr from-purple-800 to-green-800">
                <img src={banner} alt="" className='w-full h-full object-cover absolute opacity-50 mix-blend-overlay' data-aos="zoom-out" data-aos-duration="3000" data-aos-easing="ease-in-sine" />
                <div className='px-6 py-48 relative w-full md:w-2/3 flex flex-col justify-center' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                    <h1 className='text-slate-100 text-3xl md:text-4xl lg:text-5xl font-bold uppercase'>Soft Solver and Consultancy</h1>
                    <h3 className='text-slate-100 text-xl font-light mt-5'>Grow up your business and transform your digital vision into reality.We are ready to provide you a better solution for app and web development, ecommerce web development, search engine optimization (seo) etc.</h3>
                    <NavLink to={'/contact'} className="mt-6"><button className='mt-6 bg-gradient-to-tr from-primary to-secondary px-8 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500 shadow-lg'>Contact Us</button></NavLink>
                </div>
            </div>
        </header>
    )
}

export default Banner