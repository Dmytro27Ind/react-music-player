import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import AlbumIcon from '@mui/icons-material/Album';
import ThemeSwitch from './components/ThemeSwitch';
import MusicSearch from './components/MusicSearch'

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', zIndex: 1, top: 0 }}>
        <AppBar position="static" color='primary'>
            <Toolbar>
                <AlbumIcon/>
                <MusicNoteOutlinedIcon sx={{mr: 4}}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    React Music Player
                </Typography>
                <MusicSearch/>
                <ThemeSwitch/>
            </Toolbar>
        </AppBar>
    </Box>
  );
}