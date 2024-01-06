import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import ImageDetail from "../../components/ImageDetail"
import InfoDetail from "../../components/InfoDetail"
import styles from "./styles.module.css"
import DescDetail from "../../components/DescDetail"
import RelatedProduct from "../../components/RelatedProduct"

function DetailPage() {
  const products = useSelector((state) => state.products.products)
  const { product_id } = useParams()
  const product = products.find((item) => item._id.$oid === product_id)
  // console.log(product)
  const imageFields = Object.keys(product).filter((key) => key.includes("img"))
  const images = imageFields.map((img) => product[img])
  // console.log(images)

  return (
    <>
      <div className={styles.details}>
        <ImageDetail images={images} />
        <InfoDetail product={product} />
      </div>
      <DescDetail product={product} />
      <RelatedProduct product={product} />
    </>
  )
}

export default DetailPage
