import { Button, Container, Grid, LinearProgress, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style'
import { detect } from 'detect-browser';
import browserID from 'browser-id';
import take from '../../../image/take/take.jpeg';
import freetime from '../../../image/take/freetime.jpeg';
import Cookies from 'universal-cookie'
import { changeDateFormat, clearCookies, getTime, urlApi } from '../../../setting/Setting'
import { Alert } from '@material-ui/lab';

export const Markattendance = () => {
    const classes   = white();
    const browser   = detect();
    const browserId = browserID();

    const [loading, setLoading] = useState(true);
    const [photo, setPhoto]     = useState(null);
    const [path, setPath]       = useState(take);
    const [disable, setDisable] = useState(false);
    const [user, setUser]       = useState({});
    const [mark, setMark]       = useState({});
    const [error, setError]     = useState(false);

    const getImage = (event) => {
        setPhoto(event.target.files[0]);
        setPath(URL.createObjectURL(event.target.files[0]));
    }

    const obtener = useCallback( async () => {
        const header     = new Headers();
        const cookies    = new Cookies();
        const token      = cookies.get("token");
        header.append("Authorization", "Token " + token);

        var request = {
            method: 'GET',
            headers: header,
            redirect: 'follow'
        };

        const data = await fetch(urlApi() + '/api/v1/mark/', request);

        switch(data.status){
            case 200:
                const response = await data.json();
                setUser(response.employee);
                setMark(response.mark);
                setLoading(false);
                break;
            case 401:
                clearCookies();
                break;
            default:
                //setError(false);
                break;
        };
    }, []);

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
        const response = await data.json();

        switch(data.status){
            case 200:
                setMark(response.mark);
                break;
            case 400:
                setError(response.error);
                break
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
        obtener()
    }, [obtener])

    return (
        <Fragment>
            <Topbar title={'Mark attendance'}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    { loading ?
                        <LinearProgress color="primary"/>
                        :
                        <div style={{padding: 20}}>
                            <form onSubmit={(event) => marking(event)}>
                                <center>
                                    { mark.check_in_time !== null && mark.departure_time !== null ?
                                        <img className={classes.image} src={freetime} alt=''/>
                                        :
                                        <Fragment>
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
                                        </Fragment>
                                    }
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
                                                <TableCell>Status</TableCell>
                                                <TableCell>
                                                    {mark.check_in_time !== null && mark.departure_time !== null ? 
                                                        <span style={{color: 'red'}}>finalized</span>
                                                        :
                                                        <span style={{color: 'green'}}>open</span>
                                                    }
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>{user.first_name + ' ' + user.last_name}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Place</TableCell>
                                                <TableCell>{mark.place !== null ? mark.place : ''}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell>{mark.check_in_time !== null ? changeDateFormat(mark.check_in_time) : ''}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Check in time</TableCell>
                                                <TableCell>{mark.check_in_time !== null ? getTime(mark.check_in_time) : ''}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>departure time</TableCell>
                                                <TableCell>{mark.departure_time !== null ? getTime(mark.departure_time) : ''}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Browser</TableCell>
                                                <TableCell align="justif">{browserId}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>{browser.name}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>OS</TableCell>
                                                <TableCell>{browser.os}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                { mark.check_in_time !== null && mark.departure_time !== null ?
                                    null
                                    :
                                    <Button variant="contained" className={classes.marking} disabled={disable} type="submit">
                                        Marking
                                    </Button>
                                }
                            </form>
                        </div>
                    }
                </Grid>
            </Container>

            <Snackbar
                className={classes.alert}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
                open={error}
            >
                <Alert severity="error" onClose={() => setError(false)}>Ups! su rostro no pudo ser autenticado.</Alert>
            </Snackbar>

            <Bottombar index={0}/>
        </Fragment>
    )
}
