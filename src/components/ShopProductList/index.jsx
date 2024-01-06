import { useNavigate, useSearchParams } from "react-router-dom"

import ProductList from "../ProductList"
import styles from "./styles.module.css"

function ShopProductList() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const category = searchParams.get("category")

  function visitDetailPage(product) {
    navigate(`/detail/${product._id.$oid}`)
  }

  return (
    <div className={styles["product-list"]}>
      <div className={styles.options}>
        <input type="text" placeholder="Enter Search Here!" />
        <select>
          <option value="default">Default sorting</option>
        </select>
      </div>
      <ProductList category={category} productClickHandler={visitDetailPage} />
    </div>
  )
}

export default ShopProductList
