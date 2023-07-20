import styles from "./App.module.css"
import Header from "./components/Header/Header"
import Plan from "./components/Plan/Plan"

function App() {

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.plans}>
        <h2 className={styles.sr_only}>Plans</h2>
        <Plan />
        <Plan />
        <Plan />
      </section>
    </main>
  )
}

export default App
