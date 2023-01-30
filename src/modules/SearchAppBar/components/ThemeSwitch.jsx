import React from 'react'
import { useDispatch, useSelector } from "react-redux/es/exports";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import allActions from "../../../store/actions"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ThemeSwitch() {
    const theme = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()

    return (
        <Box component="span" sx={{display: 'flex', alignItems: 'center'}}>
            <Typography sx={{ml: 4}}>
                {(theme === 'dark')? 'dark' : 'light'}
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={() => dispatch(allActions.switchTheme())} color="inherit">
                {(theme === 'dark')? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
}

export default ThemeSwitch