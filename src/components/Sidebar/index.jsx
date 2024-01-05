import { useNavigate } from "react-router-dom"

import styles from "./styles.module.css"

function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className={styles.sidebar}>
      <h3>CATEGORIES</h3>
      <h4>APPLE</h4>
      <p onClick={() => navigate("/shop")}>All</p>
      <h4>IPHONE & MAC</h4>
      <p onClick={() => navigate("/shop?category=iphone")}>Iphone</p>
      <p onClick={() => navigate("/shop?category=ipad")}>Ipad</p>
      <p onClick={() => navigate("/shop?category=macbook")}>Macbook</p>
      <h4>WIRELESS</h4>
      <p onClick={() => navigate("/shop?category=airpod")}>Airpod</p>
      <p onClick={() => navigate("/shop?category=watch")}>Watch</p>
      <h4>OTHER</h4>
      <p onClick={() => navigate("/shop?category=mouse")}>Mouse</p>
      <p onClick={() => navigate("/shop?category=keyboard")}>Keyboard</p>
      <p onClick={() => navigate("/shop?category=other")}>Other</p>
    </div>
  )
}

export default Sidebar
