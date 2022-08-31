import React, {useState} from 'react';

const withSearch = (WrappedComponent, props) => {
	const filterProducts = (searchTerm, products) => {
		searchTerm = searchTerm.toUpperCase()
		return products.filter(product => {
			let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
			return str.indexOf(searchTerm) >= 0;
		});
	};

	const getDisplayName = () => {
		return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	};

	const ProductsListWithSearch = (props) => {
		const [searchTerm, setSearchTerm] = useState("");

		const handleSearch = event => {
			setSearchTerm(event.target.value);
		};

		const filteredProducts = filterProducts(searchTerm,props.products);

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
				<WrappedComponent data={filteredProducts} />
			</div>
		);
	}

    ProductsListWithSearch.displayName =
		`ProductsListWithSearch(${getDisplayName(WrappedComponent)})`;

	return ProductsListWithSearch;
};

export default withSearch;
