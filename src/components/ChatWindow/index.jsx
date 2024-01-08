import styles from "./styles.module.css"

function ChatWindow({ isShow }) {
  const classes = isShow
    ? styles["chat-container"]
    : `${styles["chat-container"]} ${styles.hidden}`
  return (
    <div className={classes}>
      <div className={styles.header}>
        <p>Customer Support</p>
        <button>Let's Chat App</button>
      </div>
      <div className={styles.main}>
        <div className={styles.guess}>
          <div className={styles.icon}>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <p>Xin chào</p>
        </div>
        <div className={styles.guess}>
          <div className={styles.icon}>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <p>Làm thế nào để xem các sản phẩm</p>
        </div>
        <div className={styles.admin}>
          <div className={styles.icon}>
            <span className="material-symbols-outlined">
              supervised_user_circle
            </span>
          </div>
          <p>ADMIN: Chào bạn</p>
        </div>
        <div className={styles.admin}>
          <div className={styles.icon}>
            <span className="material-symbols-outlined">
              supervised_user_circle
            </span>
          </div>
          <p>ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.icon}>
          <span className="material-symbols-outlined">
            supervised_user_circle
          </span>
        </div>
        <input type="text" placeholder="Enter Message!" />
        <button>
          <span className="material-symbols-outlined">attach_file</span>
        </button>
        <button>
          <span className="material-symbols-outlined">mood</span>
        </button>
        <button>
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  )
}

export default ChatWindow
