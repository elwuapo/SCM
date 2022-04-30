// React
import React, { Fragment, useState } from 'react'

// Material-UI
import { Fade, IconButton, Menu, MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Library
import Cookies from 'universal-cookie';

// Files
import { white } from './Style';
import { clearCookies, urlApi } from '../../../setting/Setting';

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

    const singleSignOut = async () => {
        const header  = new Headers();
        const cookies = new Cookies();
        const token   = cookies.get("token");

        header.append("Content-Type", "application/json");
        header.append("Authorization", "Token " + token);

        const request = {
            method: 'POST',
            headers: header,
            redirect: 'follow'
        };

        const data = await fetch(urlApi() + "api/v1/signout/", request);

        switch(data.status){
            case 204:
                clearCookies();
                break;
            default:
                break;
        };
    };

    const allSignOut = async () => {
        const header  = new Headers();
        const cookies = new Cookies();
        const token   = cookies.get("token");

        header.append("Content-Type", "application/json");
        header.append("Authorization", "Token " + token);

        const request = {
            method: 'POST',
            headers: header,
            redirect: 'follow'
        };

        const data = await fetch(urlApi() + "/api/v1/signout/all/", request);

        switch(data.status){
            case 204:
                clearCookies();
                break;
            default:
                break;
        };
    };


    const selected = (opcion) => {
        switch (opcion) {
            case 0:
                singleSignOut();
                closing();
                break;
            case 1:
                allSignOut();
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
                    <MenuItem key={index} className={classes.item} onClick={() => selected(index)}>{opcion}</MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
}
