// React
import React, { Fragment, useEffect, useState } from 'react';

// Material-UI
import { Hidden } from '@material-ui/core';

//Library
import Cookies from 'universal-cookie';

// Files
import { PathWeb } from './routes/PathWeb';
import { PathMobile } from './routes/PathMobile';



export const App = () => {
	const [authenticated, setAuthenticated] = useState();

	useEffect(() => {
		const cookies = new Cookies();
    	const token   = cookies.get("token");

		if(token !== undefined){
            setAuthenticated(true);
        }else{
            setAuthenticated(false)
        };
    }, []);

	return (
		<Fragment>
			<Hidden mdUp>
				<PathMobile authenticated={authenticated}/>
			</Hidden>

			<Hidden smDown>
				<PathWeb authenticated={authenticated}/>
			</Hidden>
		</Fragment>
	);
};