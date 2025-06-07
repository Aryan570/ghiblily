import Image from 'next/image'
import React from 'react'
import kiki from '@/../public/maybe_this_one.webp'
const About = () => {
  return (
    <>
      <section id='about_site' className='w-full flex justify-center items-center overflow-x-hidden z-20 bg-gray-900'>
        <div className='container max-w-6xl my-10 mx-auto flex flex-col-reverse lg:flex-row items-center justify-around p-4'>
          <div className='max-w-lg basis-2/3'>
            <p className='mb-6 text-3xl font-bold'>about this <span className='decoration-wavy underline decoration-1 underline-offset-2'>site</span></p>
            <p className=" mb-6 text-xl">
              If you&apos;ve seen the original version of this website from 2023, you know how much it has improved, while still staying true to its inspiration. I loved Studio Ghibli back then, and my admiration for it has only grown.
            </p>
            <p className="mb-6 text-xl">
              Studio Ghibli fills me with hope, motivating me to keep living, working hard, and cherishing the small things in life. I used to love evenings, but now I appreciate the silent afternoons more. It truly changed my perspective on life. A couple of years ago, I was listening to a Studio Ghibli piano playlist on YouTube when I came across an interesting conversation in the comment section:
            </p>
            <p className=" text-xl">
              <span className='font-bold decoration-wavy underline decoration-1 underline-offset-2'>Comment</span>: &quot;I wish I could live in the world of Studio Ghibli.&quot;
            </p>
            <p className='text-xl mb-6'><span className='font-bold decoration-wavy underline decoration-1 underline-offset-2'>Reply</span>: &quot;You know, you are in that world right now; all this beautiful scenery is inspired by our real world.&quot;</p>
            <p className="text-xl mb-6">
              A question for you: Rainy days, cloudy days, sunny days... which do you like? ...cloudy days? Oh, then we&apos;re alike.
            </p>
            <p className="text-xl">
              If you find me interesting and would like to know more about me or consider hiring me, feel free to reach out through the contact section.
            </p>
          </div>
          <div className='mb-4 lg:mb-0'>
            <Image className='rounded-lg w-full' src={kiki} width={400} height={400} alt='Picture_of_water' unoptimized />
          </div>
        </div>
      </section>
      {/* <div className='w-full flex justify-center items-center'><hr className="h-px max-w-6xl w-full mx-2 my-8 bg-[#ededed] border-0" /></div> */}
    </>
  )
}

export default About