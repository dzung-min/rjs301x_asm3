import styles from "./styles.module.css"

function PageTitle({ title }) {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      <h5>{title}</h5>
    </div>
  )
}

export default PageTitle
