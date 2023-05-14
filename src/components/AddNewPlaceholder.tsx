import AddIcon from './add-icon.png'
import styles from './AddNewPlaceholder.css'

export const AddNewPlaceholder = () => {
  return (
    <section className={styles.section}>
      <img className={styles.icon} src={AddIcon} alt='add card icon' />
    </section>
  )
}
