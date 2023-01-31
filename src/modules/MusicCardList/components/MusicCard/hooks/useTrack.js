import { useState, useEffect } from "react";

export const useTrack = (audioUrl) => {
    const [audio] = useState(new Audio(audioUrl))
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
        // eslint-disable-next-line
    }, [playing]);

    return [playing, toggle]
}