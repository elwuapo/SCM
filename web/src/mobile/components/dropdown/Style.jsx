import { makeStyles } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";

export const white = makeStyles({
    exit:{
        color: red[500],
    },
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: grey[100],
        }
    },
    item:{
        background: grey[100],
        color: grey[900],
    },
});