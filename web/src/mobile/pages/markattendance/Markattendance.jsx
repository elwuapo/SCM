import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style'
import { detect } from 'detect-browser';
import browserID from 'browser-id';
import take from '../../../image/take/take.jpeg';
import Cookies from 'universal-cookie'
import { clearCookies, urlApi } from '../../../setting/Setting'

export const Markattendance = () => {
    const classes   = white();
    const browser   = detect();
    const browserId = browserID();

    const [photo, setPhoto]     = useState(null);
    const [path, setPath]       = useState(take);
    const [disable, setDisable] = useState(false)

    const getImage = (event) => {
        setPhoto(event.target.files[0]);
        setPath(URL.createObjectURL(event.target.files[0]));
    }

    const marking = async (event) => {
        event.preventDefault();
        setDisable(true);

        const header     = new Headers();
        const formdata   = new FormData();
        const cookies    = new Cookies();
        const token      = cookies.get("token");

        header.append("Authorization", "Token " + token);

        formdata.append("b_id", browserId);
        formdata.append("b_name", browser.name);
        formdata.append("b_os", browser.os);
        formdata.append("image", photo);
        formdata.append("place", "Algun lugar del Chile");
        
        const request = {
            method: 'POST',
            headers: header,
            body: formdata,
            redirect: 'follow'
        }

        const data = await fetch(urlApi() + '/api/v1/mark/', request);

        switch(data.status){
            case 200:
                //const response = await data.json();
                console.log(200)
                break;
            case 401:
                clearCookies();
                break;
            default:
                break;
        };

        setDisable(false);
    };

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
                        <form onSubmit={(event) => marking(event)}>
                            <center>
                                <label htmlFor="photo">
                                    <img className={classes.image} src={path} alt=''/>
                                </label>

                                <input 
                                    required 
                                    accept="image/png,image/jpeg" 
                                    className={classes.input} 
                                    id="photo" 
                                    type="file" 
                                    onChange={(event) => getImage(event)}
                                />
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

                            <Button variant="contained" className={classes.marking} disabled={disable} type="submit">
                                Marking
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Container>

            <Bottombar index={0}/>
        </Fragment>
    )
}
