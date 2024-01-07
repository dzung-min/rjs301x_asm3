import { useNavigate } from "react-router-dom"

import styles from "./styles.module.css"
import { useSelector, useDispatch } from "react-redux"
import userSlice from "../../store/user"

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.user)

  function logOutHandler() {
    dispatch(userSlice.actions.logout())
  }
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
        {currentUser ? (
          <>
            <button>
              <span className="material-symbols-outlined">person</span>
              <span>{currentUser.name}</span>
            </button>
            <button onClick={logOutHandler}>( Logout )</button>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>
            <span className="material-symbols-outlined">person</span>
            <span>Login</span>
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
