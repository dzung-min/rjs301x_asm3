import styles from "./styles.module.css"

function BillDetail() {
  return (
    <div className={styles.bill}>
      <form>
        <div>
          <label htmlFor="name">FULL NAME</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Full Name Here!"
          />
        </div>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" placeholder="Enter Your Email Here!" />
        </div>
        <div>
          <label htmlFor="phone">PHONE NUMBER</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter Your Phone Number Here!"
          />
        </div>
        <div>
          <label htmlFor="address">PHONE NUMBER</label>
          <input
            type="text"
            id="address"
            placeholder="Enter Your Phone Number Here!"
          />
        </div>
        <button type="button">Place Order</button>
      </form>
    </div>
  )
}

export default BillDetail
