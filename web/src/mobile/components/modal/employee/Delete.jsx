import { Button, Dialog, DialogTitle, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import Cookies from 'universal-cookie';
import { urlApi } from '../../../../setting/Setting';
import { white } from './Style';

export const Delete = (props) => {
    const classes = white();

    const [open, setOpen]       = useState(false);
    const [disable, setDisable] = useState(false);

    const removing = async () => {
        setDisable(true);
        const header   = new Headers();
        const formdata = new FormData();
        const cookies  = new Cookies();
        const token    = cookies.get("token");

        header.append("Authorization", "Token " + token);
        formdata.append("username", props.employee.user.username);

        const request = {
            method: 'DELETE',
            headers: header,
            body: formdata,
            redirect: 'follow',
        }

        const data = await fetch(urlApi() + "/api/v1/account/", request);

        switch(data.status){
            case 200:
                props.setEmployees((prev) => prev.filter(account => account.user.username !== props.employee.user.username));
                setOpen(false);
                break;
            default:
                break;
        };

        setDisable(false)
    };


    return (
        <Fragment>
            <Button variant="contained" className={classes.delete} disabled={false} onClick={() => setOpen(true)}>
                delete
            </Button> 

            <Dialog 
                open={open} 
                onClose={() => setOpen(false)}
                PaperProps={{style:{borderRadius: 10, background: '#fff', opacity: 0.9, maxWidth: '400px'}}}
            >
                <DialogTitle className={classes.modal}>
                    <center>
                        Delete
                    </center>
                </DialogTitle>

                <div className={classes.info}>
                    You are about to delete this employee <b>permanently</b>.
                </div>

                <List className={classes.modal}>
                    <Divider/>
                    <ListItem autoFocus button onClick={() => removing()} disabled={disable}>
                        <ListItemText primary={<Typography type="body2" style={{ textAlign: 'center', color: '#f44336' }}>Delete</Typography>}/>
                    </ListItem>
                    <Divider/>
                    <ListItem autoFocus button onClick={() => setOpen(false)}>
                        <ListItemText primary={<Typography type="body2" style={{ textAlign: 'center' }}>Cancel</Typography>}/>
                    </ListItem>
                </List>
            </Dialog>
        </Fragment>
    )
}
