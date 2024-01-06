import { useState } from "react"

import styles from "./styles.module.css"

function ImageDetail({ images }) {
  const [showImage, setShowImage] = useState(images[0])

  function imgClickHandler(image) {
    setShowImage(image)
  }

  const imageList = images.map((image, i) => (
    <img
      key={`${image} ${i}`}
      src={image}
      alt=""
      onClick={imgClickHandler.bind(null, image)}
    />
  ))

  return (
    <div className={styles["img-container"]}>
      <div className={styles["img-list"]}>{imageList}</div>
      <div className={styles["show-img"]}>
        <img src={showImage} alt="" />
      </div>
    </div>
  )
}

export default ImageDetail
