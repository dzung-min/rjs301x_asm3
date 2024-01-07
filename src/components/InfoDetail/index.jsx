import { useRef } from "react"
import styles from "./styles.module.css"
import { useSelector, useDispatch } from "react-redux"
import cartSlice from "../../store/cart"

function InfoDetail({ product }) {
  const inputRef = useRef()
  const dispatch = useDispatch()
  const currentCustomer = useSelector((state) => state.user.user)

  function increaseHandler() {
    inputRef.current.value++
  }

  function decreaseHandler() {
    if (Number(inputRef.current.value) === 1) return
    inputRef.current.value--
  }

  function addToCartHandler(e) {
    e.preventDefault()
    dispatch(
      cartSlice.actions.add_cart({
        customer_email: currentCustomer ? currentCustomer.email : "unknown",
        product,
        quantity: Number(inputRef.current.value),
      })
    )
    inputRef.current.value = 1
  }

  return (
    <div className={styles.info}>
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>
        {Number(product.price).toLocaleString("de-DE") + " VND"}
      </p>
      <p className={styles.desc}>{product.short_desc}</p>
      <p className={styles.category}>
        <span>CATEGORY:</span> {product.category}
      </p>
      <form className={styles.form} onSubmit={addToCartHandler}>
        <div className={styles.placeholder}>QUANTITY</div>
        <input type="number" min={1} defaultValue={1} ref={inputRef} />
        <button
          onClick={decreaseHandler}
          className={`${styles["ctrl-btn"]} ${styles["btn-lesser"]}`}
          type="button"
        >
          <span className="material-symbols-outlined">arrow_left</span>
        </button>
        <button
          onClick={increaseHandler}
          className={`${styles["ctrl-btn"]} ${styles["btn-greater"]}`}
          type="button"
        >
          <span className="material-symbols-outlined">arrow_right</span>
        </button>
        <button type="submit">Add to cart</button>
      </form>
    </div>
  )
}

export default InfoDetail
