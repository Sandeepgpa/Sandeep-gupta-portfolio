import React from 'react'
import muLogo from '../../assets/Edu-img/mu-logo.jpeg';
import mhLogo from '../../assets/Edu-img/MH-logo.svg'

const eduaction = () => {

  const education = [
    {
      id: 0,
      img: muLogo,
      school: "Vikas College Of Arts Science & Commerce, University of Mumbai",
      date: "July 2022 - June 2025",
      grade: "7.25 CGPA",
      desc: "I have successfully completed my Bachelor’s degree in BScIT (Bachelor of Science in Information Technology). During the course, I gained a strong foundation in programming, databases, networking, and software development. This academic experience has equipped me with both technical knowledge and problem-solving skills essential for the IT industry.",
      degree: "Bachelor of Science in Information Technology - B.Sc-IT",
    },
    {
      id: 1,
      img: mhLogo,
      school: "Swami Vivekanand Vidyalaya & Kanishtha Maha Vidyalaya, Mumbai",
      date: "May 2020 - March 2022",
      grade: "47%",
      desc: "I completed my class 12 education from Swami Vivekanand Vidyalaya, under the HSC board, where I studied Physics, Chemistry, Mathematics, and Biology (PCMB).",
      degree: "HSC(XII) - PCMB",
    },
    {
      id: 3,
      img: mhLogo,
      school: "Swami Vivekanand Vidyalaya & Kanishtha Maha Vidyalaya, Mumbai",
      date: "April 2020",
      grade: "67%",
      desc: "I completed my class 10 education from Swami Vivekanand Vidyalaya, under the SSC board, where I Complete my Secondary School.",
      degree: "SSC(X)",
    },
  ];

  return (
    <section id="education"
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative clip-path-custom-3' >

      {/*Education Heading */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>EDUCATION</h2>
        <div className='w-30 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>My education has been a journey of learning and development. Here are the details of my academic background.</p>
      </div>

      {/*Education Timeline */}
      <div className='relative'>

        {/*Vertical Line */}
        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-[93%]'></div>
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
          >
            <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10'>
              <img
                src={edu.img}
                alt={edu.school}
                className='w-full h-full object-cover rounded-full'
              />
            </div>

            <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
              <div className='flex items-center space-x-6'>
                <div className='w-16 h-16 bg-white rounded-md overflow-hidden'>
                  <img 
                    className='w-full h-full object-cover'
                    src={edu.img}
                    alt={edu.school} 
                  />
                </div>

                <div className='flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl sm:text-2xl font-semibold text-white'>
                      {edu.degree}
                    </h3>
                    <h4 className='text-md sm:text-sm text-gray-300'>
                      {edu.school}
                    </h4>
                  </div>

                  <p className='text-sm text-gray-500 mt-2'>{edu.date}</p>
                </div>
              </div>

              <p className='mt-4 text-gray-400 font-bold'>Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))};
      </div>
    </section>
  )
}

export default eduaction