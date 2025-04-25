"use client"
import React, { useState } from 'react'
import { Howl } from 'howler'
import { Pause, Play } from 'lucide-react'
import Banner from '@/components/Banner'
import Folio from '@/components/Folio'
const sound = new Howl({
    src: ['Ghibli_real.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.3,
    html5 : true,
})
const Main = () => {
    const [is_playing, set_is_playing] = useState<boolean>(sound.playing());
    const [show_banner, set_show_banner] = useState<boolean>(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function toggle_music(e: React.MouseEvent<HTMLButtonElement>){
        const p = sound.playing();
        set_is_playing(!p);
        if(p) sound.pause();
        else sound.play();
    }

    function toggle_banner(){
      set_show_banner(false);
      const p = sound.playing();
      set_is_playing(!p);
      if(p) sound.pause();
      else sound.play();
    }
  
  return (
    <>
    {show_banner ? <Banner tog_ban={toggle_banner}/> : <Folio/>}
    <button onClick={toggle_music} className={`absolute right-3 bottom-3 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full ${ is_playing ? "bg-green-500" : "bg-red-500"}`}>
        {is_playing ? <Pause/> : <Play/>}
    </button>
    </>
  )
}

export default Main
