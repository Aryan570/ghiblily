import Image from 'next/image'
import React from 'react'
import first_image from '@/../public/i_have_this_alr.webp'

const Projects = () => {
    return (
        <section id='projects' className='w-full' data-scroll-section>
            <div className='text-4xl mb-8 text-center pt-16'>
                <p>Projects</p>
            </div>
            <div className='flex w-full overflow-hidden' data-scroll data-scroll-direction="horizontal">
                <div className='flex gap-8 px-4'>
                    <div className='relative w-[800px] h-[500px] flex-shrink-0' data-scroll data-scroll-speed="3">
                        <div className='absolute max-w-lg p-4 text-base md:text-lg z-10'>
                            <p className='text-xl font-bold mb-2'>Himmel</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <Image 
                            className='w-full h-full object-cover rounded-lg' 
                            src={first_image} 
                            width={800} 
                            height={500} 
                            alt='project_1_image' 
                        />
                    </div>
                    
                    <div className='relative w-[800px] h-[500px] flex-shrink-0' data-scroll data-scroll-speed="3">
                        <div className='absolute max-w-lg p-4 text-base md:text-lg z-10'>
                            <p className='text-xl font-bold mb-2'>Soup</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <Image 
                            className='w-full h-full object-cover rounded-lg' 
                            src={first_image} 
                            width={800} 
                            height={500} 
                            alt='project_2_image' 
                        />
                    </div>
                    
                    <div className='relative w-[800px] h-[500px] flex-shrink-0' data-scroll data-scroll-speed="3">
                        <div className='absolute max-w-lg p-4 text-base md:text-lg z-10'>
                            <p className='text-xl font-bold mb-2'>Himmel</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <Image 
                            className='w-full h-full object-cover rounded-lg' 
                            src={first_image} 
                            width={800} 
                            height={500} 
                            alt='project_3_image' 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects