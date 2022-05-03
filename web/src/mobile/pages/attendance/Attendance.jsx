// React
import React, { Fragment, useCallback, useEffect, useState } from 'react';

// Material-UI
import { Container, Grid, LinearProgress } from '@material-ui/core';

// Library

// Files
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style';
import { clearCookies, urlApi } from '../../../setting/Setting';
import Cookies from 'universal-cookie';
import { Mark } from '../../components/mark/Mark'

export const Attendance = () => {
    const classes = white();
    
    const [loading, setLoading] = useState(true);
    const [marks, setMarks]     = useState([]);

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

        const data = await fetch(urlApi() + '/api/v1/mark/attendance/', request);

        switch(data.status){
            case 200:
                const response = await data.json();
                //setAccount(response.account);
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

    useEffect(() => {
        document.title = 'Attendance';
        obtener();
    }, [obtener])

    return (
        <Fragment>
            <Topbar title={'Attendance'} table={false}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    { loading ?
                        <LinearProgress color="primary"/>
                        :
                        <Fragment>
                            { marks.sort((a, b) => b.pk - a.pk).map((mark, index) => 
                                <Mark key={index} employee={mark.employee} mark={mark} type={1}/>
                            )}
                        </Fragment>
                    }
                </Grid>
            </Container>

            <Bottombar index={2}/>
        </Fragment>
    )
}
