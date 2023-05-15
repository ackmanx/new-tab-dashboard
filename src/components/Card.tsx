import styles from './Card.css'
import { Card as CardType } from '../types'
import { useState } from 'react'

interface Props {
  card: CardType
  cardIndex: number
  onDeleteCard: (cardIndex: number) => void
}

export const Card = ({ card, cardIndex, onDeleteCard }: Props) => {
  const [isEditView, setIsEditView] = useState(false)

  function handleEditViewToggle() {
    setIsEditView(!isEditView)
  }

  return (
    <section key={card.title} className={styles.section}>
      {isEditView ? (
        <>
          <div className={styles.header}>
            <h2>{card.title}</h2>
            <div>
              <button onClick={() => onDeleteCard(cardIndex)}>Delete</button>
              <button style={{ marginLeft: '8px' }} onClick={handleEditViewToggle}>
                Done
              </button>
            </div>
          </div>
          <ul>
            {card.links?.map((link) => (
              <li key={link.text}>
                <a className={styles.link} href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className={styles.header}>
            <h2>{card.title}</h2>
            <button onClick={handleEditViewToggle}>Edit</button>
          </div>
          <ul>
            {card.links?.map((link) => (
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
