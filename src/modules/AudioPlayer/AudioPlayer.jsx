import React, { } from 'react';
import { useSelector } from "react-redux/es/exports";
import AudioPlayerLogic from './components/AudioPlayerLogic';

const AudioPlayer = () => {
    const tracks = useSelector(state => state.track.tracks)
    const trackInd = useSelector(state => state.track.trackInd)

    const getAudioPlayer = () => {
        if (tracks.length && trackInd != undefined)
          return <AudioPlayerLogic tracks={tracks} trackInd={trackInd}/>
    }

    return (
        getAudioPlayer()
    )
}

export default AudioPlayer;