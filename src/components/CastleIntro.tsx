"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import castle from '@/../public/castle.png'
import Image from 'next/image';
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Intro = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const box = boxRef.current;
      if (!section || !box) return;
      gsap.fromTo(
        box,
        { xPercent: 30 },
        {
          xPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'center top',
            scrub: true,
            markers: false,
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className='relative h-[100dvh] md:h-[60dvh] bg-gray-900 text-white flex items-center justify-center overflow-hidden'
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div
          ref={boxRef}
          className="w-full md:w-[65%] h-64 md:h-[70%] bg-gradient-to-br from-emerald-600 to-teal-800 rounded-2xl shadow-xl flex items-center justify-center p-4 text-white text-3xl font-bold flex-shrink-0 transform-gpu "
        >
          <Image src={castle} width={300} height={300} alt='castle-from-howl' />
        </div>
        <div className="w-full md:w-[35%] text-center md:text-left p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg text-white flex-shrink-0">
          {/* <h2 className="text-3xl font-bold mb-4">Unique Section Title</h2> */}
          <p className="text-sm md:text-lg leading-relaxed opacity-80 text-left">
            My name is Aryan. I was bitten by a radioactive spider. And for like a few weeks, I&apos;ve been the one and only Spider-Man. I think you know the rest. I saved a bunch of people, fell in love, saved the city, and then I saved the city again... and again and again and again. And I, uh...
          </p>
          <p className="text-sm md:text-lg leading-relaxed text-left">
            No, for real, I&apos;m <span className='text-rose-500 font-bold'>Aryan</span> from Mukerian, Punjab, India. I graduated from <span className='decoration-wavy underline decoration-1 underline-offset-2 text-rose-500 font-bold'>NIT Jalandhar</span> with a degree in Electrical Engineering in 2024. I fell in love with <span className='decoration-wavy underline decoration-1 underline-offset-2 text-rose-500 font-bold'>programming</span> during my college years and have been <span className='decoration-wavy underline decoration-1 underline-offset-2 text-rose-500 font-bold'>programming</span> ever since. Besides all that, I love <span className='decoration-wavy underline decoration-1 underline-offset-2 text-rose-500 font-bold'>football</span> and enjoy watching animated movies, mainly from <span className='decoration-wavy underline decoration-1 underline-offset-2 text-rose-500 font-bold'>Pixar</span> and <span className='decoration-wavy underline decoration-1 underline-offset-2 text-rose-500 font-bold'>Studio Ghibli</span>. I could go on talking about the things I love, but I have my blog for that, so check it out.
          </p>
          {/* <p className="mt-4 text-sm opacity-80">
            It&apos;s built to be placed anywhere in your application, entirely on its own!
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;