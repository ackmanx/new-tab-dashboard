import { style } from '@vanilla-extract/css'

const section = style({
  backgroundColor: 'var(--dark__card-bg)',
  padding: '16px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',

  ':hover': { outline: '1px solid var(--dark__text)', boxSizing: 'border-box' },

  '@media': {
    '(prefers-color-scheme: light)': {
      backgroundColor: 'var(--light__card-bg)',

      ':hover': { outline: '1px solid var(--light__text)', boxSizing: 'border-box' },
    },
  },
})

const icon = style({ width: '50px', filter: 'contrast(0)' })

export default {
  section,
  icon,
}
