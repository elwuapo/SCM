// React
import React, { Fragment, useState } from 'react';

// Material-UI
import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// Library

// Files
import { style } from './Style';
import { Menu } from '../menu/Menu';

export const Topbar = (props) => {
    const classes = style();
    
    const table = props.table;

    const [menu, setMenu] = useState(false);

    return (
        <Fragment>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={table ? classes.toolbar2 : classes.toolbar1}>
                    <IconButton edge="start" className={classes.menu} color="inherit" onClick={() => setMenu(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer 
                anchor={'bottom'} 
                open={menu} 
                onClose={() => setMenu(false)} 
                classes={{ paper: classes.paper}} 
                BackdropProps={{style: {backgroundColor: 'transparent'}}}
            >
                <Menu />
            </Drawer>
        </Fragment>
    )
}
