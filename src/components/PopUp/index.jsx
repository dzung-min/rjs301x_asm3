import { useDispatch } from "react-redux"

import styles from "./styles.module.css"
import popUpSlice from "../../store/popup"
import { useNavigate } from "react-router-dom"

function PopUp({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function closePopUpHandler() {
    dispatch(popUpSlice.actions.hidePopUp())
  }

  return (
    <div className={styles.modal}>
      <div className={styles.popup}>
        <div className={styles.img}>
          <img src={product.img1} alt={product.name} />
        </div>
        <div className={styles.detail}>
          <h3>{product.name}</h3>
          <p>{Number(product.price).toLocaleString("de-DE")} VND</p>
          <p>{product.short_desc}</p>
          <button
            onClick={() => {
              navigate(`/detail/${product._id.$oid}`)
              window.scrollTo(0, 0)
              closePopUpHandler()
            }}
          >
            <span className="material-symbols-outlined">info</span>
            <span>View Detail</span>
          </button>
        </div>
        <button onClick={closePopUpHandler} className={styles.close}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  )
}

export default PopUp
