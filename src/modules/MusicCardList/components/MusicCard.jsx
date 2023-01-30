import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function MusicCard({name, author, image}) {
  return (
    <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '18%',
        '&:hover .play-button': {
            display: 'flex'
        },
    }}>
      <CardMedia
        component="img"
        sx={{ width: '100%' }}
        image={image}
        alt="Music card image"
      />
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', p: 1 }}>
          <Typography component="div" variant="h6" noWrap>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" noWrap>
            {author}
          </Typography>
        </CardContent>
        <Button variant='contained' color='secondary' className='play-button' sx={{ display: 'none', position: 'absolute', borderRadius: "50%", right: '8%', top: -60, minWidth: 40, width: 40, height: 40, p: 1}}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </Button>
      </Box>
    </Card>
  );
}
