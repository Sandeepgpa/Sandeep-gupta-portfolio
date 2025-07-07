import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

const contact = () => {

  const form = useRef();
  const [isSend, setIsSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_pvknrkc",
      "template_1u6d8nc",
      form.current,
      "3lE_C89_J2w9K9Vhh"
    )
    .then(() =>{
      setIsSend(true);
      form.current.reset();
      toast.success("Message Send Successfull! ",{
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
      });
    },
    (error) => {
      toast.error("Error Sending Message.", error);
      toast.error("Failed to Send Message. Please Try Again",{
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
      });
    }
   )
  };
  
  return (
    <section
     id='contact'
     className='flex flex-col items-center justify-center py-20 px-[10vw] md:px-[7vw] lg:px-[20vw]'
    >
      <ToastContainer/>

      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'> CONTACT </h2>
        <div className='w-30 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>Love to hear from you—reach out for any opportunities or questions!</p>
      </div>

      {/*Contact Form */}
      <div className='mt-8 w-[90%] max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>Connect With Me </h3>

        <form ref={form} onSubmit={sendEmail} className='mt-4 flex-col space-y-4'>
          <input type="email" name="user_email" placeholder='Your Email' required 
           className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          
          <input type="text" name="user_name" placeholder='Your Name' required 
           className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />

          <input type="text" name="user_subject" placeholder='Subject' required 
           className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />

          <textarea name="message" placeholder='Message' rows="4"
           className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'>
          </textarea>

          <button type="submit"
           className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'
          >
            Send
          </button>
        </form>
      </div>

     </section>
  )
}

export default contact