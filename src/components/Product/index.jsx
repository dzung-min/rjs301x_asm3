import styles from "./styles.module.css"

function Product({ product, clickHandler }) {
  return (
    <div className={styles.product}>
      <div onClick={clickHandler.bind(null, product)} className={styles.image}>
        <img src={product.img1} alt={product.name} />
      </div>
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>
        {Number(product.price).toLocaleString("de-DE") + " VND"}
      </p>
    </div>
  )
}

export default Product
