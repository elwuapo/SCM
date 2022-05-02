import { Container, Grid, LinearProgress } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style'

export const Home = () => {
    const classes = white();

    return (
        <Fragment>
            <Topbar title={'Home'} table={true}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    <LinearProgress color="primary"/>
                </Grid>
            </Container>

            <Bottombar index={0}/>
        </Fragment>
    )
}
