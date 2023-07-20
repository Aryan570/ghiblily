import Image from 'next/image'
import React from 'react'
const MySkills = () => {
  return (
    <div id="Skills" className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex  font-Pompiere font-medium text-3xl justify-center mt-16 mb-6  text-gray-700'>My<span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400'>&nbsp;Expertise</span></div>
      <section className='relative'>
        <div className=' grid lg:h-[400px] lg:grid-cols-3 grid-rows-[200px_minmax(200px,_1fr)_200px] gap-1 -ml-1.5 font-Pompiere lg:text-2xl sm:text-2xl text-xl overflow-hidden '>
          {/* The first grid element */} <div className=" rounded-2xl overflow-hidden relative border-2 w-full lg:h-80"><Image className='w-full absolute object-cover contrast-[0.7]' src="/kiki1.webp" alt='bg-check1' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="leftside flex justify-center text-center p-4 absolute">
              <div className='flex justify-center absolute items-center text-white '><Image className='mr-2 saturate-0' src="/cpp.png" alt='C++' width={50} height={50} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />Software Development </div>
              <p className='mt-16 text-white'>I&apos;m proficient in C++ and very much experienced with Data Structuces &amp; Algorithms. I Have done 900+ Questions on LeetCode.</p></div></div>
          {/* The second grid element */} <div className=" rounded-2xl overflow-hidden relative border-2 w-full lg:h-80"><Image className='w-full absolute object-cover contrast-[0.7]' src="/seiji.webp" alt='bg-check1' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="leftside flex justify-center text-center p-4 absolute">
              <div className='flex justify-center absolute items-center text-white '><Image className='mr-2 saturate-0' src="/Next.png" alt='Nextjs' width={70} height={70} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />Web Development </div>
              <p className='mt-16 text-white'>I like to code things from scratch, and enjoy bringing ideas to life in the browser. I&apos;m experienced in using Html, CSS, <span>TailwindCSS</span>, JS, React and NextJS .</p></div></div>
          {/* The third grid element */} <div className=" rounded-2xl overflow-hidden relative border-2 w-full lg:h-80"><Image className='w-full  absolute object-cover contrast-[0.7]' src="/princess1.webp" alt='bg-check1' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="leftside flex justify-center absolute text-center p-4 ">
              <div className='flex justify-center absolute items-center text-white '><Image className='mr-2 saturate-0' src="/resolve.png" alt='resolve' width={50} height={50} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />Other Stuff....... </div>
              <p className=' mt-16 text-white'>I possess some knowledge in machine learning and video editing and am actively learning and gaining experience in these fields.</p></div></div>
        </div>
      </section>
    </div>
  )
}
export default MySkills
