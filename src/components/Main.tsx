"use client";
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { Pause, Play } from 'lucide-react';
import Banner from './Banner';

const sound = new Howl({
    src: ['Ghibli_real.mp3'],
    loop: true,
    volume: 0.3,
    html5: true,
});

const MusicControl = () => {
    const [is_playing, set_is_playing] = useState<boolean>(false);

    useEffect(() => {
        set_is_playing(sound.playing());
        const handlePlay = () => set_is_playing(true);
        const handlePause = () => set_is_playing(false);
        const handleEnd = () => set_is_playing(false);

        sound.on('play', handlePlay);
        sound.on('pause', handlePause);
        sound.on('end', handleEnd);

        return () => {
            sound.off('play', handlePlay);
            sound.off('pause', handlePause);
            sound.off('end', handleEnd);
        };
    }, []);

    function toggle_music() {
        if (sound.playing()) {
            sound.pause();
        } else {
            sound.play();
        }
    }

    return (
        <button onClick={toggle_music} className="fixed z-50 right-3 bottom-3 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full dark:bg-gray-100 dark:text-emerald-700 bg-emerald-600 text-gray-100 shadow-2xl">
            {is_playing ? <Pause /> : <Play />}
        </button>
    );
};

interface MainProps {
  folioComponent: React.ReactNode;
}

const Main = ({ folioComponent }: MainProps) => {
    const [show_banner, set_show_banner] = useState<boolean>(true);

    function toggle_banner_and_play_music() {
        set_show_banner(false);
        if (!sound.playing()) {
            sound.play();
        }
    }

    return (
        <>
            {show_banner ? (
                <Banner tog_ban={toggle_banner_and_play_music} />
            ) : (
                folioComponent
            )}
            <MusicControl />
        </>
    );
};

export default Main;