import styles from "./styles.module.css"

function ChatButton({ clickHandler }) {
  return (
    <button onClick={clickHandler} className={styles.button}>
      <span className="material-symbols-outlined">chat</span>
    </button>
  )
}

export default ChatButton
