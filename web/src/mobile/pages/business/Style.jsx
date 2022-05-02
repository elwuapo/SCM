import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

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
    },
    alert:{
        marginBottom: 'calc(57px + env(safe-area-inset-bottom))',
        overflow: 'hidden',
        textOverFlow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    title:{
        width: 'calc(100vw - 40px)',
        paddingLeft: 20,
        paddingRight: 20,
    },
    table:{
        boxShadow: 'none',
        borderRadius: 0,
        //background: grey[50],
        position: 'sticky',
        color: grey[900],
        //top: 57,
        zIndex: 99,
        borderBottom: '1px solid rgba(0,0,0,0.1)',
    },
}));