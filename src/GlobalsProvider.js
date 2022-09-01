import React from 'react';
import {makeArray} from './helpers.js';

const GlobalsProvider = (props) => {
	const globals = {
		foo: "bar"
	}
	const childComponent = (child, index) => {
		const props = {
			globals: globals,
			key: index
		};

		const WrappedComponent = React.cloneElement(child, props);

		return WrappedComponent;
	}

	const wrapComponents = () => {
		const {children} = props;

		return (
			makeArray(children).map((child, index) => {
				return childComponent(child, index)}
			)
		);
	}

	return(
		<div>{wrapComponents()}</div>
	)
}


export default GlobalsProvider;
