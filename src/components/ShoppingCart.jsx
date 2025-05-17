import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

export default function ShoppingCart() {
	const cartItems = useSelector((state) => state.items); // Mengambil items dari state Redux
	const dispatch = useDispatch();

	// Hitung total harga (bisa juga dilakukan di reducer atau dengan selector yang lebih canggih)
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	if (cartItems.length === 0) {
		return (
			<div>
				<h3>Keranjang Belanja</h3>
				<p>Keranjang Anda kosong.</p>
			</div>
		);
	}

	return (
		<div>
			<h3>Keranjang Belanja</h3>
			<ul>
				{cartItems.map((item) => (
					<li key={item.id}>
						{item.name} (x{item.quantity}) - Rp {item.price * item.quantity}
						<button onClick={() => dispatch(removeFromCart(item.id))}>
							Hapus
						</button>
					</li>
				))}
			</ul>
			<h4>Total Belanja: Rp {totalPrice}</h4>
		</div>
	);
}
