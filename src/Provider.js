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
		const { type: WrappedComponent, props } = child;
		const { data, ...rest} = props;

		return (
			<WrappedComponent key={index} globals={globals} {...rest}/>
		)
	}
	const wrapComponents = (props) => {
		const {children} = props;
		return (
			makeArray(children).map((child, index) => {
				return childComponent(child, index)}
			)
		);
	}

	return(
		<div>{wrapComponents(props)}</div>
	)
}


export default Provider;
