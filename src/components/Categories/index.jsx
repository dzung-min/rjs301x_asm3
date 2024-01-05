import { useNavigate } from "react-router-dom"

import styles from "./styles.module.css"
import product_1 from "../../assets/product_1.png"
import product_2 from "../../assets/product_2.png"
import product_3 from "../../assets/product_3.png"
import product_4 from "../../assets/product_4.png"
import product_5 from "../../assets/product_5.png"

function Categories() {
  const navigate = useNavigate()

  function categorySelectHandler() {
    navigate("/shop")
  }

  return (
    <div className={styles.categories}>
      <div className={styles.info}>
        <p>carefully created collections</p>
        <p>browse our categories</p>
      </div>
      <div className={styles.products}>
        <div onClick={categorySelectHandler}>
          <img src={product_1} alt="product_1" />
        </div>
        <div onClick={categorySelectHandler}>
          <img src={product_2} alt="product_2" />
        </div>
        <div onClick={categorySelectHandler}>
          <img src={product_3} alt="product_3" />
        </div>
        <div onClick={categorySelectHandler}>
          <img src={product_4} alt="product_4" />
        </div>
        <div onClick={categorySelectHandler}>
          <img src={product_5} alt="product_5" />
        </div>
      </div>
    </div>
  )
}

export default Categories
