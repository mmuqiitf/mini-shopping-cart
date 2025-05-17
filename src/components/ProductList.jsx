import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

// Daftar produk statis (bisa juga dari props atau state komponen jika lebih kompleks)
const products = [
	{ id: 1, name: "Produk A", price: 10000 },
	{ id: 2, name: "Produk B", price: 15000 },
	{ id: 3, name: "Produk C", price: 20000 },
];

export default function ProductList() {
	const dispatch = useDispatch();

	return (
		<div>
			<h3>Daftar Produk</h3>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name} - Rp {product.price}
						<button onClick={() => dispatch(addToCart(product))}>
							Tambah ke Keranjang
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
