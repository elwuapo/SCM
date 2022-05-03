import { Alert as Alert1, AlertTitle } from '@material-ui/lab'
import React, { Fragment } from 'react'
import { white } from './Style';

export const Alert = (props) => {
    const classes = white();

    switch(props.type){
        case 1:
            return (
                <Fragment>
                    <Alert1 severity="info" className={classes.alert}>
                        <AlertTitle>Bienvenido nuevamente</AlertTitle>

                        Hoy <b>NO</b> tienes jornada laboral, disfruta de tu dia libre.
                    </Alert1>
                </Fragment>
            )
        case 2:
            return (
                <Fragment>
                    <Alert1 severity="info" className={classes.alert}>
                        <AlertTitle>Bienvenido nuevamente</AlertTitle>

                        Tu jornada laboral del dia de hoy comienza a las 09:00 hrs.
                    </Alert1>
                </Fragment>
            )
        case 3:
            return (
                <Fragment>
                    <Alert1 severity="warning" className={classes.alert}>
                        <AlertTitle>Marcaje sin iniciar</AlertTitle>
                        Tu jornada laboral ya comenzo y aun no marcar el inicio de tu jornada laboral.
                    </Alert1>
                </Fragment>
            )
        case 4:
            return (
                <Fragment>
                    <Alert1 severity="warning" className={classes.alert}>
                        <AlertTitle>Marcaje sin finalizar</AlertTitle>
                        Tu jornada laboral ya termino y aun no marcar el final de tu jornada laboral.
                    </Alert1>
                </Fragment>
            )
        case 5:
            return (
                <Fragment>
                    <Alert1 severity="success" className={classes.alert}>
                        <AlertTitle>Marcaje sin finalizar</AlertTitle>
                        Tu jornada laboral fue marcada correctamente.
                    </Alert1>
                </Fragment>
            )
        case 6:
            return (
                <Fragment>
                    <Alert1 severity="error" className={classes.alert}>
                        <AlertTitle>Sin marcaje</AlertTitle>
                        No marcaste tu jornada laboral los siguientes dias:
                        <ol>
                            <li>Miercoles 20</li>
                            <li>Martes 03</li>
                        </ol>
                    </Alert1>
                </Fragment>
            )
        default:
            return (<Fragment></Fragment>)
    }
}
