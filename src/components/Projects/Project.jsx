import React, { useState } from 'react'
import newsWebReact from '../../assets/project-img/newsWeb-react.png'
import newsWeb from '../../assets/project-img/News hub.png'
import qrCodeGen from '../../assets/project-img/Qr-code.png'
import toDoLIst from '../../assets/project-img/toDo.png'
import amazoneInd from '../../assets/project-img/amazon.png'

const project = () => {

  const projects = [
    {
      id: 0,
      title: "News Web Using React",
      description:
        "Built a fully responsive news website using React and Tailwind CSS. Integrated a public news API to fetch real-time articles with category-based navigation, live search functionality for easy browsing..",
      image: newsWebReact,
      tags: ["HTML", "JavaScript", "React JS","Tailwind CSS", "API"],
      github: "https://github.com/Sandeepgpa/NewsHub_By_React",
      webapp: "https://news-hub-by-react.vercel.app/",
    },

    {id: 1,
      title: "QR Code Generater",
      description:
        "Developed a QR Code Generator using HTML, CSS, and JavaScript. Users can input text or URLs to generate a QR code and download it instantly with a simple, responsive interface.",
      image:qrCodeGen,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sandeepgpa/QR-Code-Generater",
      webapp: "https://qrcodemakker.netlify.app/",
    },

    {id: 2,
      title: "News-Hub",
      description:
        "Developed a news website News Hub using HTML, CSS, and JavaScript with category-based navigation, live search functionality, and a clean, user-friendly UI.",
      image: newsWeb,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Sandeepgpa/News-Hub",
      webapp: "https://newshouse.netlify.app/",
    },

    {id: 3,
      title: "To Do List",
      description:
        "Developed a To-Do List web app using HTML, CSS, and JavaScript with local storage to save tasks persistently. Implemented features to add, delete, and edit tasks as completed.",
      image: toDoLIst,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sandeepgpa/To-Do-List-Project",
      webapp: "https://todolistproject-two.vercel.app/",
    },

    {id: 4,
      title: "Amazon.in-clone",
      description:
        "clone a User Interface of Amazone India. by Using HTML and CSS  ",
      image: amazoneInd,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Sandeepgpa/Amazon.in-Clone",
      webapp: "",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = (project) =>{
    setSelectedProject(null);
  };

  return (
    <section 
     id='project' 
     className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
    >

      {/*project Heading Section */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>PROJECTS</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>

      {/*project Cart */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className='border border-white backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
          >
            <div className='p-2'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover'></img>
            </div>
            <div className='p-6'>
              <h3 className='text-2xl2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-500 mb-4 pt-4 line-clamp-3'>{project.description}</p>
              <div className='mb-4'>
                {project.tags.map ((tag, index) => (
                  <span 
                  key={index}
                  className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                  {tag}  
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4'>
          <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
            <div className='flex justify-end p-4'>
              <button
              onClick={handleCloseModal}
              className='text-white text-3xl font-bold hover:text-purple-500'>
                &times;
              </button>
            </div>
            <div className='flex flex-col'>
              <div className='w-full flex justify-center bg-gray-900 px-4'>
                <img
                 src={selectedProject.image} 
                 alt={selectedProject.title}
                 className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl'>

                </img>
              </div>
              <div className='lg:p-6 p-6'>
                <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>{selectedProject.title}</h3>
                <p className='text-gray-400 mb-6 lg:text-sx'>{selectedProject.description}</p>
                <div className='flex flex-wrap gap-2 mb-2'>
                  {selectedProject.tags.map ((tag, index) => (
                  <span 
                  key={index}
                  className=' bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1'
                  >
                  {tag}  
                  </span>
                ))};
                </div>
                <div className='flex gap-4'>
                  <a
                    href={selectedProject.github} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:pt-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-1/2 bg-purple-600 hover:bg-purple-800 text-gray-400 lg:px-6 lg:pt-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'
                  >
                    Demo
                  </a>
                </div> 
              </div>
            </div>
          </div>
        </div>
      )};
    </section>
  )
};

export default project