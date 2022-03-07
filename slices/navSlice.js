import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
  token: [],
};

export const navSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setToken: (state, action) => {
      state.token = [...state.token, action.payload];
    },
  },
});

export const { setCart, setToken } = navSlice.actions;

//Selectors

export const selectCart = (state) => state.nav.cart;
export const selectToken = (state) => state.nav.token;

// reducer
export default navSlice.reducer;
