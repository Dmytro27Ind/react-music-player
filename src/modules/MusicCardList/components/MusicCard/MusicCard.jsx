import * as React from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardImage from './components/CardImage';
import CardDescription from './components/CardDescription';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

export default function MusicCard({name, author, image, ind}) {
  const isUpSm = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <Card sx={{
        width: { sm: '23.5%', md: '18.4%', lg: '18%', xl: '14.58%'},
        height: {xs: 80, sm: 'auto'},
        '&:hover .play-button': {
            display: {sm: 'flex'}
        },
    }}>
      {isUpSm ?
        <Box component="span">
          <CardImage image={image}/>
          <CardDescription name={name} author={author}/>
        </Box>
        :
        <CardActionArea sx={{display: 'flex', flexDirection: 'row'}}>
          <CardImage image={image}/>
          <CardDescription name={name} author={author}/>
          <Typography variant='subtitle1' component='div' sx={{p: 2}}>{ind}</Typography>
        </CardActionArea>
      }
    </Card>
  );
}
