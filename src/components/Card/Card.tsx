import styles from './Card.css.ts'
import { Card as CardType } from '../../types.ts'
import { Button } from '../Button/Button.tsx'

interface Props {
  card: CardType
  cardIndex: number
  onChangeSelectedCard: (cardIndex: number) => void
}

export const Card = ({ card, cardIndex, onChangeSelectedCard }: Props) => {

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{card.title}</h2>
        <Button
          handleClick={() => {
            onChangeSelectedCard(cardIndex)
          }}
        >
          Edit
        </Button>
      </div>
      <ul>
        {card.links?.map(({ label, url }, index) => (
          <li key={`${label}${index}`}>
            <a className={styles.link} href={url}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
