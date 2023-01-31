import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardPlayButton from './CardPlayButton';

function CardDescription({name, author}) {
  return (
    <Box sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: {xs: 1, sm: 0}
    }}>
        <CardContent sx={{ flex: '1 0 auto', p: 1 }}>
            <Typography component="div" variant="h6" noWrap>
                {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" noWrap>
                {author}
            </Typography>
        </CardContent>
        <CardPlayButton/>
    </Box>
  )
}

export default CardDescription