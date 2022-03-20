import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: 0,
  token: [],
  loginToken: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload
    },
    setToken: (state, action) => {
      state.token = [...state.token, action.payload]
    },
    setLoginToken: (state, action) => {
      state.loginToken = action.payload
    }
  }
})

export const { setCart, setToken, setLoginToken } = navSlice.actions

//Selectors

export const selectCart = (state) => state.nav.cart
export const selectToken = (state) => state.nav.token
export const selectLoginToken = (state) => state.nav.loginToken

// reducer
export default navSlice.reducer
