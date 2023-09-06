import React from 'react';
import react_logo from '../../images/react-logo.png';
import js_logo from '../../images/js-logo.png';
import html_logo from '../../images/html-logo.png';
import css_logo from '../../images/css-logo.png';
import mongo_logo from '../../images/mongodb-logo.png';
import firebase_logo from '../../images/firebase-logo.png';
import tailwind_logo from '../../images/tailwind-logo.png';
import bootstrap_logo from '../../images/bootstrap-logo.png';


function Technologies() {

    const technologies = [
        { name: "React", logo: react_logo },
        { name: "JavaScript", logo: js_logo },
        { name: "HTML5", logo: html_logo },
        { name: "CSS3", logo: css_logo },
        { name: "Tailwind Css", logo: tailwind_logo },
        { name: "Bootstrap", logo: bootstrap_logo },
        { name: "MongoDB", logo: mongo_logo },
        { name: "Firebase", logo: firebase_logo }
    ]
    return (
        <section className='my-20 px-6'>
            <h1 className='text-5xl font-bold text-center'><span className='text-primary'>Technologies</span> we work with</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                {
                    technologies.map((tech, i) => <div key={i}
                        className='h-32 w-full border-solid border-2 border-indigo-300  p-2 rounded-lg'>
                        <div className='flex justify-center'>
                            <img src={tech.logo} alt="web development" className='h-20 w-20' />
                        </div>
                        <h3 className='text-center'>{tech.name}</h3>
                    </div>)
                }
            </div>
        </section>
    )
}

export default Technologies