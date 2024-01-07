import styles from "./styles.module.css"

function DescDetail({ product }) {
  const descriptions = product.long_desc.split("\n")

  return (
    <div className={styles.description}>
      <button>Description</button>
      <p className={styles.title}>PRODUCT DESCRIPTION</p>
      <p className={styles["sub-title"]}>{descriptions[0]}</p>
      <ul>
        {descriptions.slice(1).map((desc, i) => (
          // if we use "key={desc}" then there will be error in the console which says that there are
          // duplicate key (don't want to look at the data, so "desc + i" shut the console up)
          <li key={desc + i}>{desc}</li>
        ))}
      </ul>
    </div>
  )
}

export default DescDetail
