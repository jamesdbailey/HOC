import './App.css';
import products from './products.json';
import withSearch from './ProductsListWithSearch';
import ProductsList from './ProductsList';

const ProductsListWithSearch = withSearch(ProductsList);

function App() {
	return (
		<div className="App">
			<ProductsListWithSearch data={products} />
		</div>
	);
}

export default App;
