// React
import React, { Fragment, useState } from 'react'

// Material-UI
import { Fade, IconButton, Menu, MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// Library

// Files
import { white } from './Style';

export const Exit = (props) => {
    const classes = white();
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const opening = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const closing = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const selected = (event, opcion) => {
        switch (opcion) {
            case 0:
                closing();
                break;
            case 1:
                closing();
                break;
            default:
                closing();
                break;
        };
    };

    return (
        <Fragment>
            <IconButton onClick={(event) => opening(event)}>
                <ExitToAppIcon className={classes.exit}/>
            </IconButton>

            <Menu 
                anchorEl={anchorEl} 
                keepMounted 
                open={open} 
                onClose={() => closing()} 
                TransitionComponent={Fade} 
                className={classes.menu}
                PaperProps={{style:{borderRadius: 10, boxShadow: 'none', opacity: 0.9}}}
                >
                    
                {props.options.map((opcion, index) => (
                    <MenuItem key={index} className={classes.item} onClick={(event) => selected(event, index)}>{opcion}</MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
}
