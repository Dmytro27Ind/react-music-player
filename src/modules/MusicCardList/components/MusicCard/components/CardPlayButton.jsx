import React from 'react'
import { useSelector, useDispatch } from "react-redux/es/exports";
import allActions from "../../../../../store/actions"
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function CardPlayButton({url, ind}) {
  const control = useSelector(state => state.track.control)
  const trackUrl = useSelector(state => state.track.trackUrl)
  const dispatch = useDispatch()

  const f = (url) => {
    if (url != trackUrl)
      return <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    else if(control?.isPlaying) {
      return <PauseIcon sx={{ height: 38, width: 38 }} />
    } else {
      return <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    }
  }

  return (
    <Button variant='contained' color='secondary' className='play-button'
      onClick={() => {
        if(url != trackUrl){
          dispatch(allActions.saveCurrTrackInd({trackInd: ind, trackUrl: url}))
          control?.playTrack(ind)
        }
        control?.isPlaying? control?.toggle(false) : control?.toggle(true)
      }}
      sx={{
        display: 'none',
        position: 'absolute',
        borderRadius: "50%",
        right: '8%',
        top: -60,
        minWidth: 40,
        width: 40,
        height: 40,
        p: 1
      }}
    >
      {
        f(url)
      }
    </Button>
  )
}

export default CardPlayButton