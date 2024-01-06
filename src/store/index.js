import { configureStore } from "@reduxjs/toolkit"

import popUpSlice from "./popup"
import productSlice from "./products"

const store = configureStore({
  reducer: { popup: popUpSlice.reducer, products: productSlice.reducer },
})

export default store
