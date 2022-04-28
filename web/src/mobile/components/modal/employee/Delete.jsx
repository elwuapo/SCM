import { Button, Dialog, DialogTitle, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { white } from './Style';

export const Delete = () => {
    const classes = white();
    const [open, setOpen] = useState(false);

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
                    <ListItem autoFocus button onClick={() => {}} disabled={false}>
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
