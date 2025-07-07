import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';

const footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center '>
        <h2 className='text-xl font-semibold text-purple-500'>Sandeep Gupta</h2>

        <nav className='font-semibold flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            {name:"About", id:"about"},
            {name:"Skills", id:"skills"},
            {name:"Project", id:"project"},
            {name:"Education", id:"education"},
          ].map((item, index) => (
            <button
            key={index}
            onClick={() => handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}

            </button>
          ))}
        </nav>
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            {icon: <FaGithub/>, link:"https://github.com/Sandeepgpa"},
            {icon: <FaLinkedin/>, link:"https://www.linkedin.com/in/sandeepgpa/"},
            {icon: <FaTwitter/>, link:""},
            {icon: <FaInstagram/>, link:""},
            {icon: <FaFacebook/>, link:" "},
          ].map((item, index) =>(
            <a 
             key={index} 
             href={item.link}
             target='_blank'
             rel='noopener noreferrer'
             className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
            >{item.icon}</a>
          ))}
        </div>

        <p className='text-sm text-gray-400 mt-6 flex items-center justify-center'>
          <FaRegCopyright/>  Sandeep Gupta. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default footer