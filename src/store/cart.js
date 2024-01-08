import { createSlice } from "@reduxjs/toolkit"

export const TYPE_INCREASE = "INCREASE"
export const TYPE_DECREASE = "DECREASE"

const initialState = {
  carts: [],
}

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    // this action is used to get the cart when the user re-open or reload the app
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

    update_cart(state, action) {
      const cartIndex = state.carts.findIndex(
        (cart) => cart.customer_email === action.payload.customer_email
      )
      const productIndex = state.carts[cartIndex].products.findIndex(
        (product) => product._id.$oid === action.payload.product._id.$oid
      )
      if (action.payload.type === TYPE_INCREASE) {
        state.carts[cartIndex].products[productIndex].quantity++
      }
      if (action.payload.type === TYPE_DECREASE) {
        state.carts[cartIndex].products[productIndex].quantity--
      }
      window.localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    remove_cart(state, action) {
      const cartIndex = state.carts.findIndex(
        (cart) => cart.customer_email === action.payload.customer_email
      )
      const productIndex = state.carts[cartIndex].products.findIndex(
        (product) => product._id.$oid === action.payload.product._id.$oid
      )
      state.carts[cartIndex].products.splice(productIndex, 1)
      window.localStorage.setItem("carts", JSON.stringify(state.carts))
    },
  },
})

export default cartSlice
