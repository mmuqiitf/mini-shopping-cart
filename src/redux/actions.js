import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (product) => {
	return {
		type: ADD_TO_CART,
		payload: product, // Kirim seluruh objek produk
	};
};

export const removeFromCart = (productId) => {
	return {
		type: REMOVE_FROM_CART,
		payload: productId, // Kirim hanya ID produk yang akan dihapus
	};
};

// Tugas Anda menambahkan function untuk action types INCREASE_QUANTITY, DECREASE_QUANTITY
