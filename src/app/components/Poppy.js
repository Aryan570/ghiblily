'use client'
import { useEffect, useState } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import Image from 'next/image';
const MyComponent = () => {

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDurations, setAnimationDurations] = useState([]);
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  useEffect(() => {
    if (isAnimating) {
      const durations = Array.from({ length: 5 }, () => getRandomDuration());
      setAnimationDurations(durations);
    }
  }, [isAnimating]);

  const getRandomDuration = () => {
    return `${(Math.random() * 1.5 + 0.5).toFixed(2)}s`;
  };
  const { play, pause, playing, load } = useGlobalAudioPlayer();
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSplash]);
  useEffect(() => {
    load('/Ghibli_real.mp3', {
      loop:true,
      html5: true,
      format: 'mp3'
    });
  }, [load])

  const handlePlayPause = () => {
    if (playing) {
      pause()
    } else {
      play()
    }
    setIsAnimating(!isAnimating)
  }


  const handleEnter = () => {
    setShowSplash(false);
    if (!playing) play();
    setIsAnimating(!isAnimating)
  };


  return (
    <>
      <div className='right-7 bottom-7 fixed z-50'>
        <button
          className={`md:w-12 md:h-12 w-9 h-9 shadow-xl border-2 border-gray-100 flex items-center justify-center rounded-full hover:bg-gray-100 hover:text-gray-800 focus:outline-none ${playing ? 'bg-white text-black' : 'bg-white text-black'
            }`}
          onClick={handlePlayPause}
        >
          {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-[2px] bg-slate-900  mx-[1px] ${isAnimating ? 'music-bars-animate' : ''
              }`}
            style={{ animationDuration: isAnimating ? animationDurations[index] : '0s' }}
          ></div>
        ))}
        </button>
      </div>
      <div className={`fixed flex items-center justify-around inset-0  transition-opacity ${showSplash ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`}>
        <Image className='object-cover contrast-75' src="/yesterday2.webp" alt='Mainpage' fill={true} quality={100} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
        <div className={` rounded-full z-10 p-8 ${showSplash ? 'animate-fade-in' : 'animate-fade-out'}`}>
          <h1 className="text-6xl font-bold mb-4 font-Pompiere text-white">Welcome to Ghiblily!</h1>
          <button className="bg-transparent border-2 text-white font-bold py-2 px-4 rounded-full font-Pompiere text-xl" onClick={handleEnter}>
            Enter
          </button>
        </div>
        <div className='z-10 bottom-6 font-Pompiere text-2xl font-semibold text-white w-56'><p>Whenever someone creates something with all of their heart, then that creation is given a soul. - <span className='font-bold'>Hayao Miyazaki</span></p></div>
      </div>
    </>
  );
};

export default MyComponent;
//song of time from Earthsea
//Reprise from Spirited Away