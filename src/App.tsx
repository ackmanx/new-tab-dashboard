import { AddNewPlaceholder } from './components/AddNewPlaceholder/AddNewPlaceholder'
import useLocalStorage from 'use-local-storage'
import { CardData, Card as CardType } from './types'
import { Card } from './components/Card/Card.tsx'
import { darkTheme, lightTheme } from "../styles/themes.css.ts";
import { useEffect } from "react";

function App() {
  const [cardData, saveCardData] = useLocalStorage<CardData>('cardData', [])

  function changeThemeLogic(isDarkTheme: boolean) {
    const bodyClassList = document.body.classList
    if(isDarkTheme){
      bodyClassList.add(darkTheme)
      if(bodyClassList.contains(lightTheme)){
        bodyClassList.remove(lightTheme)
      }
    } else {
      bodyClassList.add(lightTheme)
      if(bodyClassList.contains(darkTheme)){
        bodyClassList.remove(darkTheme)
      }
    }
  }

  useEffect(() => {
    function changeTheme(e: MediaQueryListEvent) {
      changeThemeLogic(e.matches)
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addEventListener('change', changeTheme)
    changeThemeLogic(mql.matches)

    return () => {
      mql.removeEventListener('change', changeTheme)
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
