
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hgxikuj', 'template_sv5f9ek', form.current, 'Li8wTN_qO8Gt4tJNw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='flex justify-center  bg-blue-950 h-screen px-2 sm:px-0 '>
        <div className='w-[400px] h-[300px] mt-10 border border-white sm:border-black rounded px-2'>
        <form ref={form} onSubmit={sendEmail}>
      <label className='block text-xl text-white'>Name</label>
      <input type="text" name="from_name" placeholder='Enter Name' className='block w-full px-2 py-1 mt-2 mb-2 rounded' />
      <label className='block text-xl text-white'>Email</label>
      <input type="email" name="from_email" placeholder='Enter Email' className='block w-full px-2 py-1 mt-2 mb-2 rounded' />
      <label className='block text-xl text-white'>Message</label>
      <textarea name="message" placeholder='Message' className='block px-2 rounded mt-2 mb-2' />
      <input type="submit" value="Send" className='block bg-black text-white px-4 py-1 rounded w-full' />
    </form>
        </div>
    </div>
  
  );
};

export default Contact