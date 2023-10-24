"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const ProjectDisplay = () => {
  const arigato = <div>The tech stack at the Arigato Project consist primarily of :
    <pre className='font-Pompiere'>NextJS</pre>
    <pre className='font-Pompiere'>TailwindCSS</pre>
    <pre className='font-Pompiere'>MongoDB</pre></div>;

  const waitwhat = <div>The tech stack at the Arigato Project consist primarily of :
    <pre className='font-Pompiere'>TypeScript</pre>
    <pre className='font-Pompiere'>NextJS</pre>
    <pre className='font-Pompiere'>MongoDB</pre>
    <pre className='font-Pompiere'>UploadThing</pre>
    </div>;

  const newsapp = <div>The tech stack at the NewsApp Project consist primarily of :
    <pre className='font-Pompiere'>React</pre>
    <pre className='font-Pompiere'>NewsAPI</pre>
  </div>;

  const HandGestures = <div>The tech stack at the NewsApp Project consist primarily of :
    <pre className='font-Pompiere'>Python</pre>
    <pre className='font-Pompiere'>OpenCV</pre>
    <pre className='font-Pompiere'>MediaPipe</pre>
    Handware Component included: Arduino UNO,transistors,etc.
  </div>;
  const projects = [
    {
      id: 1,
      title: 'Arigato',
      description: `This is the E-commerce Website for selling the football Jerseys. This was Just an project with no intention to deploying, but Everything works! from shopping cart to payment gateway. To know more about my all project, please visit my GitHub. Link is in Contact section. `,
      image: '/arigato.webp',
      size: 'large',
    },
    {
      id: 2,
      title: 'NewsApp',
      description: 'This was the web application for all sorts of news, be it sports, entertainment, lifestyle. This was the project I did during the learning phase of React.',
      image: '/newsreal.webp',
      size: 'small',
    },
    {
      id: 3,
      title: 'GIF from Ocean Waves',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, lorem et efficitur placerat, ipsum lacus malesuada mauris.',
      image: '/oceanwaves.webp',
      size: 'small',
    },
    {
      id: 4,
      title: 'Hand Gesture Recognition Tool',
      description: 'This project aims to recognize and classify hand gestures using OpenCV and Python. The project can be used for applications such as sign language recognition, gesture-based computer control, and other human-computer interaction applications. This is just a small part of the big project of home automation, that me and my mates did in the college',
      image: '/realhand1.webp',
      size: 'large',
    },
    {
      id: 5,
      title: 'Wait..What',
      description: 'This is the notes making website. fully personalized. you can choose your own banner pictures. This was also my first typescript project. I personally use it for my notes. I just wanted to do something with UploadThing and shadcn-ui, so I did this project.',
      image: '/wait_real.jpg',
      size: 'small',
    },
    {
      id: 6,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, lorem et efficitur placerat, ipsum lacus malesuada mauris.',
      image: '/giphy1.webp',
      size: 'small',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const handleMouseEnter = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleMouseLeave = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-10 font-Pompiere">My <span className='text-emerald-400'>Projects</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative ${project.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100} height={100}
                className="h-auto w-full object-cover rounded-lg shadow-lg cursor-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {selectedProject === project.id && project.id!=3 && project.id!=6 && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 rounded-lg">
                  <div className="p-6 bg-white rounded-lg z-40 font-Pompiere">
                    <h3 className="text-xl font-semibold mb-4 text-emerald-400 underline">{project.title}</h3>
                    <p className="text-gray-600 text-lg">{project.description}</p>
                    {project.id === 1 && <div>{arigato}</div>}
                    {project.id === 2 && <div>{newsapp}</div>}
                    {project.id === 4 && <div>{HandGestures}</div>}
                    {project.id === 5 && <div>{waitwhat}</div>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDisplay;





