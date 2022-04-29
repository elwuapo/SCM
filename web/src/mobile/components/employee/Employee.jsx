// React
import React, { Fragment, useState } from 'react';

// Material-UI
import { Avatar, Card, CardHeader, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// Library

// Files
import { white } from './Style';
import { Delete } from '../modal/employee/Delete';
import { Modify } from '../modal/employee/Modify';
import { urlApi } from '../../../setting/Setting';

export const Employee = (props) => {
    const classes = white();

    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <Card className={classes.card}>
                <CardHeader 
                    avatar={<Avatar src={urlApi() + props.employee.avatar}/>}
                    title={props.employee.user.first_name + ' ' + props.employee.user.last_name}
                    subheader={props.employee.role}
                    action={
                        <IconButton onClick={() => setOpen(!open)}>
                            { open ? <ExpandLessIcon fontSize='small'/> : <ExpandMoreIcon fontSize='small'/> }
                        </IconButton>
                    }
                />
            </Card>

            <Collapse className={classes.collapse} in={open} timeout="auto" unmountOnExit>
                <h4>Working hours</h4>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Weekdays</TableCell>
                                <TableCell>Check in time</TableCell>
                                <TableCell>Departure time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { props.employee.working_hours.workday.map((workday, index) =>
                                <TableRow>
                                    <TableCell component="th" scope="row">{workday.day}</TableCell>
                                    <TableCell>{workday.check_in_time.substring(0,5) + ' hrs'}</TableCell>
                                    <TableCell>{workday.departure_time.substring(0,5) + ' hrs'}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modify />

                <Delete />
            </Collapse>
        </Fragment>
    )
}
