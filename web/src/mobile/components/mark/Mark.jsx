import { Avatar, Card, CardContent, CardHeader, Chip, Typography } from '@material-ui/core';
import React, { Fragment } from 'react'
import android from '../../../image/os/android.jpeg';
import ios from '../../../image/os/ios.jpeg';
import linux from '../../../image/os/linux.jpeg';
import macos from '../../../image/os/macos.jpeg';
import windows from '../../../image/os/windows.jpeg';
import {changeDateFormat2, getTime } from '../../../setting/Setting';
import { white } from './Style';
//'iOS' | 'Android OS' | 'BlackBerry OS' | 'Windows Mobile' | 'Amazon OS' | 'Windows 3.11' | 'Windows 95' | 'Windows 98' | 'Windows 2000' | 'Windows XP' | 'Windows Server 2003' | 'Windows Vista' | 'Windows 7' | 'Windows 8' | 'Windows 8.1' | 'Windows 10' | 'Windows ME' | 'Windows CE' | 'Open BSD' | 'Sun OS' | 'Linux' | 'Mac OS' | 'QNX' | 'BeOS' | 'OS/2' | 'Chrome OS'
const Header = (props) => {
    const classes  = white();
    const mark     = props.mark;
    const employee = props.employee;

    const getOS = () => {
        const os      = mark.browser.os
        const windows = 'Windows'

        if(os.indexOf(windows) !== -1){
            return windows
        }else{
            return mark.browser.os
        }
       
    }

    switch(getOS()){
        case 'iOS':
            return(
                <CardHeader
                    avatar={<Avatar variant="rounded" src={ios}/>}
                    title={employee.first_name + ' ' + employee.last_name}
                    subheader={changeDateFormat2(mark.check_in_time)}
                    action={ mark.check_in_time !== null && mark.departure_time !== null ?
                        <Chip className={classes.finalized} label="finalized" variant="outlined" />
                        :
                        <Chip className={classes.open} label="open" variant="outlined" />
                    }
                />
            )
        case 'Android OS':
            return(
                <CardHeader
                    avatar={<Avatar variant="rounded" src={android}/>}
                    title={employee.first_name + ' ' + employee.last_name}
                    subheader={changeDateFormat2(mark.check_in_time)}
                    action={ mark.check_in_time !== null && mark.departure_time !== null ?
                        <Chip className={classes.finalized} label="finalized" variant="outlined" />
                        :
                        <Chip className={classes.open} label="open" variant="outlined" />
                    }
                />
            )
        case 'Windows':
            return(
                <CardHeader
                    avatar={<Avatar variant="rounded" src={windows}/>}
                    title={employee.first_name + ' ' + employee.last_name}
                    subheader={changeDateFormat2(mark.check_in_time)}
                    action={ mark.check_in_time !== null && mark.departure_time !== null ?
                        <Chip className={classes.finalized} label="finalized" variant="outlined" />
                        :
                        <Chip className={classes.open} label="open" variant="outlined" />
                    }
                />
            )
        case 'Linux':
            return(
                <CardHeader
                    avatar={<Avatar variant="rounded" src={linux}/>}
                    title={employee.first_name + ' ' + employee.last_name}
                    subheader={changeDateFormat2(mark.check_in_time)}
                    action={ mark.check_in_time !== null && mark.departure_time !== null ?
                        <Chip className={classes.finalized} label="finalized" variant="outlined" />
                        :
                        <Chip className={classes.open} label="open" variant="outlined" />
                    }
                />
            )
        case 'Mac OS':
            return(
                <CardHeader
                    avatar={<Avatar variant="rounded" src={macos}/>}
                    title={employee.first_name + ' ' + employee.last_name}
                    subheader={changeDateFormat2(mark.check_in_time)}
                    action={ mark.check_in_time !== null && mark.departure_time !== null ?
                        <Chip className={classes.finalized} label="finalized" variant="outlined" />
                        :
                        <Chip className={classes.open} label="open" variant="outlined" />
                    }
                />
            )
        default:
            return (
                <Fragment></Fragment>
            )

    }
    
}

export const Mark = (props) => {
    const classes = white();

    return (
        <Fragment>
            <Card className={props.type === 1 ? classes.card1 : classes.card2}>
                <Header mark={props.mark} employee={props.employee}/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>Check in time</b>: {props.mark.check_in_time !== null ? getTime(props.mark.check_in_time) : ''}
                        <br />
                        <b>Departura time</b>:  {props.mark.departure_time !== null ? getTime(props.mark.departure_time) : ''}
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    )
}
