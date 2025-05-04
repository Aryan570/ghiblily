import Image from 'next/image'
import React from 'react'
import first_image from '@/../public/i_have_this_alr.webp'

const Projects = () => {
    return (
        <section id='projects' className='w-full min-h-screen flex flex-col justify-center items-center my-16 mx-4'>
            <div className='flex h-full flex-col justify-center items-center w-full max-w-6xl'>
                <div className='text-4xl mb-8'>
                    <p>Projects</p>
                </div>
                <div className=' flex flex-col w-full max-w-6xl rounded-lg overflow-hidden'>
                    <div className='relative h-full'>
                        <div className='absolute max-w-lg p-4 text-base md:text-lg'>
                            <p className='text-xl font-bold mb-2'>Himmel</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat minima officiis reprehenderit facilis magni tenetur cum, recusandae quo modi vero exercitationem eveniet laudantium sit itaque quia sequi officia dolore. Nobis quaerat fuga perspiciatis soluta nam sed dolorem asperiores officia accusantium!</p>
                        </div>
                        <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='project_1_mage' />
                    </div>
                    <div className='relative h-full'>
                        <div className='absolute max-w-lg p-4 text-base md:text-lg'>
                            <p className='text-xl font-bold mb-2'>Soup</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat minima officiis reprehenderit facilis magni tenetur cum, recusandae quo modi vero exercitationem eveniet laudantium sit itaque quia sequi officia dolore. Nobis quaerat fuga perspiciatis soluta nam sed dolorem asperiores officia accusantium!</p>
                        </div>
                        <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='project_1_mage' />
                    </div>
                    <div className='relative h-full'>
                        <div className='absolute max-w-lg p-4 text-base md:text-lg'>
                            <p className='text-xl font-bold mb-2'>Himmel</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat minima officiis reprehenderit facilis magni tenetur cum, recusandae quo modi vero exercitationem eveniet laudantium sit itaque quia sequi officia dolore. Nobis quaerat fuga perspiciatis soluta nam sed dolorem asperiores officia accusantium!</p>
                        </div>
                        <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='project_1_mage' />
                    </div>
                </div>
            </div>
            <div className='w-full max-w-6xl flex justify-center items-center'><hr className="h-px w-full mx-2 max-w-6xl my-8 bg-[#ededed] border-0" /></div>
        </section>
    )
}

export default Projects
