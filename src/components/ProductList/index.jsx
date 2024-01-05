import styles from "./styles.module.css"
import Product from "../Product"

function ProductList({ products, productClickHandler }) {
  const productList = products.map((prod) => (
    <Product
      key={prod._id.$oid}
      product={prod}
      clickHandler={productClickHandler}
    />
  ))
  return <div className={styles.products}>{productList}</div>
}

export default ProductList
