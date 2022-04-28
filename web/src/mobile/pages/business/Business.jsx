// React
import React, { Fragment } from 'react';

// Material-UI
import { Container, Grid } from '@material-ui/core';

// Library
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Files
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style';
import { Employee } from '../../components/employee/Employee';
import { Add } from '../../components/modal/employee/Add';

export const Business = () => {
    const classes = white();

    return (
        <Fragment>
             <Topbar title={'Business'}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    {/*<LinearProgress color="primary"/>*/}

                    <LazyLoadImage
                        //className={classes.banner}
                        effect='blur'
                        alt={'img-business'}
                        src={'https://i.ytimg.com/vi/E15HFmxwVQI/maxresdefault.jpg'} 
                        width={'100%'}
                    />

                    <h3 className={classes.title}>
                        List of employees <Add />
                    </h3>

                    <Employee />

                </Grid>
            </Container>

            <Bottombar index={1}/>
        </Fragment>
    )
}
