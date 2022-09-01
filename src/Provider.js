import React from 'react';

const makeArray = (a) => {
	if (Array.isArray(a)) {
		return a;
	}

	return [a];
}

const Provider = (props) => {
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


export default Provider;
