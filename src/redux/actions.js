import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	DECREASE_QUANTITY,
	INCREASE_QUANTITY,
} from "./actionTypes";

// Asumsi product adalah objek dengan minimal properti 'id' dan 'name'
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
