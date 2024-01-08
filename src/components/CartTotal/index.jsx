import styles from "./styles.module.css"

function CartTotal({ cart }) {
  // set current cart to avoid error when there is no cart (undefined)
  const current_cart = cart || { products: [] }
  // calculate total amount based on the product price and quantity
  const total = current_cart.products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className={styles.container}>
      <p className={styles.title}>Cart Total</p>
      <div className={styles.sub}>
        <p>SUBTOTAL</p>
        <p>{Number(total).toLocaleString("de-DE")} VND</p>
      </div>
      <div className={styles.total}>
        <p>TOTAL</p>
        <p>{Number(total).toLocaleString("de-DE")} VND</p>
      </div>
      <input type="text" placeholder="Enter your coupon" />
      <button>
        <span className="material-symbols-outlined">redeem</span>Apply Coupon
        <span></span>
      </button>
    </div>
  )
}

export default CartTotal
