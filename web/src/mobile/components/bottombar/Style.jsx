import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const white = makeStyles({
    root: {
        bottom: 0,
        width: '100vw',
        background: grey[50],
        borderTop: '1px solid rgba(0,0,0,0.1)',
    },
});