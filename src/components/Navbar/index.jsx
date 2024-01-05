import { useNavigate } from "react-router-dom"

import styles from "./styles.module.css"

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className={styles.nav + " container"}>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/shop")}>Shop</button>
      </div>
      <h3>BOUTIQUE</h3>
      <div>
        <button onClick={() => navigate("/cart")}>
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>Cart</span>
        </button>
        <button onClick={() => navigate("/login")}>
          <span className="material-symbols-outlined">person</span>
          <span>Login</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
