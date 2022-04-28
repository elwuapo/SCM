// React
import React, { Fragment } from 'react';

// Material-UI
import { Container, Grid, LinearProgress } from '@material-ui/core';

// Library

// Files
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style';

export const Business = () => {
    const classes = white();

    return (
        <Fragment>
             <Topbar title={'Business'}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    <LinearProgress color="primary"/>
                </Grid>
            </Container>

            <Bottombar index={1}/>
        </Fragment>
    )
}
