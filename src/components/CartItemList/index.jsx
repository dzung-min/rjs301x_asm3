import { useNavigate } from "react-router-dom"
import CartItem from "../CartItem"
import styles from "./styles.module.css"

function CartItemList({ cart }) {
  const navigate = useNavigate()
  const current_cart = cart || { products: [] }

  function continueShoppingHandler() {
    navigate("/shop")
    window.scrollTo(0, 0)
  }

  function gotoCheckoutHandler() {
    navigate("/checkout")
    window.scrollTo(0, 0)
  }
  return (
    <div>
      <div>
        <div className={styles.header}>
          <div>
            <span>IMAGE</span>
          </div>
          <div>
            <span>PRODUCT</span>
          </div>
          <div>
            <span>PRICE</span>
          </div>
          <div>
            <span>QUANTITY</span>
          </div>
          <div>
            <span>TOTAL</span>
          </div>
          <div>
            <span>REMOVE</span>
          </div>
        </div>
        <div className={styles.list}>
          {current_cart.products.length ? (
            current_cart.products.map((product) => (
              <CartItem key={product._id.$oid} product={product} />
            ))
          ) : (
            <p>There is no product. Please add one.</p>
          )}
        </div>
        <div className={styles.footer}>
          <button onClick={continueShoppingHandler}>
            <span className="material-symbols-outlined">arrow_back</span>
            <span>Continue shopping</span>
          </button>
          <button
            onClick={gotoCheckoutHandler}
            disabled={current_cart.products.length === 0}
          >
            <span>Process to checkout</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItemList
