import styles from './Card.css'
import { Card as CardType } from '../types'
import { ChangeEvent, useState } from 'react'

interface Props {
  card: CardType
  cardIndex: number
  onDeleteCard: (cardIndex: number) => void
  onUpdateCard: (cardIndex: number, card: CardType) => void
}

export const Card = ({ card, cardIndex, onDeleteCard, onUpdateCard }: Props) => {
  const [isEditView, setIsEditView] = useState(false)
  const [currentCard, setCurrentCard] = useState(card)

  function handleEditViewToggle() {
    if (isEditView) {
      onUpdateCard(cardIndex, currentCard)
    }

    setIsEditView(!isEditView)
  }

  function handleDeleteCard() {
    if (window.confirm('Are you sure you want to delete this card?')) {
      onDeleteCard(cardIndex)
    }
  }

  function handleUpdateTitle(event: ChangeEvent<HTMLInputElement>) {
    setCurrentCard((prevState) => ({
      ...prevState,
      title: event.target.value,
    }))
  }

  function handleUpdateLinks(event: ChangeEvent<HTMLInputElement>, property: string, index: number) {
    setCurrentCard((prevState) => {
      const newCard = {
        ...prevState,
        links: [...prevState.links],
      }

      newCard.links[index] = {
        text: property === 'text' ? event.target.value : newCard.links[index].text,
        url: property === 'url' ? event.target.value : newCard.links[index].url,
      }

      return newCard
    })
  }

  return (
    <section key={currentCard.title} className={styles.section}>
      {isEditView ? (
        <>
          <div className={styles.header}>
            <input
              className={styles.editTitle}
              placeholder='title'
              value={currentCard.title}
              onChange={handleUpdateTitle}
            />
            <div>
              <button onClick={handleDeleteCard}>Delete</button>
              <button className='primary' style={{ marginLeft: '8px' }} onClick={handleEditViewToggle}>
                Save
              </button>
            </div>
          </div>
          <ul>
            {currentCard.links?.map((link, index) => (
              <li key={link.text} className={styles.editItemRow}>
                <input
                  className={styles.editItem}
                  placeholder='text'
                  value={link.text}
                  onChange={(event) => handleUpdateLinks(event, 'text', index)}
                />
                <input
                  className={styles.editItem}
                  placeholder='url'
                  value={link.url}
                  onChange={(event) => handleUpdateLinks(event, 'url', index)}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className={styles.header}>
            <h2>{currentCard.title}</h2>
            <button onClick={handleEditViewToggle}>Edit</button>
          </div>
          <ul>
            {currentCard.links?.map((link) => (
              <li key={link.text}>
                <a className={styles.link} href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
