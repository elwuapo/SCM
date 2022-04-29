// React
import React, { Fragment, useEffect, useState } from 'react'

// Material-UI
import { Button, Grid, TextField, ThemeProvider } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// Library
import Cookies from 'universal-cookie';

// Files
import logo from '../../../image/logo/logo.jpg';
import { urlApi } from '../../../setting/Setting';
import { style, theme } from './Style';


export const SignIn = () => {
    const classes = style();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable]   = useState(false);
    const [error, setError]       = useState(false);

    const login = async (event) => {
        setDisable(true);
        event.preventDefault();
        const header   = new Headers();
        const formdata = new FormData();
        const cookies  = new Cookies();

        formdata.append("username", username.toLowerCase());
        formdata.append("password", password);

        const request = {
            method: 'POST',
            headers: header,
            body: formdata,
            redirect: 'follow'
        };

        const data = await fetch(urlApi() + "/api/v1/signin/", request);

        switch(data.status){
            case 200:
                const response = await data.json();
                cookies.set("user", response.user.username, {path: '/' , expires: new Date(response.expiry), sameSite: "strict"});
                cookies.set("token", response.token, {path: '/' , expires: new Date(response.expiry), sameSite: "strict"});
                cookies.set("role", response.role, {path: '/', expires: new Date(response.expiry), sameSite: "strict"});
                cookies.set("avatar", response.avatar, {path: '/', expires: new Date(response.expiry), sameSite: "strict"});
                cookies.set("businessId", response.businessId, {path: '/', expires: new Date(response.expiry), sameSite: "strict"});
                cookies.set("expanded", true, {path: '/', expires: new Date(response.expiry), sameSite: "strict"});
                window.location.href = "/";
                break;
            case 400:
                setError(true);
                break;
            default:
                console.log('status code: ', data.status);
                break;
        }

        setDisable(false);
        
    };

    useEffect(() =>{
        document.title = 'Sign In';
    }, []);

    return (
        <Fragment>
             <Grid container>
                <Grid item sm={12} className={classes.container}>
                    <ThemeProvider theme={theme}>
                        <form onSubmit={(event) => login(event)}>
                            <Grid item sm={12}>
                                <center>
                                    <img src={ logo } alt="logo-app" className={classes.logo}/>
                                </center>
                            </Grid>

                            { error ? 
                                <Grid item sm={12}>
                                    <Alert severity="error" className={classes.alert}>
                                        Usuario y/o contraseña incorrecto(s).
                                    </Alert>
                                </Grid>
                                :
                                null
                            }

                            <Grid item sm={12}>
                                <TextField
                                    className={classes.input}
                                    inputProps={{ pattern: "[A-Za-z0-9]{4,16}"}}
                                    required
                                    id="usuario"
                                    label="Usuario"
                                    placeholder="Usuario"
                                    type="text"
                                    variant="outlined"
                                    onChange={event => setUsername(event.target.value)}
                                    error={error}
                                    name="signin-username"
                                />
                            </Grid>

                            <Grid item sm={12}>
                                <TextField
                                    className={classes.input}
                                    inputProps={{ pattern: "[A-Za-z0-9]{8,16}"}}
                                    required
                                    id="clave"
                                    label="Contraseña"
                                    placeholder="Contraseña"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={event => setPassword(event.target.value)}
                                    error={error}
                                    name="signin-password"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} lg={12} xl={12}>
                                <Button variant="contained" color="primary" className={classes.buton} type="submit" disabled={disable}>
                                    Iniciar
                                </Button>
                            </Grid>
                        </form>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Fragment>
    )
}
