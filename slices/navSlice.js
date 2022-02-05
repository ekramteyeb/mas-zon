import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducer: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart } = navSlice.actions;

//Selectors

export const selectCart = (state) => state.nav.cart;

// reducer
export default navSlice.reducer;
