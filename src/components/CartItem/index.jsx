import { useDispatch } from "react-redux"

import styles from "./styles.module.css"
import cartSlice, { TYPE_DECREASE, TYPE_INCREASE } from "../../store/cart"
import { useRef } from "react"
import { useSelector } from "react-redux"

function CartItem({ product }) {
  const dispatch = useDispatch()
  const current_user = useSelector((state) => state.user.user)
  const customer_email = current_user ? current_user.email : "unknown"
  const quantityRef = useRef()

  function incrementHandler(product) {
    dispatch(
      cartSlice.actions.update_cart({
        type: TYPE_INCREASE,
        product,
        customer_email,
      })
    )
  }

  function decrementHandler(product) {
    if (quantityRef.current.textContent === "1") return
    dispatch(
      cartSlice.actions.update_cart({
        type: TYPE_DECREASE,
        product,
        customer_email,
      })
    )
  }

  function removeHandler(product) {
    dispatch(cartSlice.actions.remove_cart({ product, customer_email }))
  }

  return (
    <div className={styles.item}>
      <div>
        <img src={product.img1} alt="" />
      </div>
      <div className={styles.name}>{product.name}</div>
      <div>{Number(product.price).toLocaleString("de-DE")} VND</div>
      <div className={styles.quantity}>
        <span ref={quantityRef}>{product.quantity}</span>
        <button
          onClick={decrementHandler.bind(null, product)}
          className={`${styles["ctrl-btn"]} ${styles["btn-lesser"]}`}
          type="button"
        >
          <span className="material-symbols-outlined">arrow_left</span>
        </button>
        <button
          onClick={incrementHandler.bind(null, product)}
          className={`${styles["ctrl-btn"]} ${styles["btn-greater"]}`}
          type="button"
        >
          <span className="material-symbols-outlined">arrow_right</span>
        </button>
      </div>
      <div>
        {(product.price * product.quantity).toLocaleString("de-DE")} VND
      </div>
      <div className={styles.remove}>
        <button onClick={removeHandler.bind(null, product)}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  )
}

export default CartItem
