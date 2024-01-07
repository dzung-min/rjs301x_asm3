import { configureStore } from "@reduxjs/toolkit"

import popUpSlice from "./popup"
import productSlice from "./products"
import userSlice from "./user"
import cartSlice from "./cart"

const store = configureStore({
  reducer: {
    popup: popUpSlice.reducer,
    products: productSlice.reducer,
    user: userSlice.reducer,
    carts: cartSlice.reducer,
  },
})

export default store
