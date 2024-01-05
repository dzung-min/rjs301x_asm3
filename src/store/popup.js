import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  popUpProduct: null,
}

const popUpSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopUp(state, action) {
      state.popUpProduct = action.payload
    },

    hidePopUp(state) {
      state.popUpProduct = null
    },
  },
})

export default popUpSlice
