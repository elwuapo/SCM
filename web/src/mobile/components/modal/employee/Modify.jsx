import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, Grid, InputLabel, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import Cookies from 'universal-cookie';
import { clearCookies, urlApi } from '../../../../setting/Setting';
import { white } from './Style';

export const Modify = (props) => {
    const classes = white();
    
    const [open, setOpen]           = useState(false);
    const [firstname, setFirstname] = useState(props.employee.user.first_name);
    const [lastname, setLastname]   = useState(props.employee.user.last_name);
    const [email, setEmail]         = useState(props.employee.user.email);
    const [role, setRole]           = useState(props.employee.role);
    const [avatar, setAvatar]       = useState(null);
    const [disable, setDisable]     = useState(false);
    const [path, setPath]           = useState(urlApi() + props.employee.avatar);
    
    const getImage = (event) => {
        setAvatar(event.target.files[0]);
        setPath(URL.createObjectURL(event.target.files[0]));
    }

    const modifying = async (event) => {
        event.preventDefault();
        setDisable(true);

        const header     = new Headers();
        const formdata   = new FormData();
        const cookies    = new Cookies();
        const token      = cookies.get("token");
        const businessId = cookies.get("businessId");

        header.append("Authorization", "Token " + token);

        formdata.append("username", props.employee.user.username);
        formdata.append("first_name", firstname);
        formdata.append("last_name", lastname);
        formdata.append("email", email);
        formdata.append("avatar", avatar);
        formdata.append("role", role);
        formdata.append("businessId", businessId);
        

        const request = {
            method: 'PUT',
            headers: header,
            body: formdata,
            redirect: 'follow'
        }

        const data = await fetch(urlApi() + '/api/v1/account/', request);

        switch(data.status){
            case 200:
                //const response = await data.json();
                window.location.reload()
                setOpen(false);
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
        setFirstname('');
        setLastname('');
        setEmail('');
        setRole('employee');
        setAvatar(null);
        setDisable(false);
    }

    return (
        <Fragment>
            <Button variant="contained" className={classes.modify} disabled={false} onClick={() => setOpen(true)}>
                modify
            </Button>

            <Dialog
                open={open} 
                onClose={() => setOpen(false)} 
                maxWidth={'xs'}
                PaperProps={{style:{borderRadius: 10, opacity: 0.9, backgroundColor: '#fff'}}}
            >
                <form onSubmit={(event) => modifying(event)}>
                    <DialogTitle>
                        <center>
                            <b>Modify</b>
                        </center>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            <Grid container>
                                <Grid item xs={12}>
                                    <center>
                                        <label htmlFor="avatar">
                                            <img className={classes.image} src={path} alt={'account-avatar'}/>
                                        </label>
                                        <input accept="image/png,image/jpeg" className={classes.input} id="avatar" type="file" onChange={(event) => getImage(event)}/>
                                    </center>
                                    
                                    <FormControl fullWidth>
                                        <TextField
                                            required
                                            readOnly
                                            id="firstname"
                                            label="firstname"
                                            placeholder="firstname"
                                            type="text"
                                            variant="outlined"
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
                                            label="rol" 
                                            style={{width: '100%', marginBottom: 10}}
                                            onChange={event => setRole(event.target.value)}
                                        >
                                            <MenuItem value={'employee'}>Employee</MenuItem>
                                            <MenuItem value={'manager'}>Manager</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <List>
                        <Divider/>
                        <ListItem autoFocus type="submit" component="button" disabled={disable}>
                            <ListItemText primary={<Typography type="body2" style={{ textAlign: 'center'}}>Modify</Typography>}/>
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
