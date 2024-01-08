import { Outlet } from "react-router-dom"

import Sidebar from "../../components/Sidebar"
import styles from "./styles.module.css"
import PageTitle from "../../components/PageTitle"

function ShopPage() {
  return (
    <div>
      <PageTitle title="shop" />
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
