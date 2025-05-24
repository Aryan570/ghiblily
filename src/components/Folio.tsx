import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from '@/components/Projects'
import PlantAnimation from './Flower'
import Skills from './Skills'

const Folio = () => {
  return (
    <div className=' min-h-screen hero_portfolio pompiere-font overflow-hidden'>
      <PlantAnimation />
      <div className='w-full flex justify-center items-center mt-16'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div>
      <Skills/>
      <div className='w-full flex justify-center items-center md:mt-16 mt-12'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div>
      <Projects />
      <div className='w-full flex justify-center items-center mt-16'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Folio
