import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux/es/exports";
import allActions from "../../store/actions"
import SearchService from '../../API/SearchService';
import MusicCard from './components/MusicCard/MusicCard';
import Paper from '@mui/material/Paper';

function MusicCardList() {
  const tracks = useSelector(state => state.track.tracks)
  const dispatch = useDispatch()

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
      {tracks.map((track, ind) =>
        <MusicCard key={ind} ind={ind} name={track.name} author={track.author} image={track.image} url={track.url}/>
      )}
    </Paper>
  )
}

export default MusicCardList