import { ChangeEvent, useEffect, useState } from 'react'
import { Card } from '../../types'
import { Button } from '../Button/Button'
import { TextField } from '../TextField/TextField'
import { styles } from './ChangeCardContentsDrawer.css'
interface Props {
  card: Card
  cardIndex: number
  onUpdateCard: (cardIndex: number, card: Card) => void
  onChangeSelectedCard: (cardIndex: number) => void
}

export const ChangeCardContentsDrawer = ({ card, cardIndex, onUpdateCard, onChangeSelectedCard }: Props) => {
  const [tempCardState, setTempCardState] = useState(card)

  useEffect(() => {
    setTempCardState(card)
  }, [card])

  function handleAddNewLink() {
    setTempCardState({
      ...tempCardState,
      links: [...tempCardState.links, { url: 'https://', label: '' }],
    })
  }

  function handleDeleteLink(linkIndex: number) {
    const newLinkArray = [...tempCardState.links.splice(0, linkIndex), ...tempCardState.links.splice(linkIndex + 1)]
    const newCard = {
      ...tempCardState,
      links: newLinkArray,
    }

    setTempCardState(newCard)
  }

  function handleTitleUpdate(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const newCard = {
      ...tempCardState,
      title: e.currentTarget.value,
      links: [...tempCardState.links],
    }
    setTempCardState(newCard)
  }

  function handleUpdateLinks(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, linkIndex: number) {
    const newLinkArray = [...tempCardState.links].map((link, index) =>
      index === linkIndex ? { ...tempCardState.links[index], [event.target.name]: [event.target.value] } : link
    )
    const newCard = {
      ...tempCardState,
      links: newLinkArray,
    }

    setTempCardState(newCard)
  }

  function handleSave() {
    onUpdateCard(cardIndex, tempCardState)
    onChangeSelectedCard(-1)
  }

  function handleCancel() {
    onChangeSelectedCard(-1)
  }

  return (
    <>
      <TextField
        defaultValue={tempCardState?.title}
        changeHandler={handleTitleUpdate}
        name='label'
        id='title'
        type='text'
        label='title'
      />
      <p>Changing the order, create new, delete, or edit the links </p>
      <ul>
        {tempCardState?.links.map((link, index) => (
          <li className={styles.listItem}>
            <Button className={styles.deleteButton} handleClick={() => handleDeleteLink(index)}>
              &times;
            </Button>
            <TextField
              defaultValue={link?.label}
              changeHandler={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                handleUpdateLinks(event, index)
              }
              name='label'
              id={`label${index}`}
              type='text'
              label='label'
            />
            <TextField
              defaultValue={link.url}
              changeHandler={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                handleUpdateLinks(event, index)
              }
              name='url'
              id={`url${index}`}
              type='text'
              label='url'
            />
          </li>
        ))}
      </ul>
      <div>
        <Button handleClick={handleAddNewLink}>new</Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button handleClick={handleSave}>save</Button>
        <Button handleClick={handleCancel}>cancel</Button>
      </div>
    </>
  )
}
