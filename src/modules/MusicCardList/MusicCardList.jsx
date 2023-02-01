import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux/es/exports";
import allActions from "../../store/actions"
import SearchService from '../../API/SearchService';
import MusicCard from './components/MusicCard/MusicCard';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function MusicCardList() {
  const tracks = useSelector(state => state.track.tracks)
  const dispatch = useDispatch()
  const control = useSelector(state => state.track.control)

  useEffect(() => {
    const displayDefaultTracks = async () => {
      let tracks = await SearchService.getSearchResults('phonk', 30);
      dispatch(allActions.saveTracks(tracks));
    }
    displayDefaultTracks();
    // eslint-disable-next-line
  }, [])

  return (
    <Paper elevation={4} sx={{
        width: '100%',
        p: 2,
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        flexWrap: 'wrap',
        rowGap: {xs: 1, sm: 2},
        columnGap: { sm: '2%', lg: '2.5%'}
    }}>
      {control?.isPlaying?
        <Button variant='contained' color='primary' onClick={() => control.toggle(false)}></Button>
      :
        <Button variant='contained' color='secondary' onClick={() => control.toggle(true)}></Button>
      }
      <Button variant='outlined' onClick={() => control.nextTrack()}>Next</Button>
      <Button variant='outlined' onClick={() => control.prevTrack()}>Prev</Button>
      {/* <Button variant='contained' onClick={() => dispatch(allActions.saveCurrTrackInd({trackInd: 2, trackUrl: }))}>Track 3</Button> */}
      {tracks.map((track, ind) =>
        <MusicCard key={ind} ind={ind} track={track}/>
      )}
    </Paper>
  )
}

export default MusicCardList