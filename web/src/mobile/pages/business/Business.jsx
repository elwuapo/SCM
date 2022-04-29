// React
import React, { Fragment, useCallback, useEffect, useState } from 'react';

// Material-UI
import { Container, Grid, LinearProgress } from '@material-ui/core';

// Library
import 'react-lazy-load-image-component/src/effects/blur.css';

// Files
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style';
import { Employee } from '../../components/employee/Employee';
import { Add } from '../../components/modal/employee/Add';
import Cookies from 'universal-cookie';
import { clearCookies, urlApi } from '../../../setting/Setting';

export const Business = () => {
    const classes = white();

    const [loading, setLoading]     = useState(true);
    const [business, setBusiness]   = useState({});
    const [employees, setEmployees] = useState([]);

    const obtener = useCallback( async () => {
        const header     = new Headers();
        const cookies    = new Cookies();
        const token      = cookies.get("token");
        const businessId = cookies.get("businessId");
        header.append("Authorization", "Token " + token);

        var request = {
            method: 'GET',
            headers: header,
            redirect: 'follow'
        };

        const data = await fetch(urlApi() + '/api/v1/business/' + businessId + '/', request);

        switch(data.status){
            case 200:
                const response = await data.json();
                setBusiness(response.business);
                setEmployees(response.business.employees);
                setLoading(false);
                console.log(response);
                break;
            case 401:
                clearCookies();
                break;
            default:
                //setError(false);
                break;
        };
    }, []);

    useEffect(() => {
        document.title = 'Business';
        obtener();
    }, [obtener])

    return (
        <Fragment>
             <Topbar title={'Business'}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    { loading ?
                        <LinearProgress color="primary"/>
                        :
                        <Fragment>
                            <h3 className={classes.title}>
                                List of employees {business.name}<Add setEmployees={setEmployees}/>
                            </h3>

                            { employees.map((employee, index) => 
                                <Employee key={index} employee={employee} />
                            )}
                        </Fragment>
                    }
                    {/*
                        <LazyLoadImage
                            //className={classes.banner}
                            effect='blur'
                            alt={'img-business'}
                            src={'https://i.ytimg.com/vi/E15HFmxwVQI/maxresdefault.jpg'} 
                            width={'100%'}
                        />
                    */}
                </Grid>
            </Container>

            <Bottombar index={1}/>
        </Fragment>
    )
}
