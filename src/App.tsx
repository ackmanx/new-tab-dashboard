import { AddNewPlaceholder } from './components/AddNewPlaceholder/AddNewPlaceholder'
import useLocalStorage from 'use-local-storage'
import { CardData } from './types'
import { Card } from './components/Card'

function App() {
  const [cardData, saveCardData] = useLocalStorage<CardData>('cardData', { cards: [] })

  function handleAddNewCard() {
    saveCardData({ cards: [...cardData.cards, {}] })
  }

  function handleDeleteCard(cardIndex: number) {
    // @ts-expect-error toSpliced is available on Chromium browsers, which is fine being this is an extension for them
    saveCardData({ cards: cardData.cards.toSpliced(cardIndex, 1) })
  }

  return (
    <main>
      {cardData.cards.map((card, index) => (
        <Card key={card.title} card={card} cardIndex={index} onDeleteCard={handleDeleteCard} />
      ))}

      <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
    </main>
  )
}

export default App
