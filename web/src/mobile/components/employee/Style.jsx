import { createTheme, makeStyles } from "@material-ui/core";
import { green, grey, red } from "@material-ui/core/colors";

export const white = makeStyles((theme) => ({
    card:{
        width: '100%',
        height: 72,
        background: grey[50],
        borderRadius: 0,
        color: grey[900],
        boxShadow: "none",
    },
    collapse:{
        paddingLeft: 20,
        paddingRight: 20,
    },
    table:{
        background: grey[50],
        boxShadow: 'none'
    },
}));

export const theme = createTheme({
    palette: {
        primary: green,
        secondary: red,
    },
});
