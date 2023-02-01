import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import AudioControls from './components/AudioControls';

const AudioPlayer = ({ tracks, trackInd }) => {
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
    }, [])

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
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
    }, [trackIndex]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

	return (
        <div className="audio-player">
			<div className="track-info">
                <img
                    className="artwork"
                    src={image}
                    alt={`track artwork for ${name} by ${author}`}
                />
		        <h2 className="title">{name}</h2>
                <h3 className="artist">{author}</h3>
                <AudioControls
                    isPlaying={isPlaying}
                    onPrevClick={toPrevTrack}
                    onNextClick={toNextTrack}
                    onPlayPauseClick={setIsPlaying}
                />

                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                />
			</div>
		</div>
    );
}

export default AudioPlayer;