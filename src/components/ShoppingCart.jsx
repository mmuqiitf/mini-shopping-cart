import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
} from "../redux/actions";

export default function ShoppingCart() {
	const cartItems = useSelector((state) => state.items); // Mengambil items dari state Redux
	const dispatch = useDispatch();

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	if (cartItems.length === 0) {
		return (
			<div className="cart">
				<h3>Keranjang Belanja</h3>
				<p>Keranjang Anda kosong.</p>
			</div>
		);
	}

	return (
		<div className="cart">
			<h3>Keranjang Belanja</h3>
			<ul className="cart-list">
				{cartItems.map((item) => (
					<li key={item.id} className="cart-item">
						<div className="item-info">
							{item.name} - Rp {item.price.toLocaleString()}
						</div>
						<div className="item-controls">
							<button
								className="quantity-btn"
								onClick={() => dispatch(decreaseQuantity(item.id))}
								disabled={item.quantity <= 1}
							>
								-
							</button>
							<span className="quantity">{item.quantity}</span>
							<button
								className="quantity-btn"
								onClick={() => dispatch(increaseQuantity(item.id))}
							>
								+
							</button>
							<div className="item-subtotal">
								Rp {(item.price * item.quantity).toLocaleString()}
							</div>
							<button
								className="remove-btn"
								onClick={() => dispatch(removeFromCart(item.id))}
							>
								Hapus
							</button>
						</div>
					</li>
				))}
			</ul>
			<h4 className="cart-total">
				Total Belanja: Rp {totalPrice.toLocaleString()}
			</h4>
		</div>
	);
}
