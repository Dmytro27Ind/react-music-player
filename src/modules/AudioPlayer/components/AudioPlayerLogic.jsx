import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../../store/actions';
import AudioControls from './AudioControls';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import './ImageRotation.css';
import Image from 'mui-image';

const AudioPlayerLogic = ({ tracks, trackInd }) => {
    const dispatch = useDispatch()
	// State
    const [trackIndex, setTrackIndex] = useState(trackInd);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlay] = useState(false);
    const setIsPlaying = (b) => {
        setIsPlay(b);
        dispatch(allActions.saveControlFun({
            playTrack: (ind) => {
                setTrackIndex(ind);
                audioRef.current.currentTime = 0;
            },
            toggle: setIsPlaying,
            isPlaying: b,
            nextTrack: toNextTrack,
            prevTrack: toPrevTrack
        }))
    }

    // Destructure for conciseness
    // console.log(tracks)
	const { name, author, image, url, audio } = tracks[trackIndex];

    // Refs
    const audioRef = useRef(audio);
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
	const { duration } = audioRef.current;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    }

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    }

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    }

    const toPrevTrack = () => {
        audioRef.current.currentTime = 0
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    }

    const toNextTrack = () => {
        audioRef.current.currentTime = 0
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    }

    useEffect(() => {
        dispatch(allActions.saveControlFun({toggle: setIsPlaying, isPlaying: isPlaying, nextTrack: toNextTrack, prevTrack: toPrevTrack}))
        // eslint-disable-next-line
    }, [dispatch])

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
        // eslint-disable-next-line
    }, [isPlaying]);

    // Handle setup when changing tracks
    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = audio;
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
        dispatch(allActions.saveCurrTrackInd({trackInd: trackIndex, trackUrl: url}))
        // eslint-disable-next-line
    }, [trackIndex]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

	return (
        <Box sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}>
			<AppBar sx={{ display: 'flex', position: 'relative', alignItems: {xs: 'end', sm: 'center'}, justifyContent: 'center', p: 1, height: 90}}>
                <Box sx={{ position: 'absolute', left: 20, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Image
                        src={image}
                        alt={`track artwork for ${name} by ${author}`}
                        width={80}
                        style={{animation: undefined}}
                        sx={{borderRadius: 50, animation: 'rotation 5s infinite linear', animationPlayState: isPlaying? 'running':'paused'}}
                    />
                    <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: {xs: 150, sm: 200, md: 300}}}>
                        <Typography component="div" variant="h6" noWrap>{name}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" noWrap>{author}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', width: {sm: '40%', md: '50%'}, alignItems: 'center', marginTop: 1, marginRight: {xs: 2, sm: 0}, marginLeft: {sm: 4, md: 0}}}>
                    <AudioControls
                        isPlaying={isPlaying}
                        onPrevClick={toPrevTrack}
                        onNextClick={toNextTrack}
                        onPlayPauseClick={setIsPlaying}
                    />
                    <Slider
                        aria-label="Temperature"
                        defaultValue={trackProgress}
                        value={trackProgress}
                        step={1}
                        max={duration ? duration : `${duration}`}
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                        color="bw"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    />
                </Box>
			</AppBar>
		</Box>
    );
}

export default AudioPlayerLogic;