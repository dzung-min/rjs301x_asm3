import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootPage from "./pages/Root"
import HomePage from "./pages/Home"
import ShopPage from "./pages/Shop"
import DetailPage from "./pages/Detail"
import CartPage from "./pages/Cart"
import CheckoutPage from "./pages/Checkout"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import ShopProductList from "./components/ShopProductList"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchProducts } from "./store/products"
import userSlice from "./store/user"
import cartSlice from "./store/cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "shop",
        element: <ShopPage />,
        children: [{ index: true, element: <ShopProductList /> }],
      },
      { path: "detail/:product_id", element: <DetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
])

function App() {
  const dispatch = useDispatch()
  const currentUser = JSON.parse(window.localStorage.getItem("current_user"))
  const carts = JSON.parse(window.localStorage.getItem("carts") || "[]")
  useEffect(() => {
    dispatch(userSlice.actions.login(currentUser))
    dispatch(cartSlice.actions.set_carts(carts))
    dispatch(fetchProducts())
  }, [dispatch, currentUser, carts])

  return <RouterProvider router={router} />
}

export default App
