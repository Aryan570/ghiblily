"use client"
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
import first_image from '@/../public/i_have_this_alr.webp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const horizontalSection = React.useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.horizontal-panel')
      const totalWidth = (slides.length - 1) * 100
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: 'top top',
          end: () => `+=${totalWidth}%`,
          markers: false,
          scrub: 0.5,
          invalidateOnRefresh: true,
          snap: 1 / (slides.length - 1),
          anticipatePin: 1,
        },
      })
    }, horizontalSection)
    return () => ctx.revert()
  }, [])
  return (
    <section id='projects' className='w-full h-full flex sticky' ref={horizontalSection}>
        <div className='relative horizontal-panel'>
          <div className='absolute max-w-lg p-4 text-base md:text-lg'>
            <p className='text-xl font-bold mb-2'>Himmel</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat minima officiis reprehenderit facilis magni tenetur cum, recusandae quo modi vero exercitationem eveniet laudantium sit itaque quia sequi officia dolore. Nobis quaerat fuga perspiciatis soluta nam sed dolorem asperiores officia accusantium!</p>
          </div>
          <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='project_1_mage' />
        </div> 
        <div className='relative horizontal-panel'>
          <div className='absolute max-w-lg p-4 text-base md:text-lg'>
            <p className='text-xl font-bold mb-2'>Soup</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat minima officiis reprehenderit facilis magni tenetur cum, recusandae quo modi vero exercitationem eveniet laudantium sit itaque quia sequi officia dolore. Nobis quaerat fuga perspiciatis soluta nam sed dolorem asperiores officia accusantium!</p>
          </div>
          <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='project_1_mage' />
        </div>
        <div className='relative horizontal-panel'>
          <div className='absolute max-w-lg p-4 text-base md:text-lg'>
            <p className='text-xl font-bold mb-2'>http-rust</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat minima officiis reprehenderit facilis magni tenetur cum, recusandae quo modi vero exercitationem eveniet laudantium sit itaque quia sequi officia dolore. Nobis quaerat fuga perspiciatis soluta nam sed dolorem asperiores officia accusantium!</p>
          </div>
          <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='project_1_mage' />
        </div>
    </section>
  )
}

export default Projects