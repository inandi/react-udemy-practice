import React from 'react';

const userInput = (props) => {

	const stylMe = {
		border : '2px solid red'
	}

	return <input type="text" style={stylMe} onChange={props.changed} value={props.currenName} />;
}

export default userInput;