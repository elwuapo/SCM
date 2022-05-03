import { Container, Grid } from '@material-ui/core'
import React, { Fragment, useEffect } from 'react'

import { Bottombar } from '../../components/bottombar/Bottombar'
import { Topbar } from '../../components/topbar/Topbar'
import { white } from './Style'

export const Home = () => {
    const classes = white();

    useEffect(() => {
        document.title = 'Home';
    }, [])

    return (
        <Fragment>
            <Topbar title={'Home'} table={false}/>

            <Container className={classes.container}>
                <Grid item xs={12} className={classes.contenido}>
                    
                </Grid>
            </Container>

            <Bottombar index={0}/>
        </Fragment>
    )
}
