import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
	items: [],
};

const findItemIndex = (items, id) => {
	return items.findIndex((item) => item.id === id);
};

const updateItemQuantity = (items, index, delta) => {
	return items.map((item, i) =>
		i === index ? { ...item, quantity: item.quantity + delta } : item
	);
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const existingItemIndex = findItemIndex(state.items, action.payload.id);

			if (existingItemIndex !== -1) {
				// Item exists, increase quantity
				const updatedItems = updateItemQuantity(
					state.items,
					existingItemIndex,
					1
				);
				return { ...state, items: updatedItems };
			} else {
				// Add new item with quantity 1
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

		default:
			return state;
	}
};

export default cartReducer;
