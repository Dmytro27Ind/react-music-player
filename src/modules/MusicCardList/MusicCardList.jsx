import React from 'react'
import { useSelector } from "react-redux/es/exports";
import MusicCard from './components/MusicCard/MusicCard';
import Paper from '@mui/material/Paper';

function MusicCardList() {
  const tracks = useSelector(state => state.track.tracks)

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
          <MusicCard key={ind} ind={ind} name={track.name} author={track.author} image={track.image}/>
        )}
    </Paper>
  )
}

export default MusicCardList