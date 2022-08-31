import './App.css';
import {withSearch} from './ProductsListWithSearch';
import ProductsList from './ProductsList';

const ProductsListWithSearch = withSearch(ProductsList);

function App() {
	return (
		<div className="App">
			<ProductsListWithSearch />
		</div>
	);
}

export default App;
