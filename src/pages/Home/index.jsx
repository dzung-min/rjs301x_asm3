import Banner from "../../components/Banner"
import Categories from "../../components/Categories"
import MoreInfo from "../../components/MoreInfo"
import TrendingProductList from "../../components/TrendingProductList"

function HomePage() {
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProductList />
      <MoreInfo />
    </>
  )
}

export default HomePage
