import styles from "./styles.module.css"

function MoreInfo() {
  return (
    <div>
      <div className={styles.services}>
        <div>
          <h4>FREE SHIPPING</h4>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h4>24 X 7 SERVICE</h4>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h4>FESTIVAL OFFER</h4>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={styles.subcribe}>
        <div>
          <h4>LET'S BE FRIENDS!</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form>
          <input type="text" placeholder="Enter your email address" />
          <button type="button">Subcribe</button>
        </form>
      </div>
    </div>
  )
}

export default MoreInfo
