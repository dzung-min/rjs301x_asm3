import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload
      window.localStorage.setItem("current_user", JSON.stringify(state.user))
    },
    logout(state) {
      state.user = null
      window.localStorage.removeItem("current_user")
    },
  },
})

export default userSlice
