import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: "Mediterranean",
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItem(state, action) {
      const currentItem = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      if (currentItem.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== currentItem.pizzaId
        );
      }
      currentItem.quantity--;
      currentItem.totalPrice = currentItem.quantity * currentItem.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, clearCart, increaseItem, decreaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;
