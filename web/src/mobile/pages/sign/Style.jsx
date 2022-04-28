import { makeStyles, createTheme } from "@material-ui/core";
import { blue, green, grey } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: green,
    },
});

export const style = makeStyles({
    container:{
        width: '100%',
        height: '100vh',
        backgroundColor: grey[50],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        marginBottom: 20,
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    alert:{
        marginBottom: 20,
        width: 200,
    },
    input:{
        marginBottom: 20,
        width: 230,
    },
    buton:{
        marginBottom: 10,
        color: grey[50],
        width: 230,
        height: 50
    },
    link:{
        textAlign: 'center',
        color: blue[500],
        textDecoration: 'none',
        cursor: 'pointer',
    },
});