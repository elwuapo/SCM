import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const style = makeStyles((theme) => ({
    appbar:{
        top: 0,
        height: '57px',
        boxShadow: 'none',
    },
    toolbar:{
        height: '57px',
        background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
    },
    menu: {
        marginRight: theme.spacing(2),
        color: grey[500]
    },
    title: {
        flexGrow: 1,
        color: grey[900]
    },
    paper: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
    },
}));