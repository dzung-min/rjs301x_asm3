import { useSelector } from "react-redux"
import { createPortal } from "react-dom"

import Banner from "../../components/Banner"
import Categories from "../../components/Categories"
import MoreInfo from "../../components/MoreInfo"
import TrendingProductList from "../../components/TrendingProductList"
import PopUp from "../../components/PopUp"

const modal = document.getElementById("modal")

function HomePage() {
  const popUpProduct = useSelector((state) => state.popup.popUpProduct)
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProductList />
      <MoreInfo />
      {popUpProduct && createPortal(<PopUp product={popUpProduct} />, modal)}
    </>
  )
}

export default HomePage
