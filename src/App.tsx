import { AddNewPlaceholder } from './components/AddNewPlaceholder/AddNewPlaceholder'
import styles from './App.css.ts'
import useLocalStorage from 'use-local-storage'
import { CardData } from './types'

function App() {
  const [cardData, saveCardData] = useLocalStorage<CardData>('cardData', { cards: [] })

  function handleAddNewCard() {
    saveCardData({ cards: [...cardData.cards, {}] })
  }

  return (
    <main>
      {cardData.cards.map((card) => (
        <section className={styles.section}>
          <article key={card.title}>
            <h2>{card.title}</h2>
            <ul>
              {card.links?.map((link) => (
                <li key={link.text}>
                  <a className={styles.link} href={link.url}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>
      ))}

      <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
    </main>
  )
}

export default App
