import Image from 'next/image'
import React from 'react'
import kiki from '@/../public/maybe_this_one.webp'
const About = () => {
  return (
    <>
      <section id='about_site' className='w-full flex justify-center items-center overflow-x-hidden z-20'>
        <div className='container max-w-6xl my-10 mx-auto flex flex-col-reverse lg:flex-row items-center justify-around p-4'>
          <div className='max-w-md'>
            <p className='mb-6 text-3xl'>About this <span className='decoration-wavy underline decoration-1 underline-offset-2'>Site</span></p>
            <p className=" mb-6 text-xl">
              So, I decided to do something related to Web Development in the summer of 2023, and what&apos;s better than creating your portfolio website? Well, I thought about it and wanted to make something that reflects me and the things I love. You might have an idea by now that I&apos;m a big Studio Ghibli fan. I decided to make a hybrid Studio Ghibli & Portfolio Website.
            </p>
            <p className="mb-6 text-xl">
              This website was made using NextJS, TailwindCSS, and many other react libraries. This may not be the best website in terms of design because I was not following any particular design nor I had any design idea in my mind at the time. This was meant to be something other than professional. The idea was to introduce you to this magical world of Ghibli and myself.
            </p>
            <p className="text-xl">
              I could have effortlessly crafted a professional portfolio, but I strongly believe in showcasing my authentic self,  and at the moment of building this website, my entire inspiration stems from the enchanting world of Ghibli. I may redesign the website in the future. But for now, I fulfilled my purpose of making a Studio Ghibli-inspired portfolio. Give me your valuable suggestions and tell me your favorite Studio Ghibli Movie. via Contact.
            </p>
          </div>
          <div className='mb-4 lg:mb-0'>
            <Image className='rounded-lg w-full' src={kiki} width={400} height={400} alt='Picture_of_water' unoptimized />
          </div>
        </div>
      </section>
      <div className='w-full flex justify-center items-center'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div>
    </>
  )
}

export default About