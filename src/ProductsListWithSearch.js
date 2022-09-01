import React, {useState} from 'react';

const ProductsListWithSearch = (props) => {
	const filterProducts = (searchTerm, products) => {
		searchTerm = searchTerm.toUpperCase()
		return products.filter(product => {
			let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
			return str.indexOf(searchTerm) >= 0;
		});
	};

	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = event => {
		setSearchTerm(event.target.value);
	};

	/*
		make an array out of a scalar value if necessary
	*/
	const makeArray = (a) => {
		if (Array.isArray(a)) {
			return a;
		}

		return [a];
	}

	/*
		create a childComponent with new props with data filtered
		with the search term
	*/
	const childComponent = (child, index, searchTerm, rest) => {
		const { type: WrappedComponent, props } = child;
		const { data } = props;
		const filteredData = filterProducts(searchTerm, data);

		return (
			<WrappedComponent data={filteredData} key={index} {...rest}/>
		)
	}

	const wrapComponents = (props) => {
		const {children, ...rest} = props;

		return (
			makeArray(children).map((child, index) => {
				return childComponent(child, index, searchTerm, rest)}
			)
		);
	}

	return (
		<div>
			<div>
				<input
					onChange={handleSearch}
					value={searchTerm}
					type="text"
					placeholder="Search"
				/>
			</div>
			{wrapComponents(props)}
		</div>
	);
};

export default ProductsListWithSearch;
