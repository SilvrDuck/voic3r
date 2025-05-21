import React, { useRef } from 'react';

const AudioPlayer: React.FC<{ src: string }> = ({ src }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playAudio = () => {
        audioRef.current?.play();
    };

    const pauseAudio = () => {
        audioRef.current?.pause();
    };

    const stopAudio = () => {
        audioRef.current?.pause();
        audioRef.current!.currentTime = 0;
    };

    return (
        <div>
            <audio ref={audioRef} src={src} />
            <button onClick={playAudio}>Play</button>
            <button onClick={pauseAudio}>Pause</button>
            <button onClick={stopAudio}>Stop</button>
        </div>
    );
};

export default AudioPlayer;