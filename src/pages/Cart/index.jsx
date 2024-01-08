import { useSelector } from "react-redux"

import CartItemList from "../../components/CartItemList"
import CartTotal from "../../components/CartTotal"
import PageTitle from "../../components/PageTitle"
import styles from "./styles.module.css"

function CartPage() {
  const current_user = useSelector((state) => state.user.user)
  const carts = useSelector((state) => state.carts.carts)
  const customer_email = current_user ? current_user.email : "unknown"
  const current_user_cart = carts.find(
    (cart) => cart.customer_email === customer_email
  )
  return (
    <div>
      <PageTitle title="cart" />
      <div className={styles.container}>
        <CartItemList cart={current_user_cart} />
        <CartTotal cart={current_user_cart} />
      </div>
    </div>
  )
}

export default CartPage
