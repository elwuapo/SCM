// React
import React, { Fragment } from 'react';

// Library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Files
import { Attendance } from '../mobile/pages/attendance/Attendance';
import { Business } from '../mobile/pages/business/Business';
import { External } from '../mobile/pages/external/External';
import { Home } from '../mobile/pages/home/Home';
import { Markattendance } from '../mobile/pages/markattendance/Markattendance';
import { Resume } from '../mobile/pages/resume/Resume';
import { Schedule } from '../mobile/pages/schedule/Schedule';
import { SignIn } from '../mobile/pages/sign/SignIn';

export const PathMobile = (props) => {
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
						render={() => <SignIn  key={Date.now()}/> }    
						exact 
					/>
					<Route 
						path="/business"  
						render={() => authenticated ? <Business key={Date.now()}/> : <SignIn  key={Date.now()}/>}    
						exact 
					/>
					<Route 
						path="/attendance"  
						render={() => authenticated ? <Attendance key={Date.now()}/> : <SignIn  key={Date.now()}/>}    
						exact 
					/>
					<Route 
						path="/mark-attendance"  
						render={() => authenticated ? <Markattendance key={Date.now()}/> : <SignIn  key={Date.now()}/>}    
						exact 
					/>
					<Route 
						path="/schedule"  
						render={() => authenticated ? <Schedule key={Date.now()}/> : <SignIn  key={Date.now()}/>}    
						exact 
					/>
					<Route 
						path="/resume"  
						render={() => authenticated ? <Resume key={Date.now()}/> : <SignIn  key={Date.now()}/>}    
						exact 
					/>
					<Route 
						path="/external_system"  
						render={() => authenticated ? <External key={Date.now()}/> : <SignIn  key={Date.now()}/>}
						exact 
					/>
				</Switch>
			</Router>
		</Fragment>
	)
}
