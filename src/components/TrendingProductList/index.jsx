import { useDispatch } from "react-redux"

import ProductList from "../ProductList"
import styles from "./styles.module.css"
import popUpSlice from "../../store/popup"

function TrendingProductList() {
  const dispatch = useDispatch()

  function showPopUp(product) {
    dispatch(popUpSlice.actions.showPopUp(product))
  }

  return (
    <div className={styles.trending}>
      <div className={styles.info}>
        <p>make the hard way</p>
        <p>top trending products</p>
      </div>
      <ProductList productClickHandler={showPopUp} />
    </div>
  )
}

export default TrendingProductList
