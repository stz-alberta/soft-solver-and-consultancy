import React from 'react';
import chairman from '../../images/sir.jpg'

function Team() {

    const members=[
        {name:"Syed Tauhid Zudori", des:"Chairman", Img:chairman},
        {name:"Syed Tauhid Zudori", des:"CEO", Img:chairman},
        {name:"Syed Tauhid Zudori", des:"Director", Img:chairman},
    ]

    return (
        <div className='my-16'>
            <h1 className='text-6xl font-bold text-center mb-12'>Our <span className='text-primary'>Team</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    members?.map((member, i)=><div key={i} className='w-full h-88 p-3 border-solid border-2 border-indigo-300 shadow-lg hover:shadow-2xl mb-8'>
                    <div>
                        <img src={member.Img} alt="" className='h-60 w-full'/>
                    </div>
                    <h3 className='text-center text-2xl text-gray-600 font-bold my-2'>{member.name}</h3>
                    <p className='text-center font-semibold text-xl text-gray-600'>{member.des}</p>
                </div>)
                }
            </div>
        </div>
    )
}

export default Team