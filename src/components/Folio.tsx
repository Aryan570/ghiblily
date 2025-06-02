import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from '@/components/Projects'
import PlantAnimation from '@/components/Flower'
import Skills from '@/components/Skills'
import Intro from '@/components/CastleIntro'
import BlogPort from '@/components/Blogs3'
import { Arc2, Arc3 } from '@/components/Arc'

const Folio = () => {
  return (
    <div className=' min-h-screen hero_portfolio pompiere-font overflow-hidden'>
      <PlantAnimation />
      <Intro />
      {/* <Suspense fallback={<div>fetching the blogs...</div>}> */}
      <BlogPort />

      {/* </Suspense> */}
      <Skills />
      <Arc2 />
      {/* <div className='w-full flex justify-center items-center mt-16'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div> */}

      <div className='w-full flex justify-center items-center md:mt-16 mt-12'></div>
      <Projects />
      {/* <div className='w-full flex justify-center items-center mt-16'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div> */}
      <Arc3 />
      <About />
      <Arc2 />
      <Contact />
      <Footer />
    </div>
  )
}

export default Folio
