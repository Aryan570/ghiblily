"use client"
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
import first_image from '@/../public/i_have_this_alr.webp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Star } from 'lucide-react'
import tmp_image from '@/../public/banner.jpg'

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
      <div className='relative flex justify-center items-center horizontal-panel'>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-44">
            <div className="relative md:scale-150 z-10">
              <Star className="absolute -top-4 -left-4 w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
              {/* <Heart className="absolute -bottom-3 -right-3 w-7 h-7 text-pink-400 fill-pink-400 animate-bounce" /> */}
              <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 z-10 ">
                <Image
                  src={tmp_image}
                  alt="Featured image"
                  width={280}
                  height={280}
                  className="rounded-xl border-4 border-white shadow-lg"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
              </div>
            </div>
            <div className="relative text-center md:text-left max-w-md z-10 hero_portfolio p-4 rounded-xl rotate-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 relative inline-block">
                Himmel
              </h1>
              <p className=" leading-relaxed mt-4 text-lg">
                This is a lovely description about this image. The floating elements create a playful, cute aesthetic
                without using a card design. The subtle decorations add character!
              </p>
              <div className="flex gap-2 mt-6 justify-center md:justify-start">
                <span className="inline-block h-3 w-3 rounded-full bg-pink-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-purple-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-blue-300"></span>
              </div>
            </div>
          </div>
        </div>
        <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='Himmel_background_image' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className='relative flex justify-center items-center horizontal-panel'>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-44">
            <div className="relative md:scale-150 z-10">
              <Star className="absolute -top-4 -left-4 w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
              {/* <Heart className="absolute -bottom-3 -right-3 w-7 h-7 text-pink-400 fill-pink-400 animate-bounce" /> */}
              <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 z-10 ">
                <Image
                  src={tmp_image}
                  alt="Featured image"
                  width={280}
                  height={280}
                  className="rounded-xl border-4 border-white shadow-lg"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
              </div>
            </div>
            <div className="relative text-center md:text-left max-w-md z-10 hero_portfolio p-4 rounded-xl rotate-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 relative inline-block">
                http-rust
              </h1>
              <p className=" leading-relaxed mt-4 text-lg">
                This is a lovely description about this image. The floating elements create a playful, cute aesthetic
                without using a card design. The subtle decorations add character!
              </p>
              <div className="flex gap-2 mt-6 justify-center md:justify-start">
                <span className="inline-block h-3 w-3 rounded-full bg-pink-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-purple-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-blue-300"></span>
              </div>
            </div>
          </div>
        </div>
        <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='Himmel_background_image' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className='relative flex justify-center items-center horizontal-panel'>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-44">
            <div className="relative md:scale-150 z-10">
              {/* Decorative elements */}
              <Star className="absolute -top-4 -left-4 w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
              {/* <Heart className="absolute -bottom-3 -right-3 w-7 h-7 text-pink-400 fill-pink-400 animate-bounce" /> */}
              <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 z-10 ">
                <Image
                  src={tmp_image}
                  alt="Featured image"
                  width={280}
                  height={280}
                  className="rounded-xl border-4 border-white shadow-lg"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
              </div>
            </div>
            <div className="relative text-center md:text-left max-w-md z-10 hero_portfolio p-4 rounded-xl rotate-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 relative inline-block">
                Soup
              </h1>
              <p className=" leading-relaxed mt-4 text-lg">
                This is a lovely description about this image. The floating elements create a playful, cute aesthetic
                without using a card design. The subtle decorations add character!
              </p>
              <div className="flex gap-2 mt-6 justify-center md:justify-start">
                <span className="inline-block h-3 w-3 rounded-full bg-pink-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-purple-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-blue-300"></span>
              </div>
            </div>
          </div>
        </div>
        <Image className='w-full h-full object-cover' src={first_image} width={400} height={400} alt='Himmel_background_image' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
    </section>
  )
}

export default Projects