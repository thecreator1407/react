import React from 'react';
import './Errors.css'
const Errors = (props) => {
	return (
		<div className="hero">
			<div className="container">
				<div className="innerC">
					<div className="heading">
						<span>{props.error.code}</span>
						<p>{props.error.message}</p>	
					</div>
					<div className="subhead_desc">
						<p className="description">
							{props.error.description}
						</p>
						<small>For changing the view change it in Error Component.</small>	
					</div>
				</div>
			</div>
		</div>
	);
}

export default Errors;	