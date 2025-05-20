import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from '@/components/Projects'
// import Test from '@/components/Test'
import PlantAnimation from './Flower'
import RotatingCircle from './Rotating_skills'

const imageURLs = [
  '/rust.svg',
  '/c-plusplus.svg',
  'js.svg',
  'typescript-icon.svg',
  'react.svg',
  'nextjs-icon.svg',
  '/postgresql.svg',
  '/mongo.svg',
  'Neovim-mark.svg',
  'git_r.svg'
]


const Folio = () => {
  return (
    <div className=' min-h-screen hero_portfolio w-full pompiere-font overflow-hidden'>
      <PlantAnimation />
      <RotatingCircle imageURLs={imageURLs} spinDuration={30} size={500} />
      <div className='flex h-[300dvh] justify-center items-center bg-amber-200'>
        <Projects />
      </div>
      <div className='w-full flex justify-center items-center mt-16'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Folio
