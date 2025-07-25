"use client"
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Github, Star } from 'lucide-react'
import himmel from '@/../public/Himmel_Dis.png'
import porco from '@/../public/porco026.jpg'
import soup from '@/../public/Soup_display.jpeg'
import marnie from '@/../public/marnie006.jpg'
import poppy from '@/../public/karigurashi001.jpg'
import rust from '@/../public/rust2.jpg'
import Link from 'next/link'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  if (ScrollTrigger.isTouch === 1) {
    ScrollTrigger.normalizeScroll(true);
  } else {
    ScrollTrigger.normalizeScroll(false);
  }

}

const Projects = () => {
  const horizontalSection = React.useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.horizontal-panel')
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: 'top top',
          end: () => "+=" + horizontalSection.current!.offsetWidth,
          markers: false,
          scrub: 0.5,
          invalidateOnRefresh: true,
          snap: 1 / (slides.length - 1),
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      })
    }, horizontalSection)
    return () => ctx.revert()
  }, [])
  return (
    <div className='flex h-screen' ref={horizontalSection}>
      <div className='relative flex justify-center items-center horizontal-panel'>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-44">
            <div className="relative md:scale-150 z-10">
              <Star className="absolute -top-4 -left-4 w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
              {/* <Heart className="absolute -bottom-3 -right-3 w-7 h-7 text-pink-400 fill-pink-400 animate-bounce" /> */}
              <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 z-10 ">
                <Image
                  src={himmel}
                  alt="Himmel_Preview_Image"
                  width={280}
                  height={280}
                  className="rounded-xl border-4 border-white shadow-lg"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
              </div>
            </div>
            <div className="relative text-center md:text-left max-w-md z-10 hero_portfolio p-4 rounded-xl rotate-1 hover:scale-[1.01] transition-transform duration-300 will-change-transform">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 relative inline-block decoration-wavy underline decoration-1 underline-offset-2">
                himmel
              </h1>
              <div className=" leading-relaxed mt-4 text-lg">
                <ul className='list-disc pl-4'>
                  <li>A real-time, turn-based 1v1 online game that you can play with your friend, featuring a server written in Rust and a frontend in NextJS.</li>
                  <li>Developed a multi-threaded server in Rust for concurrent game sessions.</li>
                  <li>Conducted load testing with k6, simulating over 1000 concurrent WebSocket connections to evaluate server scalability and identify performance bottlenecks.</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-6 justify-center md:justify-start">
                <Link className='hover:scale-110 transition-transform duration-300 ease-out' href="https://github.com/Aryan570/Himmel" target='_blank'>
                  <Github className='w-5 h-5' />
                </Link>
                <span className="inline-block h-3 w-3 rounded-full bg-purple-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-blue-300"></span>
              </div>
            </div>
          </div>
        </div>
        <Image className='w-full h-full object-cover' src={porco} width={400} height={400} alt='Image from Proco Rosso' priority/>
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
                  src={soup}
                  alt="Featured image"
                  width={280}
                  height={280}
                  className="rounded-xl border-4 border-white shadow-lg"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
              </div>
            </div>
            <div className="relative text-center md:text-left max-w-md z-10 hero_portfolio p-4 rounded-xl rotate-1 hover:scale-[1.01] transition-transform duration-300 will-change-transform">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 relative inline-block decoration-wavy underline decoration-1 underline-offset-2">
                soup
              </h1>
              <div className=" leading-relaxed mt-4 text-lg">
                <ul className='list-disc pl-4'>
                  <li>Real-time Smart Energy Monitoring System for tracking various electrical appliance parameters such as voltage, power, etc. The full report is available here.</li>
                  <li>The dashboard includes a safety feature that sends email notifications to the user in the event of abnormal parameters or if their budget is exceeded.</li>
                  <li>Data is collected using an Arduino UNO, transmitted to MongoDB, and presented to the user in real time.</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-6 justify-center md:justify-start">
                <Link className='hover:scale-110 transition-transform duration-300 ease-out' href="https://github.com/Aryan570/soup" target='_blank'>
                  <Github className='w-5 h-5' />
                </Link>
                <span className="inline-block h-3 w-3 rounded-full bg-purple-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-blue-300"></span>
              </div>
            </div>
          </div>
        </div>
        <Image className='w-full h-full object-cover' src={marnie} width={400} height={400} alt='Soup_project_background_image' quality={100} priority/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className='relative flex justify-center items-center horizontal-panel grain-fade'>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-44">
            <div className="relative md:scale-150 z-10">
              {/* Decorative elements */}
              <Star className="absolute -top-4 -left-4 w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
              {/* <Heart className="absolute -bottom-3 -right-3 w-7 h-7 text-pink-400 fill-pink-400 animate-bounce" /> */}
              <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 z-10 ">
                <Image
                  src={rust}
                  alt="Featured image"
                  width={280}
                  height={280}
                  className="rounded-xl border-4 border-white shadow-lg"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
              </div>
            </div>
            <div className="relative text-center md:text-left max-w-md z-10 hero_portfolio p-4 rounded-xl rotate-1 hover:scale-[1.01] transition-transform duration-300 will-change-transform">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 relative inline-block decoration-wavy underline decoration-1 underline-offset-2">
                http-rust
              </h1>
              <div className=" leading-relaxed mt-4 text-lg">
                <ul className='list-disc pl-4'>
                  <li>Implemented a multithreaded HTTP server in Rust, capable of serving static files and handling GET & POST requests.</li>
                  <li>Managed HTTP headers and connection lifecycles manually, correctly handling Content-Length parsing, persistent vs. close semantics (Connection: close), and appropriate status codes (200 OK, 201 Created, 404 Not Found)</li>
                  <li>gzip compression for payloads when the Accept-Encoding: gzip header is present</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-6 justify-center md:justify-start">
                <Link className='hover:scale-110 transition-transform duration-300 ease-out' href="https://github.com/Aryan570/http-rust" target='_blank'>
                  <Github className='w-5 h-5' />
                </Link>
                <span className="inline-block h-3 w-3 rounded-full bg-purple-300"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-blue-300"></span>
              </div>
            </div>
          </div>
        </div>
        <Image className='w-full h-full object-cover' src={poppy} width={400} height={400} alt='Himmel_background_image' quality={100} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
    </div>
  )
}

export default Projects