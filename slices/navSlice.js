import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  token: null,
  loginToken: null,
  products: null,
  filter: '',
  user: null,
  orders:[]
}

export const navSlice = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    setUpdateCart: (state, action) => {
      state.cart = [...action.payload]
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
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setOrders: (state, action) => {
      state.orders = [...state.orders, action.payload]
    },
    setUpdateOrders: (state, action) => {
      state.orders = [...action.payload]
    },

  }
})

export const {
  setCart,
  setToken,
  setLoginToken,
  setProducts,
  setFilter,
  setUser,
  setUpdateCart,
  setOrders,
  setUpdateOrders
} = navSlice.actions

//Selectors

export const selectCart = (state) => state.nav.cart
export const selectToken = (state) => state.nav.token
export const selectLoginToken = (state) => state.nav.loginToken
export const selectProducts = (state) => state.nav.products
export const selectUser = (state) => state.nav.user
export const selectOrders = (state) => state.nav.orders


// reducer
export default navSlice.reducer
