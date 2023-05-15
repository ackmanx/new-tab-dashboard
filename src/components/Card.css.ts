import { style } from '@vanilla-extract/css'

const section = style({
  backgroundColor: 'var(--dark__card-bg)',
  padding: '16px',
  borderRadius: '10px',
  marginBottom: '16px',

  '@media': {
    '(prefers-color-scheme: light)': {
      backgroundColor: 'var(--light__card-bg)',
    },
  },
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
    backgroundColor: 'var(--dark__main-bg)',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },

  '@media': {
    '(prefers-color-scheme: light)': {
      ':hover': {
        backgroundColor: 'var(--light__main-bg)',
      },
    },
  },
})

const header = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export default {
  section,
  editTitle,
  link,
  editItemRow,
  editItem,
  header,
}
