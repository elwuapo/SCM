// React
import React, { Fragment, useState } from 'react';

// Material-UI
import { Avatar, Card, CardHeader, Collapse, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// Library

// Files
import { white } from './Style';
import { Delete } from '../modal/employee/Delete';
import { Modify } from '../modal/employee/Modify';

export const Employee = () => {
    const classes = white();

    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <Card className={classes.card}>
                <CardHeader 
                    avatar={<Avatar />}
                    title={'username'}
                    subheader={'rol'}
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
                            <TableRow>
                                <TableCell component="th" scope="row">Monday</TableCell>
                                <TableCell>09:00hrs</TableCell>
                                <TableCell>18:00hrs</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Tuesday</TableCell>
                                <TableCell>09:00hrs</TableCell>
                                <TableCell>18:00hrs</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Wednesday</TableCell>
                                <TableCell>09:00hrs</TableCell>
                                <TableCell>18:00hrs</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Thursday</TableCell>
                                <TableCell>09:00hrs</TableCell>
                                <TableCell>18:00hrs</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Friday</TableCell>
                                <TableCell>09:00hrs</TableCell>
                                <TableCell>18:00hrs</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Saturday</TableCell>
                                <TableCell>09:00hrs</TableCell>
                                <TableCell>18:00hrs</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Sunday</TableCell>
                                <TableCell>09:00hrs</TableCell>
                                <TableCell>18:00hrs</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modify />

                <Delete />

                <Divider />
            </Collapse>
        </Fragment>
    )
}
