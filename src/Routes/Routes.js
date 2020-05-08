import React from "react";
import { BrowserRouter, Switch,  Route } from "react-router-dom";
import Error from '../components/Errors/Errors'
import errors from '../config/errorcode' 
import Home from '../containers/Home/Home'
const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/home" exact component={Home}/>
				<Route path="*" >
					<Error error={errors[404]} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;