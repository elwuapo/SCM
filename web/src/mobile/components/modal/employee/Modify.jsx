import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, Grid, InputLabel, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { white } from './Style';

export const Modify = () => {
    const classes = white();
    const [open, setOpen] = useState(false);

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
                <form onSubmit={() => {}}>
                    <DialogTitle>
                        <center>
                            <b>Modify</b>
                        </center>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography component='span' variant="body1" gutterBottom>
                                        <center>You are about to modify this employee.</center>
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
                                            value={'nrivera'}
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
                                            value={'Nicolás'}
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
                                            value={'Rivera'}
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
                                            value={'nrivera@email.com'}
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel id='label-role' color='success' required>role</InputLabel>
                                        <Select variant="outlined" labelId="label-role" value={1} color="success" label="role" required>
                                            <MenuItem value={1}>Employee</MenuItem>
                                            <MenuItem value={2}>Manager</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <List>
                        <Divider/>
                        <ListItem autoFocus button onClick={() => {}}>
                            <ListItemText primary={<Typography type="body2" style={{ textAlign: 'center'}}>Modify</Typography>}/>
                        </ListItem>
                        <Divider/>
                        <ListItem autoFocus button onClick={() => setOpen(false)}>
                            <ListItemText primary={<Typography type="body2" style={{ textAlign: 'center'}}>Cancel</Typography>}/>
                        </ListItem>
                    </List>
                </form>
            </Dialog>
        </Fragment>
    )
}
