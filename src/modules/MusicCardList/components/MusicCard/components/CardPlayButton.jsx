import React from 'react'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function CardPlayButton({url, toggle, isPlaying}) {

  const f = (url) => {
    if(isPlaying(url)) {
      return <PauseIcon sx={{ height: 38, width: 38 }} />
    } else {
      return <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    }
  }

  return (
    <Button variant='contained' color='secondary' onClick={() => toggle(url)} className='play-button' sx={{
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
      {/* {isPlaying(url) ?
        <PauseIcon sx={{ height: 38, width: 38 }} />
      :
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      } */}
      {
        f(url)
      }
    </Button>
  )
}

export default CardPlayButton