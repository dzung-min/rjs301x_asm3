import { useNavigate } from "react-router-dom"

import bannerImage from "../../assets/banner1.jpg"
import styles from "./styles.module.css"

function Banner() {
  const navigate = useNavigate()

  function buttonClickHandler() {
    navigate("/shop")
  }

  return (
    <div className={styles.banner}>
      <img src={bannerImage} alt="banner" />
      <div className={styles.hero}>
        <p>new inspiration 2020</p>
        <p>20% off on new season</p>
        <button onClick={buttonClickHandler}>Browse collections</button>
      </div>
    </div>
  )
}

export default Banner
