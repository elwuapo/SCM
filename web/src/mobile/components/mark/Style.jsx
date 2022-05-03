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
    },
    card1:{
        width: '100%',
        boxShadow: 'none',
        background: '#fff',
        borderRadius: 0,
        borderBottom: '1px solid rgba(0,0,0,0.1)',
    },
    card2:{
        margin: 2,
        background: '#fff',
        //width: 'calc(100% - 2px)',
        //border: '1px solid rgba(0,0,0,0.2)',
    }
}));

export const theme = createTheme({
    palette: {
        primary: green,
        secondary: red,
    },
});
