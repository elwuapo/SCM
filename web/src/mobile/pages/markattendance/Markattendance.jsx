import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Fragment, useEffect } from 'react'
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style'
import { detect } from 'detect-browser';
import browserID from 'browser-id';
import photo from '../../../image/take/photo.jpeg';

export const Markattendance = () => {
    const classes   = white();
    const browser   = detect();
    const browserId = browserID();


    useEffect(() => {
        document.title = 'Mark attendance';
    }, [])

    return (
        <Fragment>
            <Topbar title={'Mark attendance'}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    {/*<LinearProgress color="primary"/> */}

                    <div style={{padding: 20}}>
                        <center>
                            <img className={classes.image} src={photo} alt=''/>
                        </center>

                        <TableContainer component={Paper}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={3}>Info</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Nicolas Rivera</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Place</TableCell>
                                        <TableCell>Usar api google maps</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Lunes 18 de abril</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Hours</TableCell>
                                        <TableCell>12:28 am</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>B-ID</TableCell>
                                        <TableCell align="justif">{browserId}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Browser</TableCell>
                                        <TableCell>{browser.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>OS</TableCell>
                                        <TableCell>{browser.os}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Button variant="contained" className={classes.marking} disabled={false}>
                            Marking
                        </Button>
                    </div>
                </Grid>
            </Container>

            <Bottombar index={0}/>
        </Fragment>
    )
}
