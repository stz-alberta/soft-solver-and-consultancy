import React from 'react'
import web from '../../images/web.png';
import webDesign from '../../images/web_design.png';
import seo from '../../images/seo.png';
import ecommerce from '../../images/ecommerce.png';
import consultancy from '../../images/consultancy.png';
import app from '../../images/app.png';
import { NavLink } from 'react-router-dom';

function Services() {
  const services = [
    { name: "Web Development", logo: web },
    { name: "Web Design", logo: webDesign },
    { name: "Ecommerce Web Development", logo: ecommerce },
    { name: "Search Engine Optimization (SEO)", logo: seo },
    { name: "Mobile App Development", logo: app },
    { name: "Consultancy Service", logo: consultancy },
  ]
  return (
    <section className='mt-16 p-6 shadow-2xl'>
      <h1 className='text-5xl font-bold text-center'>Our <span className='text-primary'>Services</span></h1>
      <div className='my-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">
          {
            services?.map((s, i) => <div key={i} className=' w-full bg-gradient-to-tl from-purple-200 to-gray-50 p-2 rounded-lg'>
              <div className='flex justify-center'>
                <img src={s.logo} alt="web development" className='h-28 w-28' />
              </div>
              <h3 className='text-center'>{s.name}</h3>
            </div>)
          }
        </div>
        <div className='px-4' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">
          <p className='text-secondary text-lg'>What's our duty?</p>
          <h1 className='text-2xl md:text-5xl font-bold text-gray-600 my-2 md:my-5'>You replace your order, We will do it</h1>
          <p className='text-lg text-gray-600'>Our passionate and talented team will provide you a better solution untill your satisfiction.</p>
          <NavLink to={"/services"}><button className='mt-6 bg-gradient-to-tr from-primary to-secondary px-8 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500 shadow-lg'>See More</button></NavLink>
        </div>
      </div>
    </section>
  )
}

export default Services