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
  link,
  header,
}
