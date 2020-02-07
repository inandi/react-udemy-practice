import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>hello {props.UserName}</p>
			<p>my phone number is</p>
		</div>
		);
}

export default UserOutput;