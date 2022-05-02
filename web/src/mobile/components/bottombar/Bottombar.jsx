// React
import React, { Fragment, useState } from 'react';

// Material-UI
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import EventIcon from '@material-ui/icons/Event';

// Library

// Files

import { white } from './Style';
import Cookies from 'universal-cookie';

export const Bottombar = (props) => {
    const classes = white();
    const cookies = new Cookies();
    const role    = cookies.get('role');
    
    const [value, setValue] = useState(props.index);

    return (
        <Fragment>
            <BottomNavigation
                value={value}
                onChange={(newValue) => setValue(newValue)}
                showLabels
                className={classes.root}
            >
            
                
                { role === 'manager' ?
                    <Fragment>
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => window.location.href = "/"}/>
                        <BottomNavigationAction label="Business" icon={<BusinessIcon />} onClick={() => window.location.href = "/business"}/>
                        <BottomNavigationAction label="Attendance" icon={<EventIcon />} onClick={() => window.location.href = "/attendance"}/>
                    </Fragment>
                    :
                    <Fragment>
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => window.location.href = "/"}/>
                    </Fragment>
                }
                
            </BottomNavigation>
        </Fragment>
    )
}
