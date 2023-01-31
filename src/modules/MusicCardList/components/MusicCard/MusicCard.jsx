import * as React from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardImage from './components/CardImage';
import CardDescription from './components/CardDescription';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import { useTrack } from './hooks/useTrack';

export default function MusicCard({name, author, image, ind, url}) {
  const isUpSm = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const toggle = useTrack(url)[1]

  return (
    <Card sx={{
        width: { xs: '100%', sm: '23.5%', md: '18.4%', lg: '18%', xl: '14.58%'},
        height: {xs: 80, sm: 'auto'},
        '&:hover .play-button': {
            display: {sm: 'flex'}
        },
    }}>
      {isUpSm ?
        <Box component="span">
          <CardImage image={image}/>
          <CardDescription name={name} author={author} haveButton={true} url={url}/>
        </Box>
        :
        <CardActionArea onClick={toggle} sx={{display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start'}}>
          <CardImage image={image}/>
          <CardDescription name={name} author={author} haveButton={false}/>
          <Typography variant='subtitle1' component='div' sx={{p: 2, position: 'absolute', top: 10, right: 0}}>{ind}</Typography>
        </CardActionArea>
      }
    </Card>
  );
}
