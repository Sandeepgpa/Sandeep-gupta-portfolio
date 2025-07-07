import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import myImage from '../../assets/my-img.jpg';

const about = () => {
  return (
    <section id='about' className='py-4 px-[7vw] md:px[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 '>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leadign-tight'>Hi, I am</h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Sandeep Gupta.</h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8254ec] leading-tight'>
            <span className='text-white'>
              I am a <span className='text-[#8254ec]'>frontend Developer.</span>
            </span>
            {/* <ReactTypingEffect text={[
                'frontend Developer',
                'Web Developer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className='text-[#8254ec]'>{cursor}</span>
              )}
            ></ReactTypingEffect> */}
          </h3>

          <p className='text-base sm:text-lg md:text-lg mb-10 mt-8  text-gray-400 reading-relaxed'>
            Frontend Developer focused on building clean, responsive, and user-friendly web applications using React.js and Tailwind CSS. Passionate about writing efficient, maintainable code and creating seamless user experiences across devices.
          </p>

          {/*CV Download Section */}
          <a
            href='https://drive.google.com/file/d/1jxvsYnYKm65P8mdJLHWRvz9Ow3l1DdOY/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8254ec, #a855f7)',
              boxShadow: ''
            }}
          >DOWNLOAD CV</a>
        </div>

        {/* Profile Image Section*/}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <div className='w-48 h-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'>
            <img
              src={myImage}
              alt='Sandeep gupta'
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgb(130,69,236,0.5)]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default about