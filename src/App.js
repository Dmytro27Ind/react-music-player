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

  return (
    <div className="App">
      <ThemeProvider theme={(theme === 'dark') ? createTheme(dark) : createTheme(light)}>
        <CssBaseline />
        <SearchAppBar />
        <MainPage />
        <AudioPlayer />
      </ThemeProvider>
    </div>
  );
}

export default App;