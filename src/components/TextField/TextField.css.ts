import { style } from '@vanilla-extract/css'
import { vars } from '../../../styles/themes.css'
export const field = style({
  height: '4rem',
  border: `0.2rem solid ${vars.colors.text}`,
  padding: '0 1.2rem',
  width: '100%',
  fontFamily: 'inherit',
  outlineOffset: '0.4rem',
})

export const textArea = style({
  width: '100%',
  padding: '1.2rem',
  border: `0.2rem solid ${vars.colors.accent}`,
  fontFamily: 'inherit',
  outlineOffset: '0.4rem',
  resize: 'none',
})

export const labelCls = style({
  marginBottom: '.4rem',
  display: 'block',
})
export const container = style({
  margin: '1rem 0 2rem',
})

export const errorContainer = style({
  color: vars.colors.accent,
  display: 'flex',
  alignItems: 'center',
})

export const errorImg = style({
  marginRight: '.5rem',
})
