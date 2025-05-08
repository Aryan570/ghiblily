import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Test from '@/components/Test'

const Folio = () => {
  return (
    <div className=' min-h-screen hero_portfolio w-full pompiere-font overflow-hidden'>
      <Test />
      <div className='flex h-[300vh] justify-center items-center'>
        <Projects />
      </div>
      <div className='w-full flex justify-center items-center'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Folio
