import { createStore } from "redux";
import cartReducer from "./cartReducer"; // Ganti dengan cartReducer

const store = createStore(cartReducer);

export default store;
