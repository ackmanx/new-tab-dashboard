import { AddNewPlaceholder } from './components/AddNewPlaceholder/AddNewPlaceholder'
import useLocalStorage from 'use-local-storage'
import { CardData, Card as CardType } from './types'
import { Card } from './components/Card/Card.tsx'
import { darkTheme, lightTheme } from '../styles/themes.css.ts'
import { useEffect, useState } from 'react'
import { mainContainer } from './App.css.ts'
import { Drawer } from './components/Drawer/Drawer.tsx'
import { ChangeCardContentsDrawer } from './components/ChangeCardContentsDrawer/ChangeCardContentsDrawer.tsx'

function App() {
  const [cardData, saveCardData] = useLocalStorage<CardData>('cardData', [])
  const [cards, setCards] = useState<CardData>(cardData)
  const [selectedCard, setSelectedCard] = useState(-1)
  // beginning stages of separating drawer state from selectedCard
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function changeThemeLogic(isDarkTheme: boolean) {
    const bodyClassList = document.body.classList

    if (isDarkTheme) {
      bodyClassList.add(darkTheme)

      if (bodyClassList.contains(lightTheme)) {
        bodyClassList.remove(lightTheme)
      }
    } else {
      bodyClassList.add(lightTheme)

      if (bodyClassList.contains(darkTheme)) {
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
    setCards([...cardData, { links: [] }])
    saveCardData([...cardData, { links: [] }])
  }

  function handleSelectCard(cardIndex: number) {
    setSelectedCard(cardIndex)
    setIsDrawerOpen(cardIndex !== -1)
  }

  function handleUpdateCard(cardIndex: number, card: CardType) {
    const newCardData = [...cardData]
    newCardData[cardIndex] = card

    saveCardData(newCardData)
    setCards(newCardData)
  }

  return (
    <main className={mainContainer}>
      <Drawer variant={isDrawerOpen ? 'open' : 'default'}>
        <ChangeCardContentsDrawer
          cardIndex={selectedCard}
          card={cards[selectedCard]}
          onUpdateCard={handleUpdateCard}
          onChangeSelectedCard={handleSelectCard}
        />
      </Drawer>

      {cards.map((card, index) => (
        <Card key={`${card.title}${index}`} card={card} cardIndex={index} onChangeSelectedCard={handleSelectCard} />
      ))}

      <AddNewPlaceholder onClickNewPlaceholder={handleAddNewCard} />
    </main>
  )
}

export default App
