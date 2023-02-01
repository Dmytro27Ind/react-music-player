import * as React from 'react';
import { useSelector } from "react-redux/es/exports";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from './pages/MainPage';
import SearchAppBar from './modules/SearchAppBar'
import { light, dark } from './palette'
import AudioPlayer from './modules/AudioPlayer/AudioPlayer';

function App() {
  const theme = useSelector(state => state.theme.theme)
  const tracks = useSelector(state => state.track.tracks)
  const trackInd = useSelector(state => state.track.trackInd)

  const getAudioPlayer = () => {
    if (tracks.length && trackInd != undefined)
      return <AudioPlayer tracks={tracks} trackInd={trackInd}/>
  }

  return (
    <div className="App">
      <ThemeProvider theme={(theme === 'dark') ? createTheme(dark) : createTheme(light)}>
        <CssBaseline />
        <SearchAppBar />
        <MainPage />
        {getAudioPlayer()}
      </ThemeProvider>
    </div>
  );
}

export default App;