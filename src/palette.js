import { grey, deepOrange} from '@mui/material/colors';

const light = {
    palette: {
        mode: "light",
        primary: {
            light: deepOrange[100],
            main: deepOrange[100],
            dark: deepOrange[300],
            contrastText: '#000',
        },
        secondary: {
            light: deepOrange.A100,
            main: deepOrange.A100,
            dark: deepOrange.A200,
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
            main: deepOrange.A100,
        },
    },
};

export { light, dark }