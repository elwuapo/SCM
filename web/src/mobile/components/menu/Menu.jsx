// React
import React, { Fragment } from 'react'

// Material-UI
import { Avatar, Card, CardHeader, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ScheduleIcon from '@material-ui/icons/Schedule';
import BarChartIcon from '@material-ui/icons/BarChart';

// Library
import Cookies from 'universal-cookie';

// Files
import { white } from './Style';
import { Exit } from '../dropdown/Exit';

export const Menu = () => {
    const classes  = white();
    const cookies  = new Cookies();
    const username = cookies.get('user');
    const avatar   = cookies.get('avatar');

    return (
        <Fragment>
            <List>
                <ListItem button>
                    <ListItemIcon className={classes.icono}>
                        <PhotoCameraIcon style={{color: '#9e9e9e'}}/>
                    </ListItemIcon>
                    <ListItemText className={classes.icono} primary={'Mark attendance'}/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={classes.icono}>
                        <ScheduleIcon style={{color: '#9e9e9e'}}/>
                    </ListItemIcon>
                    <ListItemText className={classes.icono} primary={'Schedule'}/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={classes.icono}>
                        <BarChartIcon style={{color: '#9e9e9e'}}/>
                    </ListItemIcon>
                    <ListItemText className={classes.icono} primary={'Resume'}/>
                </ListItem>
            </List>

            <Card className={classes.card}>
                <CardHeader
                    avatar={<Avatar src={avatar}/>}
                    title={username}
                    subheader={"manager"}
                    action={<Exit options={['SignOut', 'SignOut All']}/>}
                />
            </Card>
        </Fragment>
    )
}
