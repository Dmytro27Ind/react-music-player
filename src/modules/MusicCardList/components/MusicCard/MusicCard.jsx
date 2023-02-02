import * as React from 'react';
import { useSelector, useDispatch } from "react-redux/es/exports";
import allActions from "../../../../store/actions"
import { Typography, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardImage from './components/CardImage';
import CardDescription from './components/CardDescription';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

export default function MusicCard({ind, track}) {
  const isUpSm = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const control = useSelector(state => state.track.control)
  const trackUrl = useSelector(state => state.track.trackUrl)
  const dispatch = useDispatch()

  const cardActionClick = () => {
    if(track.url !== trackUrl){
      dispatch(allActions.saveCurrTrackInd({trackInd: ind, trackUrl: track.url}))
      control?.playTrack(ind)
    }
    control?.isPlaying? control?.toggle(false) : control?.toggle(true)
  }

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
          <CardImage image={track.image}/>
          <CardDescription ind={ind} track={track} haveButton={true}/>
        </Box>
        :
        <CardActionArea onClick={cardActionClick} sx={{display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start'}}>
          <CardImage image={track.image}/>
          <CardDescription ind={ind} track={track} haveButton={false}/>
          <Typography variant='subtitle1' component='div' sx={{p: 2, position: 'absolute', top: 10, right: 0}}>{ind}</Typography>
        </CardActionArea>
      }
    </Card>
  );
}
