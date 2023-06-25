import { style } from '@vanilla-extract/css'
import { vars } from '../../../styles/themes.css.ts'

const buttonContainer = style({
  display: 'flex',
  gap: '1.6rem',
  marginTop: 'auto',
})

const listItem = style({
  display: 'flex',
  gap: '1.6rem',
  alignItems: 'center',
})

const deleteButton = style({
  backgroundColor: 'transparent',
  color: vars.colors.text,
  fontSize: '2.4rem',
  height: '4rem',
  padding: '0 .5rem',
})

export const styles = {
  buttonContainer,
  listItem,
  deleteButton,
}
