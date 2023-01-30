import * as React from 'react';
import { useSelector } from "react-redux/es/exports";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from './pages/MainPage';
import SearchAppBar from './modules/SearchAppBar'
import { light, dark } from './palette'

function App() {
  const theme = useSelector(state => state.theme.theme)

  return (
    <div className="App">
      <ThemeProvider theme={(theme === 'dark') ? createTheme(dark) : createTheme(light)}>
        <CssBaseline />
        <SearchAppBar />
        <MainPage />
      </ThemeProvider>
    </div>
  );
}

export default App;