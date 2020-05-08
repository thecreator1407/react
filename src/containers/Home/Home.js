import React from 'react';
import logo from '../../logo.svg';
const Home = (props) => {
	return (
		<header className="App-header">
			<div className="App-logo">
				<img src={logo}   alt="logo" />
			</div>
			<h1 style={{margin:0}}>ReactJS</h1>  
			<h3 style={{margin:0,fontWeight:'normal'}}>A well structured reactjs empty project</h3>
			<ul>
				<li>Enabled with Router</li>
				<li>Enabled with Errors</li>
			</ul>
			<small>Please run npm update or npm install before start working .</small>	
		</header>
	);
}

export default Home;