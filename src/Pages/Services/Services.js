import React from 'react'
import web from '../../images/web.png';
import webDesign from '../../images/web_design.png';
import appImg from '../../images/app.png';
import seo from '../../images/seo.png';
import ecommerce from '../../images/ecommerce.png';
import { NavLink } from 'react-router-dom';

function Services() {
    return (
        <div className='bg-gray-900 px-8 py-10 bg-gradient-to-tr from-purple-800 to-green-800'>
            <h1 className='text-6xl font-bold text-gray-100 text-center my-12'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-gray-200 p-4 text-gray-950 rounded-xl  hover:shadow-xl'>
                    <div className='flex justify-center'>
                        <img src={web} alt="web development" className='h-28 w-28' />
                    </div>
                    <h2 className='text-2xl font-bold my-2'>Web Development</h2>
                    <p className='text-lg'>Develop robust online applications to suit your business needs and cater to your clients faithfully.</p>
                    <NavLink to={'/web-development'} className="mt-6"><button className='w-5/6 mt-6 bg-gradient-to-tr from-primary to-secondary px-8 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500'>View Details</button></NavLink>
                </div>
                <div className='bg-gray-200 p-4 text-gray-950 rounded-xl  hover:shadow-xl'>
                    <div className='flex justify-center'>
                        <img src={webDesign} alt="web development" className='h-28 w-28' />
                    </div>
                    <h2 className='text-2xl font-bold my-2'>Web Design</h2>
                    <p className='text-lg'> Create intuitive and visually appealing user interfaces and user experiences for websites and applications.</p>
                    <NavLink to={'/web-development'} className="mt-6"><button className='w-full mt-6 bg-gradient-to-tr from-primary to-secondary px-8 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500'>View Details</button></NavLink>
                </div>
                <div className='bg-gray-200 p-4 text-gray-950 rounded-xl  hover:shadow-xl'>
                    <div className='flex justify-center'>
                        <img src={appImg} alt="web development" className='h-28 w-28' />
                    </div>
                    <h2 className='text-2xl font-bold my-2'>Mobile App Develop</h2>
                    <p className='text-lg'>Developing innovative and native mobile apps for Android, iOS, BlackBerry and Windows platforms.</p>
                    <NavLink to={'/web-development'} className="mt-6"><button className='w-full mt-6 bg-gradient-to-tr from-primary to-secondary px-8 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500'>View Details</button></NavLink>
                </div>
                <div className='bg-gray-200 p-4 text-gray-950 rounded-xl  hover:shadow-xl'>
                    <div className='flex justify-center'>
                        <img src={ecommerce} alt="web development" className='h-28 w-28' />
                    </div>
                    <h2 className='text-2xl font-bold my-2'>E-commerce Web Development</h2>
                    <p className='text-lg'> Build your e-commerce website with us and expand your business with us.</p>
                    <NavLink to={'/web-development'} className="mt-6"><button className='w-full mt-6 bg-gradient-to-tr from-primary to-secondary px-8 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500'>View Details</button></NavLink>
                </div>
                <div className='bg-gray-200 p-4 text-gray-950 rounded-xl  hover:shadow-xl'>
                    <div className='flex justify-center'>
                        <img src={seo} alt="web development" className='h-28 w-28' />
                    </div>
                    <h2 className='text-2xl font-bold my-2'>Search Engine Optimization (SEO)</h2>
                    <p className='text-lg'> Optimizing websites to improve visibility, rankings, and organic traffic by implementing effective strategies and techniques.</p>
                    <NavLink to={'/web-development'} className="mt-6"><button className='w-full mt-6 bg-gradient-to-tr from-primary to-secondary px-8 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500'>View Details</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Services