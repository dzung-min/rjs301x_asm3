import { useState, useEffect } from "react"

import ProductList from "../ProductList"
import styles from "./styles.module.css"

function TrendingProductList() {
  const [trendingProducts, setTrendingProducts] = useState([])

  useEffect(() => {
    async function getTrendingProducts() {
      try {
        const resp = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        )
        if (!resp.ok) throw new Error("Can not fetch products")
        const data = await resp.json()
        setTrendingProducts(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getTrendingProducts()
  }, [])
  return (
    <div className={styles.trending}>
      <div className={styles.info}>
        <p>make the hard way</p>
        <p>top trending products</p>
      </div>
      <ProductList products={trendingProducts} />
    </div>
  )
}

export default TrendingProductList
