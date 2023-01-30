import React from 'react'
import MusicCardList from '../../modules/MusicCardList';
import Box from '@mui/material/Box';

function MainPage() {
  return (
    <Box sx={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 9
    }}>
        <MusicCardList/>
    </Box>
  )
}

export default MainPage