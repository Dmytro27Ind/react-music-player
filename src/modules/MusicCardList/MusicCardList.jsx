import React from 'react'
import MusicCard from './components/MusicCard/MusicCard';
import Paper from '@mui/material/Paper';

function MusicCardList() {
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
        <MusicCard ind={1} name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard ind={2} name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard ind={3} name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard ind={4} name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard ind={5} name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard ind={6} name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard ind={7} name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard ind={11} name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard ind={12} name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard ind={13} name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard ind={14} name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard ind={100} name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard ind={101} name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard ind={1} name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard ind={1} name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard ind={1} name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard ind={1} name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard ind={1} name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard ind={1} name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard ind={1} name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard ind={1} name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard ind={1} name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard ind={1} name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard ind={1} name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
    </Paper>
  )
}

export default MusicCardList