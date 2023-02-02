import React from 'react'
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Paper sx={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems:'center', justifyContent: 'center', opacity: 0.7}}>
        <CircularProgress size={60} color='bw' sx={{position: 'fixed', top: '50%'}} />
    </Paper>
  )
}

export default Loader