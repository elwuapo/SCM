import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, Grid, InputLabel, List, ListItem, ListItemText, MenuItem, OutlinedInput, Select, TextField, Typography } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { white } from './Style';
import Cookies from 'universal-cookie';
import { clearCookies, urlApi } from '../../../../setting/Setting';

export const Add = (props) => {
    const classes = white();

    const [open, setOpen]           = useState(false);
    const [username, setUsername]   = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname]   = useState('');
    const [email, setEmail]         = useState('');
    const [role, setRole]           = useState('employee');
    const [avatar, setAvatar]       = useState(null);
    const [disable, setDisable]     = useState(false)

    const adding = async (event) => {
        event.preventDefault();
        setDisable(true);

        const header     = new Headers();
        const formdata   = new FormData();
        const cookies    = new Cookies();
        const token      = cookies.get("token");
        const businessId = cookies.get("businessId");

        header.append("Authorization", "Token " + token);

        formdata.append("username", username);
        formdata.append("first_name", firstname);
        formdata.append("last_name", lastname);
        formdata.append("email", email);
        formdata.append("avatar", avatar, 'avatar.jpg');
        formdata.append("role", role);
        formdata.append("businessId", businessId);
        

        const request = {
            method: 'POST',
            headers: header,
            body: formdata,
            redirect: 'follow'
        }

        const data = await fetch(urlApi() + '/api/v1/account/', request);

        switch(data.status){
            case 200:
                const response = await data.json();
                props.setEmployees((prev) => [...prev, response.account])
                canceling();
                break;
            case 401:
                clearCookies();
                break;
            default:
                break;
        };

        setDisable(false);
    };

    const canceling = () => {
        setOpen(false);
        setUsername('');
        setFirstname('');
        setLastname('');
        setEmail('');
        setRole('employee');
        setAvatar(null);
        setDisable(false);
    }

    return (
        <Fragment>
            <div style={{padding: 10}}>
                <Button variant="contained" className={classes.add} disabled={disable} onClick={() => setOpen(true)}>
                    Add employee
                </Button>
            </div>

            <Dialog
                open={open} 
                onClose={() => setOpen(false)} 
                maxWidth={'xs'}
                PaperProps={{style:{borderRadius: 10, opacity: 0.9, backgroundColor: '#fff'}}}
            >
                <form onSubmit={(event) => adding(event)}>
                    <DialogTitle>
                        <center>
                            <b>Add</b>
                        </center>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography component='span' variant="body1" gutterBottom>
                                        <center>You are about to add this employee.</center>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <TextField
                                            required
                                            readOnly
                                            id="username"
                                            label="username"
                                            placeholder="username"
                                            type="text"
                                            variant="outlined"
                                            color="success"
                                            style={{width: '100%', marginBottom: 10}}
                                            value={username}
                                            onChange={event => setUsername(event.target.value)}
                                        />
                                    </FormControl>
                                
                                    <FormControl fullWidth>
                                        <TextField
                                            required
                                            readOnly
                                            id="firstname"
                                            label="firstname"
                                            placeholder="firstname"
                                            type="text"
                                            variant="outlined"
                                            color="success"
                                            style={{width: '100%', marginBottom: 10}}
                                            value={firstname}
                                            onChange={event => setFirstname(event.target.value)}
                                        />
                                    </FormControl>

                                    <FormControl fullWidth>
                                        <TextField
                                            required
                                            readOnly
                                            id="lastname"
                                            label="lastname"
                                            placeholder="lastname"
                                            type="text"
                                            variant="outlined"
                                            color="success"
                                            style={{width: '100%', marginBottom: 10}}
                                            value={lastname}
                                            onChange={event => setLastname(event.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <TextField
                                            required
                                            readOnly
                                            id="email"
                                            label="email"
                                            placeholder="email"
                                            type="email"
                                            variant="outlined"
                                            color="success"
                                            style={{width: '100%', marginBottom: 10}}
                                            value={email}
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel id='label-role' color='success' required>role</InputLabel>
                                        <Select
                                            required
                                            variant="outlined" 
                                            labelId="label-role" 
                                            value={role} 
                                            color="success" 
                                            label="rol" 
                                            style={{width: '100%', marginBottom: 10}}
                                            onChange={event => setRole(event.target.value)}
                                        >
                                            <MenuItem value={'employee'}>Employee</MenuItem>
                                            <MenuItem value={'manager'}>Manager</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl variant="outlined" fullWidth>
                                        <OutlinedInput
                                            required
                                            type="file"
                                            variant="outlined"
                                            inputProps={{ accept: 'image/jpeg' }}
                                            onChange={(event) => setAvatar(event.target.files[0])}
                                            color="success"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <List>
                        <Divider/>
                        <ListItem autoFocus button onClick={(event) => adding(event)} disabled={disable}>
                            <ListItemText primary={<Typography type="body2" style={{ textAlign: 'center'}}>Add</Typography>}/>
                        </ListItem>
                        <Divider/>
                        <ListItem autoFocus button onClick={() => canceling()}>
                            <ListItemText primary={<Typography type="body2" style={{ textAlign: 'center'}}>Cancel</Typography>}/>
                        </ListItem>
                    </List>
                </form>
            </Dialog>
        </Fragment>
    )
}
