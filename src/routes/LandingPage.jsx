import styles from './layout.module.css'

function LandingPage() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Calculator</h1>
        <p>An electronic calculator is typically a portable electronic device used to perform calculations, ranging from basic arithmetic to complex mathematics.</p>
        <img src="https://img.freepik.com/free-vector/illustration-calculator-machine_53876-5566.jpg?w=1380&t=st=1674567387~exp=1674567987~hmac=5b8f5eb891a8cde0921e2f2b8ba6f79a8e5807c052909b491a49a1825714d903" alt="Logo" />
      </main>
    </div>
  )
}

export default LandingPage