import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import logo from '../../images/log2.png';

function Navbar() {

    let activeStyle = {
        color: "orange",
    };

    const [toggle, setToggle] = useState(false);

    return (
        <nav className=' bg-gray-300 sticky top-0 z-20'>
            <div className='flex justify-between px-6 py-3 text-gray-900 font-bold'>
                <div className='flex justify-center items-center pb-6 md:pb-0 pl-2 md:pl-0'>
                    <NavLink to="/" className='px-6'>
                        {/* <h1 className='ml-2 text-2xl font-bold uppercase'>Soft solver</h1> */}
                        <img src={logo} alt="soft solver and consultancy" className=' h-6 w-12'/>
                    </NavLink>
                </div>
                <div className={`flex flex-col md:flex-row md:items-center left-0 w-full md:w-auto font-semibold absolute md:static  bg-gray-300 duration-700 ${toggle ? 'top-20' : 'top-[-490px]'}`} onClick={() => setToggle(!toggle)}>
                    <NavLink to='/' className="px-12 md:px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400 uppercase"
                        style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>

                    <NavLink to='/why-us' className="px-12 md:px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400 uppercase"
                        style={({ isActive }) => isActive ? activeStyle : undefined}>Why us</NavLink>
                    <NavLink to='/about' className="px-12 md:px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400 uppercase"
                        style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>

                    <NavLink to='/contact' className="px-12 md:px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400 uppercase"
                        style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>

                    <NavLink to='/services' className="px-12 md:px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400 uppercase"
                        style={({ isActive }) => isActive ? activeStyle : undefined}>Services</NavLink>
                    <NavLink to='/career' className="px-12 md:px-3 py-1 hover:bg-gray-400 rounded-md hover:text-orange-400 uppercase"
                        style={({ isActive }) => isActive ? activeStyle : undefined}>Career</NavLink>
                </div>
                <div onClick={() => setToggle(!toggle)} className='md:hidden cursor-pointer absolute top-4 right-4'>
                    {
                        toggle ? <MdClose size={26} /> : <BiMenu size={26} />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar