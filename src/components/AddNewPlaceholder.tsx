import AddIcon from './add-icon.png'
import { section, icon } from './AddNewPlaceholder.css'

export const AddNewPlaceholder = () => {
  return (
    <section className={section}>
      <img className={icon} src={AddIcon} alt='add card icon' />
    </section>
  )
}
