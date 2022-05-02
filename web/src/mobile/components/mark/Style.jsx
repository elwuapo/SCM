import { createTheme, makeStyles } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

export const white = makeStyles((theme) => ({
    open:{
        marginTop: 10,
        color: green[500],
        borderColor: green[500],
    },
    finalized:{
        marginTop: 10,
        color: red[500],
        borderColor: red[500],
    }
}));

export const theme = createTheme({
    palette: {
        primary: green,
        secondary: red,
    },
});
