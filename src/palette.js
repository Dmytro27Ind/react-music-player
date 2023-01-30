import { deepPurple, purple, grey } from '@mui/material/colors';

const light = {
    palette: {
        mode: "light",
        primary: {
            light: purple[100],
            main: purple[100],
            dark: purple[300],
            contrastText: '#000',
        },
        secondary: {
            light: deepPurple.A100,
            main: deepPurple.A100,
            dark: deepPurple.A200,
            contrastText: '#000',
        },
    },
};

const dark = {
    palette: {
        mode: "dark",
        primary: {
            main: grey[100],
            dark: grey[900],
        },
        secondary: {
            main: deepPurple.A100,
        },
    },
};

export { light, dark }