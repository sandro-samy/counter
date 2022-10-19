import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import counterSlice from "./counterSlice";
import loginSlice from "./loginSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    products: productsSlice,
    login: loginSlice,
  },
});

export default store;
