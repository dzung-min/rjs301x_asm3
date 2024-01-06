import { useSelector } from "react-redux"

import styles from "./styles.module.css"
import Product from "../Product"
import { useNavigate } from "react-router-dom"

function RelatedProduct({ product }) {
  const navigate = useNavigate()
  const products = useSelector((state) => state.products.products)
  const relatedProduct = products.filter(
    (item) =>
      item.category === product.category && item._id.$oid !== product._id.$oid
  )
  function clickHandler(product) {
    navigate(`/detail/${product._id.$oid}`)
    window.scrollTo(0, 0)
  }
  return relatedProduct.length > 0 ? (
    <div className={styles.related}>
      <p className={styles.title}>RELATED PRODUCTS</p>
      <div className={styles.products}>
        {relatedProduct.map((prod) => (
          <Product
            key={prod._id.$oid}
            product={prod}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  ) : null
}

export default RelatedProduct
