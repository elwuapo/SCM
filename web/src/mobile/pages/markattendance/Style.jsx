import { makeStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

export const white = makeStyles((theme) => ({
    container:{
        height: 'calc(100vh - (env(safe-area-inset-bottom) + 114px))',
        overflow: 'hidden',
        background: grey[50],
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'hidden',
        scrollbarWidth: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        KhtmlUserSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        padding: '0px',
        margin: 0,
    },
    alert:{
        marginBottom: 'calc(57px + env(safe-area-inset-bottom))',
        overflow: 'hidden',
        textOverFlow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    image:{
        width: '100%', 
        height: 'auto', 
        borderRadius: 10,
        marginBottom: 10
    },
    table:{
        background: grey[50],
        boxShadow: 'none'
    },
    marking:{
        width: '100%',
        background: blue[500],
        color: grey[50],
        marginTop: 15,
        marginRight: 5,
        '&:hover':{
            background: blue[700],
        }
    },
}));