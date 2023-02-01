import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

export const useTracks = () => {
    // const [audio, setAudio] = useState(undefined)
    const [url, setUrl] = useState('')
    const [playing, setPlaying] = useState(false);
    const [currTime, setCurrTime] = useState(0)
    const [duration, setDuration] = useState(0)
    // const [timer, setTimer] = useState(undefined)

    // // const [refresh, setRefresh] = useState(false)
    // // const refreshToggle = () => {return;}

    // useEffect(() => {
    //     if(timer)
    //         clearInterval(timer)
    //     setTimer(setInterval(() => console.log(timer), 1000))
    // }, [])

    // useEffect(()=> {
    //     setCurrTime(getTrack(url)?.audio.currentTime)
    //     setDuration(getTrack(url)?.audio.duration)
    //     console.log(currTime + '___' + duration)
    // }, [currTime])

    const tracks = useSelector(state => state.track.tracks);
    // console.log(tracks)

    const getTrack = (audioUrl) => {
        return tracks.find(t => t.url == audioUrl)
    }

    const toggle = (audioUrl) => {
        if (url !== audioUrl) {
            if (url){
                getTrack(url).audio.pause()
                setPlaying(false);
            }

            setUrl(audioUrl);

            getTrack(audioUrl).audio.play()
            setPlaying(true);
            // setCurrTime(getTrack(audioUrl).audio.currentTime)
            // setDuration(getTrack(audioUrl).audio.duration)
        } else {
            console.log('palying: ' + playing);
            // if(!playing) {
            //     console.log('PLAY')
            //     getTrack(audioUrl)?.audio.play();
            // } else {
            //     console.log('PAUSE')
            //     getTrack(audioUrl)?.audio.pause();
            // }
            (!playing) ? getTrack(audioUrl)?.audio.play() : getTrack(audioUrl)?.audio.pause();
            setPlaying(!playing);
            // console.log(currTime + " / " + duration)
        }
    }

    // useEffect(() => {
    //     playing ? audio?.play() : audio?.pause();
    //     // eslint-disable-next-line
    // }, [playing])

    // useEffect(() => {
    //     if (url){
    //         let a = new Audio(url)
    //         setAudio(a);
    //         setPlaying(true)
    //     }
    // }, [url])

    // useEffect(() => {
    //     console.log('tu')
    //     setCurrTime(audio?.currentTime)
    //     setDuration(audio?.duration)
    // })

    // useEffect(() => {
    //     // console.log(currTime + " / " + duration)
    //     // console.log(audio?.ended)
    // }, [currTime, duration])

    const isPlaying = (audioUrl) => {
        if (url !== audioUrl)
            return false
        else
            return playing
    }

    // useEffect(() => {
    //     console.log(getTrack(url)?.audio.currTime)
    // })

    return [isPlaying, toggle, getTrack]
}