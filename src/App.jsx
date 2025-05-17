import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h2>Mini Toko Online dengan Redux</h2>
			</header>
			<main>
				<ProductList />
				<hr />
				<ShoppingCart />
			</main>
		</div>
	);
}

export default App;
