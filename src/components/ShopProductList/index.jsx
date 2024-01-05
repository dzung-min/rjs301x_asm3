import { useSearchParams } from "react-router-dom"

function ShopProductList() {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("category"))
  return <div>Shop Product List</div>
}

export default ShopProductList
