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
        bw: {
            main: grey[800]
        }
    },
};

const dark = {
    palette: {
        mode: "dark",
        primary: {
            light: grey[100],
            main: grey[100],
            dark: grey[900],
        },
        secondary: {
            light: grey[100],
            main: deepOrange.A100,
        },
        bw: {
            main: grey[100]
        }
    },
};

export { light, dark }