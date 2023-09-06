import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3qi8fl9', 'template_xwrtk3j', form.current, 'Cs-CMHdNv8wADgZ6K')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Message Sent");
          
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='py-16 px-12 bg-gray-900 bg-gradient-to-tr from-purple-800 to-green-800'>
      <h1 className='text-6xl font-bold text-center text-gray-100 mb-12'>Contact US</h1>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center bg-gray-200 px-6 py-4 rounded-xl shadow-xl'>
          <h1 className='text-4xl text-primary font-bold text-center mb-4'>-Let's Talk!</h1>
          <p className='text-lg text-gray-900 mb-6'>Want to learn more? Have any questions? Fill in the form below and we will get back to you as soon as we can. </p>
          <h3 className='text-2xl text-gray-900 font-semibold mb-2'>Address</h3>
          <p className='text-xl text-gray-900 mb-6'>10408 92 Street NW, Edmonton, AB, T5H1T7, Canada</p>

          <h3 className='text-2xl text-gray-900 font-semibold mb-2'>Phone Number</h3>
          <p className='text-xl text-gray-900 mb-6'>780-707-2835</p>

          <h3 className='text-2xl text-gray-900 font-semibold mb-2'>Email</h3>
          <p className='text-xl text-gray-900 mb-6'>zuhori@ualberta.ca</p>
        </div>
        <div className='bg-gray-200 px-6 py-12 rounded-xl shadow-xl'>
        <form ref={form} onSubmit={sendEmail} className='w-full'>
            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" name="user_name" className="input input-bordered w-full"/>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="user_email" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Phone Number</span></label>
              <input type="text" name="user_phone" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea name="message" className="textarea textarea-bordered w-full" placeholder='Write which service do you want...'></textarea>
            </div>
            <div className='flex justify-center'>
              <input className='mt-6 bg-gradient-to-tr from-primary to-secondary px-16 md:px-32 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 font-bold uppercase text-gray-500 shadow-lg' value="Send" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact