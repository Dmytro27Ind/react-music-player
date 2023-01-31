import React from 'react'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useTrack } from '../hooks/useTrack';

function CardPlayButton({url}) {
  const [playing, toggle] = useTrack(url);

  return (
    <Button variant='contained' color='secondary' onClick={toggle} className='play-button' sx={{
      display: 'none',
      position: 'absolute',
      borderRadius: "50%",
      right: '8%',
      top: -60,
      minWidth: 40,
      width: 40,
      height: 40,
      p: 1
    }}>
      {playing ?
        <PauseIcon sx={{ height: 38, width: 38 }} />
      :
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      }
    </Button>
  )
}

export default CardPlayButton