import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendForm('service_3u1ghk9', 'template_tvgbyvd', form.current, '2w4PFTPRqLjmPMbG_')
     .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
      
      }, (error) => {
          console.log(error.text);
          toast.error('Error sending message. Please try again.');
    
      });
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline underline border-gray-500">
            Contact
          </p>
          <p className="mt-1">Submit the form below to get in touch with me...</p>
        </div>

        <div className=" flex justify-center items-center">
            <form className=" flex flex-col w-full md:w-1/2" ref={form} onSubmit={sendEmail}>

            <label>Name</label>
            <input 
            className=" p-2 mb-3 bg-transparent border-2 rounded-md text-white focus:outline-none" 
            type="text" 
            name="to_name"
            placeholder="Enter your name" 
             required
            />

            <label>Email</label>
            <input 
            className="mb-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
            type="email" 
            name="from_name" 
            placeholder="Enter your email"
             required
            />
            
            <label>Message</label>
            <textarea  
            className="mb-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
            name="message" 
            placeholder="Enter your message"
            rows="10"
             required
            />

            <input
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 
             mx-auto flex items-center rounded-md hover:scale-110 duration-300" 
            type="submit" 
            value="Send" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


