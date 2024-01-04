import styles from "./styles.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content + " container"}>
        <section>
          <h4>customer services</h4>
          <div>
            <p>help & contact us</p>
            <p>returns & refunds</p>
            <p>online stores</p>
            <p>terms & conditions</p>
          </div>
        </section>
        <section>
          <h4>company</h4>
          <div>
            <p>what we do</p>
            <p>available services</p>
            <p>latest posts</p>
            <p>FAQs</p>
          </div>
        </section>
        <section>
          <h4>social media</h4>
          <div>
            <p>twitter</p>
            <p>instagram</p>
            <p>facebook</p>
            <p>pinterest</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer
