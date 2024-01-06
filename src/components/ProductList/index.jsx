import styles from "./styles.module.css"
import Product from "../Product"
import { useSelector } from "react-redux"

function ProductList({ category, productClickHandler }) {
  const products = useSelector((state) => state.products.products)

  let fiteredProducts
  if (!category) fiteredProducts = products
  else
    fiteredProducts = products.filter(
      (product) => product.category === category
    )

  const productList = fiteredProducts.map((prod) => (
    <Product
      key={prod._id.$oid}
      product={prod}
      clickHandler={productClickHandler}
    />
  ))
  return <div className={styles.products}>{productList}</div>
}

export default ProductList
