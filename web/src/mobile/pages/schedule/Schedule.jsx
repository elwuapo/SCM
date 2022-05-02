import { Button, Container, Grid, LinearProgress, MobileStepper, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { clearCookies, urlApi } from '../../../setting/Setting'
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Mark } from '../../components/mark/Mark'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Schedule = () => {
    const classes = white();

    const [loading, setLoading]       = useState(true);
    const [account, setAccount]       = useState({});
    const [marks, setMarks]           = useState([]);
    const [activeStep, setActiveStep] = useState(0);

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

        const data = await fetch(urlApi() + '/api/v1/mark/schedule/', request);

        switch(data.status){
            case 200:
                const response = await data.json();
                setAccount(response.account);
                setMarks(response.marks);
                setLoading(false);
                break;
            case 401:
                clearCookies();
                break;
            default:
                break;
        };
    }, []);

    const next = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const back = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const stepChange = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        document.title = 'Schedule';
        obtener();
    }, [obtener])

    return (
        <Fragment>
            <Topbar title={'Schedule'} table={false}/>

            <Container className={classes.container}>
                <Grid item xs={12}>
                    { loading ?
                        <LinearProgress color="primary"/>
                        :
                        <div style={{paddingLeft: 20, paddingRight: 20}}>
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
                                        { account.working_hours.workday.length < 1 ?
                                            <TableRow>
                                                <TableCell align="center" colSpan={3}><center>No assignment</center></TableCell>
                                            </TableRow>
                                            :
                                            <Fragment>
                                                { account.working_hours.workday.map((workday, index) =>
                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row">{workday.day}</TableCell>
                                                        <TableCell>{workday.check_in_time.substring(0,5) + ' hrs'}</TableCell>
                                                        <TableCell>{workday.departure_time.substring(0,5) + ' hrs'}</TableCell>
                                                    </TableRow>
                                                )}
                                            </Fragment>
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <h4>Latest Marks</h4>
                            
                            
                            <AutoPlaySwipeableViews
                                index={activeStep}
                                onChangeIndex={stepChange}
                                enableMouseEvents
                            >
                                { marks.sort((a, b) => b.pk - a.pk).map((mark, index) => 
                                    <Mark key={index} name={mark.employee.first_name + ' ' + mark.employee.last_name} mark={mark}/>
                                )}
                            </AutoPlaySwipeableViews>

                            <MobileStepper
                                variant="dots"
                                steps={marks.length >= 6 ? 6 : marks.length}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button size="small" onClick={next} disabled={activeStep === (marks.length >= 6 ? 5 : marks.length -1)}>
                                        Next
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={back} disabled={activeStep === 0}>
                                        Back
                                    </Button>
                                }
                            />
                        </div>
                    }
                </Grid>
            </Container>

            <Bottombar index={0}/>
        </Fragment>
    )
}
