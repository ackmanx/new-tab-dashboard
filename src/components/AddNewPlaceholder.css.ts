import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: 'rgba(255, 255, 255, 0.09)',
  padding: '16px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',

  ':hover': { border: '1px solid #ffffffde', boxSizing: 'border-box' },
})

export const icon = style({ width: '50px' })
