import React from 'react'
import MusicCard from './components/MusicCard';
import Paper from '@mui/material/Paper';

function MusicCardList() {
  return (
    <Paper elevation={4} sx={{
        width: '100%',
        p: 2,
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: 2,
        columnGap: '2.5%'
    }}>
        <MusicCard name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
        <MusicCard name={"Phonk Music"} author={"By Magic Records"} image={require("../../assets/music-card-1.jpg")}/>
        <MusicCard name={"Live From Space"} author={"Mac Miller"} image={require("../../assets/music-card-2.jpg")}/>
        <MusicCard name={"Agressive Phonk"} author={"By FUTURE MANTIS"} image={require("../../assets/music-card-3.jpg")}/>
    </Paper>
  )
}

export default MusicCardList