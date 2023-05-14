import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: 'rgba(255, 255, 255, 0.09)',
  padding: '16px',
  borderRadius: '10px',
  marginBottom: '16px',
})

export const link = style({
  width: '100%',
  padding: '8px',
  display: 'inline-block',
  fontSize: '16px',

  ':hover': {
    backgroundColor: '#242424',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
})
