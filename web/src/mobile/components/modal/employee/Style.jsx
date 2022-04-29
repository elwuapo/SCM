import { makeStyles } from "@material-ui/core";
import { blue, green, grey, red } from "@material-ui/core/colors";

export const white = makeStyles((theme) => ({
    delete:{
        background: red[500],
        color: grey[50],
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 15,
        '&:hover':{
            background: red[700],
        }
    },
    modify:{
        background: green[500],
        color: grey[50],
        marginTop: 15,
        marginRight: 5,
        marginBottom: 15,
        '&:hover':{
            background: green[700],
        }
    },
    add:{
        left: 'calc(100vw -40px)',
        color: blue[500],
        '&:hover':{
            color: blue[700],
        }
    },
    modal: {
        backgroundColor: grey[50],
        color: grey[900],
        MozUserSelect: 'none',
        msUserSelect: 'none',
        KhtmlUserSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
    },
    info:{
        backgroundColor: grey[50],
        color: grey[900],
        MozUserSelect: 'none',
        msUserSelect: 'none',
        KhtmlUserSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center'
    },
    image:{
        width: '20vw', 
        height: '20vw', 
        borderRadius: '100%', 
        marginBottom: 10,
        cursor: 'pointer',
    },
    input:{
        display: 'none',
    }
}));