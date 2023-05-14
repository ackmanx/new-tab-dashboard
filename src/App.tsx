import { AddNewPlaceholder } from './components/AddNewPlaceholder'
import styles from './App.css.ts'

function App() {
  return (
    <main>
      <section className={styles.section}>
        <h2>Pull Requests</h2>
        <ul>
          <li>
            <a className={styles.link} href=''>
              All of Mine
            </a>
          </li>
          <li>
            <a className={styles.link} href=''>
              Frontend (UI, Prefix, ABP)
            </a>
          </li>
          <li>
            <a className={styles.link} href=''>
              Slingshot UI
            </a>
          </li>
        </ul>
      </section>

      <AddNewPlaceholder />
    </main>
  )
}

export default App
