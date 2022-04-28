import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const white = makeStyles((theme) => ({
    card:{
        background: 'rgba(0, 0, 0, 0)',
        boxShadow: 'none',
        color: grey[900]
    },
}));