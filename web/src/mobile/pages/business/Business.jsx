// React
import React, { Fragment, useCallback, useEffect, useState } from 'react';

// Material-UI
import { Container, Grid, LinearProgress, Paper, Tab, Tabs } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';

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
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Business = () => {
    const classes = white();

    const [loading, setLoading]     = useState(true);
    const [valor, setValor]         = useState('0');
    const [business, setBusiness]   = useState({});
    const [employees, setEmployees] = useState([]);

    const cambiarTabla = (event, posicion) => {
        setValor(posicion);
    };

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
             <Topbar title={'Business'} table={true}/>

            <Container className={classes.container}>
                <Grid item xs={12}>
                    { loading ?
                        <LinearProgress color="primary"/>
                        :
                        <Fragment>
                            <TabContext value={valor}>
                                <Paper className={classes.table}>
                                    <Tabs
                                        className={classes.columna}
                                        value={valor}
                                        onChange={cambiarTabla}
                                        indicatorColor="primary"
                                        TabIndicatorProps={loading ? {color: ''} : {className: classes.indicador}}
                                        variant={"fullWidth"}
                                        centered
                                    >
                                        <Tab label={business.name} value={'0'} style={{width: '50%'}} disabled={loading}/>
                                        <Tab label={'List of employees'} value={'1'} style={{width: '50%'}} disabled={loading}/>
                                    </Tabs>
                                </Paper>

                                <TabPanel value={'0'} style={{padding: 0}}>
                                    { loading ?
                                        <LinearProgress color="secondary"/>
                                        :
                                        <Fragment>
                                            <LazyLoadImage
                                                //className={classes.banner}
                                                effect='blur'
                                                alt={'img-business'}
                                                src={'https://i.ytimg.com/vi/E15HFmxwVQI/maxresdefault.jpg'} 
                                                width={'100%'}
                                            />

                                            <h3 className={classes.title}>{business.name}</h3>

                                            <p style={{paddingLeft: 20, paddingRight: 20}}>
                                                <b>Us:</b> Somos una empresa experta en la gestión de la fuerza laboral,  
                                                20 años de experiencia en las problemáticas latinoamericanas 
                                                nos entregan el conocimiento, y nuestra alianza con UKG, líder
                                                mundial en el nicho, nos da la tecnología para abordar los 
                                                desafíos del WorkForce Management cómo ningún otro en la región.
                                                <br />
                                                <br />
                                                SCM es la única firma latinoamericana que aborda la gestión de 
                                                la fuerza laboral en su totalidad, desde la recolección del marcaje 
                                                de asistencia, pasando por el control del tiempo para un pago 
                                                perfecto y generación de horarios optimizados, hasta la 
                                                consultoría en productividad laboral y mejora de procesos para así, 
                                                uniendo conocimiento y tecnología, capitalizar oportunidades de 
                                                ahorro que derivan de la gestión de la fuerza laboral. Somos un 
                                                equipo multidisciplinario de gran experiencia, con casos de éxito 
                                                implementando UKG en las más grandes compañías de latinoamérica, 
                                                preparado para abordar las oportunidades específicas, sin importar 
                                                la industria, ni el país en donde el cliente esté situado.
                                            </p>

                                            <p style={{paddingLeft: 20, paddingRight: 20}}><b>Quantity of employees:</b> {employees.length}</p>
                                            <p style={{paddingLeft: 20, paddingRight: 20}}><b>External registration system:</b> {business.external_system ? 'True' : 'False'}</p>
                                            { business.external_system ?
                                                <p style={{paddingLeft: 20, paddingRight: 20}}><b>redirect to:</b> <a href={business.redirect_to}>{business.redirect_to}</a></p>
                                                :
                                                null
                                            }
                                        </Fragment>
                                    }
                                </TabPanel>

                                <TabPanel value={'1'} style={{padding: 0}}>
                                    { loading ?
                                        <LinearProgress color="secondary"/>
                                        :
                                        <Fragment>
                                            { employees.map((employee, index) => 
                                                <Employee key={index} employee={employee} setEmployees={setEmployees} employees={employees}/>
                                            )}

                                            <Add setEmployees={setEmployees}/>
                                        </Fragment>
                                    }
                                </TabPanel>
                            </TabContext>
                        </Fragment>
                    }
                    {/*
                        
                    */}
                </Grid>
            </Container>

            <Bottombar index={1}/>
        </Fragment>
    )
}
