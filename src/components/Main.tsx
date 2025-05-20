"use client"
import React, { useState } from 'react'
import { Howl } from 'howler'
import { Pause, Play } from 'lucide-react'
import Banner from '@/components/Banner'
import Folio from '@/components/Folio'
const sound = new Howl({
    src: ['Ghibli_real.mp3'],
    // autoplay: true,
    loop: true,
    volume: 0.3,
    html5 : true,
})

const MusicControl = () => {
    const [is_playing, set_is_playing] = useState<boolean>(sound.playing());

    function toggle_music(){
        const p = sound.playing();
        set_is_playing(!p);
        if(p) sound.pause();
        else sound.play();
    }

    return (
        <button onClick={toggle_music} className="fixed right-3 bottom-3 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full dark:bg-gray-100 dark:text-emerald-700 bg-emerald-600 text-gray-100 shadow-2xl">
            {is_playing ? <Pause/> : <Play/>}
        </button>
    )
}

const Main = () => {
    const [show_banner, set_show_banner] = useState<boolean>(true);

    function toggle_banner(){
      set_show_banner(false);
      const p = sound.playing();
      if(p) sound.pause();
      else sound.play();
    }
  
  return (
    <>
    {show_banner ? <Banner tog_ban={toggle_banner}/> : <Folio/>}
    <MusicControl/>
    </>
  )
}

export default Main
