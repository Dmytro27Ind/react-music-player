import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardPlayButton from './CardPlayButton';

function CardDescription({name, author, haveButton, url}) {
  return (
    <Box sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: {xs: '50%', sm: '100%'}
    }}>
        <CardContent sx={{ p: 1 }}>
            <Typography component="div" variant="h6" noWrap>
                {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" noWrap>
                {author}
            </Typography>
        </CardContent>
        {haveButton && <CardPlayButton url={url}/>}
    </Box>
  )
}

export default CardDescription