import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from './Projects'

const Folio = () => {
  return (
    <div className=' min-h-screen hero_portfolio w-full pompiere-font overflow-hidden'>
      <div className='w-full flex justify-center items-center'>
        <Projects />
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Folio
