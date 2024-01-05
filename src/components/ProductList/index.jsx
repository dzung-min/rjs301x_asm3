import styles from "./styles.module.css"
import Product from "../Product"

function ProductList({ products }) {
  const productList = products.map((prod) => (
    <Product key={prod._id.$oid} product={prod} />
  ))
  return <div className={styles.products}>{productList}</div>
}

export default ProductList
