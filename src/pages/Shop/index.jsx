import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import styles from "./styles.module.css"

function ShopPage() {
  return (
    <div>
      <div className={styles.banner}>
        <h2>Shop</h2>
        <h5>Shop</h5>
      </div>
      <div className={styles.products}>
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ShopPage
