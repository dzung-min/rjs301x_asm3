import { useSelector } from "react-redux"
import BillDetail from "../../components/BillDetail"
import OrderDetail from "../../components/OrderDetail"
import PageTitle from "../../components/PageTitle"
import styles from "./styles.module.css"

function CheckoutPage() {
  // get the cart for current user
  const current_user = useSelector((state) => state.user.user)
  const carts = useSelector((state) => state.carts.carts)
  const customer_email = current_user ? current_user.email : "unknown"
  const current_user_cart = carts.find(
    (cart) => cart.customer_email === customer_email
  )
  return (
    <div>
      <PageTitle title="checkout" />
      <p className={styles.title}>BILLING DETAILS</p>
      <div className={styles.content}>
        <BillDetail />
        <OrderDetail cart={current_user_cart} />
      </div>
    </div>
  )
}

export default CheckoutPage
