import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: 0,
  token: null,
  loginToken: null,
  products: null,
  user: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setLoginToken: (state, action) => {
      state.loginToken = action.payload
    },
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { setCart, setToken, setLoginToken, setProducts, setUser } =
  navSlice.actions

//Selectors

export const selectCart = (state) => state.nav.cart
export const selectToken = (state) => state.nav.token
export const selectLoginToken = (state) => state.nav.loginToken
export const selectProducts = (state) => state.nav.products
export const selectUser = (state) => state.nav.user
// reducer
export default navSlice.reducer
