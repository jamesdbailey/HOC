import './App.css';
import products from './products.json';
import Provider from './Provider';
import ProductsListWithSearch from './ProductsListWithSearch';
import ProductsList from './ProductsList';

function App() {
	return (
		<div className="App">
			<Provider>
				<ProductsListWithSearch>
					<ProductsList data={products} />
				</ProductsListWithSearch>
			</Provider>
		</div>
	);
}

export default App;
