import styles from "./styles.module.css"

function OrderDetail({ cart }) {
  const products = cart?.products || []
  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )
  return (
    <div className={styles.order}>
      <p className={styles.title}>Your Order</p>
      {products.map((product) => (
        <div key={product._id.$oid} className={styles.item}>
          <p>{product.name}</p>
          <p>
            {Number(product.price).toLocaleString("de-DE")} VND x{" "}
            {product.quantity}
          </p>
        </div>
      ))}
      <div className={styles.total}>
        <p>TOTAL</p>
        <p>{total.toLocaleString("de-DE")} VND</p>
      </div>
    </div>
  )
}

export default OrderDetail
