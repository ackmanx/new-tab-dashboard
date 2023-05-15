import AddIcon from './add-icon.png'
import styles from './AddNewPlaceholder.css'

interface Props {
  onClickNewPlaceholder: () => void
}

export const AddNewPlaceholder = ({ onClickNewPlaceholder }: Props) => {
  return (
    <section className={styles.section} onClick={onClickNewPlaceholder}>
      <img className={styles.icon} src={AddIcon} alt='add card icon' />
    </section>
  )
}
