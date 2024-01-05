import { configureStore } from "@reduxjs/toolkit"

import popUpSlice from "./popup"

const store = configureStore({ reducer: { popup: popUpSlice.reducer } })

export default store
