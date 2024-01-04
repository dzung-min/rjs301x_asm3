import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootPage from "./pages/Root"
import HomePage from "./pages/Home"
import ShopPage from "./pages/Shop"
import DetailPage from "./pages/Detail"
import CartPage from "./pages/Cart"
import CheckoutPage from "./pages/Checkout"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "detail", element: <DetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
