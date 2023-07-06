"use client"
import React from 'react'
import Image from 'next/image'
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax'
const About = () => {
  return (
    <div className='overflow-hidden text-gray-700'>
      <div className='flex relative justify-around '><Image className=' object-cover' src="/../public/sky.jpg" fill={true} alt='castle' quality={100} />
        <ParallaxProvider><Parallax translateX={['400px', '0px']}><Image className=' mt-6' src="/../public/castle.png" width={200} height={200} alt='castle' quality={100} /></Parallax></ParallaxProvider>
        <div className=''><div className=' relative font-Pompiere lg:text-3xl text-2xl items-center my-10 w-80 lg:w-96'>I&apos;m <span className='text-rose-600 '>Aryan</span>, an <span className='text-rose-600'>Electrical Engineering</span> undergraduate at National Institute of Technology, Jalandhar. Apart from college studies, 
        I do <span className='text-rose-600 '>Web Development</span> and practice <span className='text-rose-600 '>Data Structures &amp; Algorithms</span>. I&apos;m a big football and <span className='text-rose-600 '>Studio Ghibli</span> fan.
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
