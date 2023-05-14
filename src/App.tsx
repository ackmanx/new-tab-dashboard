import { AddNewPlaceholder } from './components/AddNewPlaceholder'
import { section, link } from './App.css.ts'

function App() {
  return (
    <main>
      <section className={section}>
        <h2>Pull Requests</h2>
        <ul>
          <li>
            <a className={link} href=''>
              All of Mine
            </a>
          </li>
          <li>
            <a className={link} href=''>
              Frontend (UI, Prefix, ABP)
            </a>
          </li>
          <li>
            <a className={link} href=''>
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
