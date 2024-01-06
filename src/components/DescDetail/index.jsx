import styles from "./styles.module.css"

function DescDetail({ product }) {
  const descriptions = product.long_desc.split("\n")
  console.log(descriptions)

  return (
    <div className={styles.description}>
      <button>Description</button>
      <p className={styles.title}>PRODUCT DESCRIPTION</p>
      <p className={styles["sub-title"]}>{descriptions[0]}</p>
      <ul>
        {descriptions.slice(1).map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
    </div>
  )
}

export default DescDetail
