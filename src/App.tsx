import './App.css'
import { AddNewPlaceholder } from './components/AddNewPlaceholder'

function App() {
  return (
    <main>
      <section>
        <h2>Pull Requests</h2>
        <ul>
          <li>
            <a href=''>All of Mine</a>
          </li>
          <li>
            <a href=''>Frontend (UI, Prefix, ABP)</a>
          </li>
          <li>
            <a href=''>Slingshot UI</a>
          </li>
        </ul>
      </section>

      <AddNewPlaceholder />
    </main>
  )
}

export default App
