import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux/es/exports";
import allActions from "../../store/actions"
import SearchService from '../../API/SearchService';
import MusicCard from './components/MusicCard/MusicCard';
import Paper from '@mui/material/Paper';
import { Skeleton } from '@mui/material';
import { useFetching } from '../../hooks/useFetching';
import Loader from './components/Loader';

function MusicCardList() {
  const [page, setPage] = useState(0)
  const tracks = useSelector(state => state.track.tracks)
  const searchInput = useSelector(state => state.track.searchInput)
  const dispatch = useDispatch()
  const lastElement = useRef()
  const observer = useRef()

  const [fetching, isLoading] = useFetching(async () => {
    let newTracks = await SearchService.getSearchResults(searchInput, 30, 30*page);
    setPage(page + 1)
    dispatch(allActions.saveTracks([...tracks, ...newTracks]))
  })

  useEffect(() => {
    const displayDefaultTracks = async () => {
      let tracks = await SearchService.getSearchResults('phonk', 30);
      dispatch(allActions.saveTracks(tracks));
    }
    displayDefaultTracks();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isLoading)
      return;
    if(observer.current)
      observer.current.disconnect();
    var callback = (entries) => {
      if (entries[0].isIntersecting && !isLoading){
        fetching()
        console.log("page: " + page)
      }
    }
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [isLoading])

  const skeleton = (times) => {
    let elements = []
    for(let i=0; i<times; i++){
      elements.push(
        <Skeleton key={i} variant='rectangular' sx={{
          width: { xs: '100%', sm: '23.5%', md: '18.4%', lg: '18%', xl: '14.58%'},
          height: {xs: 80, sm: 200}
        }} />
      )
    }
    return elements
  }

  return (
    <Paper elevation={4} sx={{
        width: '100%',
        p: 2,
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        flexWrap: 'wrap',
        rowGap: {xs: 1, sm: 2},
        columnGap: { sm: '2%', lg: '2.5%'},
        position: 'relative'
    }}>
      {tracks.length?
        tracks.map((track, ind) =>
          <MusicCard key={ind} ind={ind} track={track}/>
        )
        :
        skeleton(50)
      }
      <div ref={lastElement} style={{height: 1, width: '100%'}}></div>
      {isLoading && <Loader/>}
    </Paper>
  )
}

export default MusicCardList