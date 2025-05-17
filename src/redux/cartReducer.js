import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	DECREASE_QUANTITY,
	INCREASE_QUANTITY,
} from "./actionTypes";

const initialState = {
	items: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			// Cek apakah item sudah ada di keranjang
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex !== -1) {
				// Jika sudah ada, tingkatkan quantity
				const updatedItems = state.items.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
				return { ...state, items: updatedItems };
			} else {
				// Jika belum ada, tambahkan item baru dengan quantity 1
				return {
					...state,
					items: [...state.items, { ...action.payload, quantity: 1 }],
				};
			}
		}
		case REMOVE_FROM_CART: {
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
		}

		case INCREASE_QUANTITY: {
			const updatedItems = state.items.map((item) =>
				item.id === action.payload
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			return { ...state, items: updatedItems };
		}

		case DECREASE_QUANTITY: {
			const updatedItems = state.items.map((item) =>
				item.id === action.payload
					? { ...item, quantity: Math.max(item.quantity - 1, 0) }
					: item
			);
			return { ...state, items: updatedItems };
		}

		default:
			return state;
	}
};

export default cartReducer;
