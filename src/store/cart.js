import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  carts: [],
}

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    set_carts(state, action) {
      state.carts = action.payload
    },
    add_cart(state, action) {
      const cartIndex = state.carts.findIndex(
        (cart) => cart.customer_email === action.payload.customer_email
      )
      if (cartIndex === -1) {
        const products = []
        products.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
        })
        state.carts.push({
          customer_email: action.payload.customer_email,
          products,
        })
      } else {
        const productIndex = state.carts[cartIndex].products.findIndex(
          (product) => product._id.$oid === action.payload.product._id.$oid
        )
        if (productIndex === -1) {
          state.carts[cartIndex].products.push({
            ...action.payload.product,
            quantity: action.payload.quantity,
          })
        } else {
          state.carts[cartIndex].products[productIndex].quantity +=
            action.payload.quantity
        }
      }
      window.localStorage.setItem("carts", JSON.stringify(state.carts))
    },
  },
})

export default cartSlice
