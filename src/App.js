import './App.css';
import products from './products.json';
import GlobalsProvider from './GlobalsProvider';
import ProductsListWithSearch from './ProductsListWithSearch';
import ProductsList from './ProductsList';

function App() {
	return (
		<div className="App">
			<GlobalsProvider>
				<ProductsListWithSearch value="foobar" >
					<ProductsList data={products} />
				</ProductsListWithSearch>
			</GlobalsProvider>
		</div>
	);
}

export default App;
