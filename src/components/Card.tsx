import styles from './Card.css'
import { Card as CardType } from '../types'

interface Props {
  card: CardType
}

export const Card = ({ card }: Props) => {
  return (
    <section key={card.title} className={styles.section}>
      <div className={styles.header}>
        <h2>{card.title}</h2>
        <button>Edit</button>
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
    </section>
  )
}
