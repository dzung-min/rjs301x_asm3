import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  loading: true,
}

// the thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
    if (!resp.ok) return new Error("Can not fetch data")
    const data = resp.json()
    return data
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.loading = false
    })
  },
})

export default productSlice
