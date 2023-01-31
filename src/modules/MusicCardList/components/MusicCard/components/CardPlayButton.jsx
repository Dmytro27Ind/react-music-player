import React from 'react'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function CardPlayButton() {
  return (
    <Button variant='contained' color='secondary' className='play-button' sx={{
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
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    </Button>
  )
}

export default CardPlayButton