import styles from './Card.css.ts'
import { Card as CardType } from '../../types.ts'
import { ChangeEvent, useState } from 'react'
import AddIcon from '../AddNewPlaceholder/add-icon.png'
import { Button } from "../Button/Button.tsx";

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

  function handleAddNewLink() {
    setCurrentCard((prevState) => ({
      ...prevState,
      links: [...prevState.links, {}],
    }))
  }

  return (
    <section className={styles.section}>
      {isEditView ? (
        <>
          <div className={styles.header}>
            <input
              className={styles.editTitle}
              placeholder='title'
              value={currentCard.title}
              onChange={handleUpdateTitle}
            />
            <div className={styles.buttonContainer}>
              <Button handleClick={handleDeleteCard}>Delete</Button>
              <Button variant='primary' handleClick={handleEditViewToggle}>
                Save
              </Button>
            </div>
          </div>
          <ul>
            {currentCard.links?.map((link, index) => (
              <li key={index} className={styles.editItemRow}>
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
            <li className={styles.addNewLinkRow} onClick={handleAddNewLink}>
              <img className={styles.addNewLinkIcon} src={AddIcon} alt='add card icon' />
            </li>
          </ul>
        </>
      ) : (
        <>
          <div className={styles.header}>
            <h2>{currentCard.title}</h2>
            <Button handleClick={handleEditViewToggle}>Edit</Button>
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