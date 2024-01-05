import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import styles from "./styles.module.css"

function ShopPage() {
  return (
    <div>
      <div>Shop</div>
      <div className={styles.products}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default ShopPage
