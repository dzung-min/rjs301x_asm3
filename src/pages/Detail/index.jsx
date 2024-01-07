import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import ImageDetail from "../../components/ImageDetail"
import InfoDetail from "../../components/InfoDetail"
import styles from "./styles.module.css"
import DescDetail from "../../components/DescDetail"
import RelatedProduct from "../../components/RelatedProduct"

function DetailPage() {
  // the loading flag is used for solving problem when reloading the browser
  // while we are staying at detail page for a product. After reloading, this page is rerendered before the data
  // arrive => error
  const loading = useSelector((state) => state.products.loading)
  const products = useSelector((state) => state.products.products)
  const { product_id } = useParams()
  if (loading) return <div>Loading product</div> // display this while the data is being fetched
  // after the data is arrived, the component is rerendered with the data and all the code below can be run without problem
  const product = products.find((item) => item._id.$oid === product_id)
  const imageFields = Object.keys(product).filter((key) => key.includes("img")) // this line will caught error if we dont have the data
  const images = imageFields.map((img) => product[img])

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
