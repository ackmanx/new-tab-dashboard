import { AddNewPlaceholder } from './components/AddNewPlaceholder/AddNewPlaceholder'
import useLocalStorage from 'use-local-storage'
import { CardData } from './types'
import { Card } from './components/Card'

function App() {
  const [cardData, saveCardData] = useLocalStorage<CardData>('cardData', { cards: [] })

  function handleAddNewCard() {
    saveCardData({ cards: [...cardData.cards, {}] })
  }

  return (
    <main>
      {cardData.cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}

      <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
    </main>
  )
}

export default App
