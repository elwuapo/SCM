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
import { urlApi } from '../../../setting/Setting';

export const Menu = () => {
    const classes  = white();
    const cookies  = new Cookies();
    //const username = cookies.get('user');
    const fullname = cookies.get('fullName');
    const avatar   = cookies.get('avatar');
    const role     = cookies.get('role');

    const going = (path) => {
        window.location.href = path;
    }
    
    return (
        <Fragment>
            <List>
                <ListItem button onClick={() => going('/mark-attendance')}>
                    <ListItemIcon className={classes.icono}>
                        <PhotoCameraIcon style={{color: '#9e9e9e'}}/>
                    </ListItemIcon>
                    <ListItemText className={classes.icono} primary={'Mark attendance'}/>
                </ListItem>
                <ListItem button onClick={() => going('/schedule')}>
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
                    avatar={<Avatar src={urlApi() + avatar}/>}
                    title={fullname}
                    subheader={role}
                    action={<Exit options={['SignOut', 'SignOut All']}/>}
                />
            </Card>
        </Fragment>
    )
}
