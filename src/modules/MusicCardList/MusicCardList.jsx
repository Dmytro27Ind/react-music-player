import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from "react-redux/es/exports";
import allActions from "../../store/actions"
import SearchService from '../../API/SearchService';
import MusicCard from './components/MusicCard/MusicCard';
import Paper from '@mui/material/Paper';
import { useTracks } from './components/MusicCard/hooks/useTracks';
import { Button } from '@mui/material';
import AudioPlayer from './components/MusicCard/hooks/useAudioPlayer';

function MusicCardList() {
  const tracks = useSelector(state => state.track.tracks)
  const dispatch = useDispatch()
  const [isPlaying, toggle, getTrack] = useTracks()

  const control = useSelector(state => state.track.control)
  const [trackInd, setTrackInd] = useState(undefined)

  useEffect(() => {
    const displayDefaultTracks = async () => {
      let tracks = await SearchService.getSearchResults('phonk', 30);
      dispatch(allActions.saveTracks(tracks));
    }
    displayDefaultTracks();
    // eslint-disable-next-line
  }, [])

  const ap = () => {
    if(tracks.length != 0 && trackInd != undefined){
      return <AudioPlayer tracks={tracks} trackInd={trackInd}/>;
    }
  }

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
      <Button variant='contained' onClick={() => setTrackInd(2)}>Track 3</Button>
      {ap()}
      {tracks.map((track, ind) =>
        <MusicCard key={ind} ind={ind}
          name={track.name}
          author={track.author}
          image={track.image}
          url={track.url}
          isPlaying={isPlaying}
          toggle={toggle}
        />
      )}
    </Paper>
  )
}

export default MusicCardList