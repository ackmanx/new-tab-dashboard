import { AddNewPlaceholder } from './components/AddNewPlaceholder/AddNewPlaceholder'
import useLocalStorage from 'use-local-storage'
import { CardData, Card as CardType } from './types'
import { Card } from './components/Card/Card.tsx'
import { darkTheme, lightTheme } from "../styles/themes.css.ts";
import { useEffect } from "react";

function App() {
  const [cardData, saveCardData] = useLocalStorage<CardData>('cardData', [])
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.body.classList.add(darkTheme)
    } else {
      document.body.classList.add(lightTheme)
    }
    return () => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.body.classList.remove(darkTheme)
      } else {
        document.body.classList.remove(lightTheme)
      }
    }
  }, [])

  function handleAddNewCard() {
    saveCardData([...cardData, { links: [] }])
  }

  function handleDeleteCard(cardIndex: number) {
    // @ts-expect-error toSpliced is available on Chromium browsers, which is fine being this is an extension for them
    saveCardData(cardData.toSpliced(cardIndex, 1))
  }

  function handleUpdateCard(cardIndex: number, card: CardType) {
    const newCardData = [...cardData]

    newCardData[cardIndex] = card

    saveCardData(newCardData)
  }

  return (
    <main>
      {cardData.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          cardIndex={index}
          onUpdateCard={handleUpdateCard}
          onDeleteCard={handleDeleteCard}
        />
      ))}

      <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
    </main>
  )
}

export default App
