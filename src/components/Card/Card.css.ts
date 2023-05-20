import { style } from '@vanilla-extract/css'
import { vars } from "../../../styles/themes.css.ts";

const section = style({
  backgroundColor: vars.colors.cardBg,
  padding: '16px',
  borderRadius: '10px',
  marginBottom: '16px',
})

const editTitle = style({
  fontSize: '1.5em',
  padding: '8px',
  border: 'none',
  borderRadius: '5px',
})

const editItemRow = style({
  display: 'flex',
  gap: '8px',
  padding: '8px',
})

const editItem = style({
  flexGrow: 1,
  padding: '8px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
})

const link = style({
  width: '100%',
  padding: '8px',
  display: 'inline-block',
  fontSize: '16px',

  ':hover': {
    backgroundColor: vars.colors.mainBg,
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },

  '@media': {
    '(prefers-color-scheme: light)': {
      ':hover': {
        backgroundColor: vars.colors.mainBg,
      },
    },
  },
})

const header = style({
  display: 'flex',
  justifyContent: 'space-between',
})

const addNewLinkRow = style({
  padding: '8px',
  margin: '8px',
  textAlign: 'center',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: vars.colors.cardBg,

  ':hover': { outline: `1px solid ${vars.colors.text}`, boxSizing: 'border-box' },
})

const addNewLinkIcon = style({
  width: '25px',
  filter: 'contrast(0)',
})

const buttonContainer = style({
  display: "flex",
  gap: 8
})

export default {
  section,
  editTitle,
  link,
  editItemRow,
  editItem,
  header,
  addNewLinkRow,
  addNewLinkIcon,
  buttonContainer
}
