import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

const AudioControls = ({isPlaying, onPlayPauseClick, onPrevClick, onNextClick,}) => (
	<Box sx={{display: 'flex', gap: 1}}>
    <IconButton aria-label="Previous" onClick={onPrevClick} color="inherit">
      <SkipPreviousIcon />
    </IconButton>
    {isPlaying ? (
      <IconButton onClick={() => onPlayPauseClick(false)} aria-label="Pause" color="inherit">
        <PauseIcon />
      </IconButton>
    ) : (
      <IconButton onClick={() => onPlayPauseClick(true)} aria-label="Play" color="inherit">
        <PlayArrowIcon />
      </IconButton>
    )}
    <IconButton aria-label="Next" onClick={onNextClick} color="inherit">
      <SkipNextIcon />
    </IconButton>
  </Box>
);

export default AudioControls;