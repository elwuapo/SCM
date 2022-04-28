// React
import React, { Fragment } from 'react';

// Library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Files
import { Home } from '../web/pages/home/Home';
import { SignIn } from '../web/pages/sign/SignIn';

export const PathWeb = (props) => {
	
	const authenticated = props.authenticated;

	return (
		<Fragment>
			<Router>
				<Switch>
					<Route 
						path="/"  
						render={() => authenticated ? <Home key={Date.now()}/> : <SignIn  key={Date.now()}/>}    
						exact 
					/>
					<Route 
						path="/signin"  
						render={() => <SignIn  key={Date.now()}/>}    
						exact 
					/>
				</Switch>
			</Router>
		</Fragment>
	)
}
