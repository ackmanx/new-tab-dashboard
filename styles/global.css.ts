import { globalStyle } from '@vanilla-extract/css'
import { vars } from './themes.css'

globalStyle('body', {
  fontSize: '1.6rem',
  margin: 16,
  backgroundColor: vars.colors.mainBg,
  color: vars.colors.text,
})

globalStyle('html', {
  fontSize: '62.5%',
})

globalStyle('body *', {
  boxSizing: 'border-box',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
})

globalStyle('a', {
  fontWeight: 500,
  color: vars.colors.text,
  textDecoration: 'none',
})

globalStyle('a:hover', {
  color: vars.colors.accent,
})

globalStyle('ul', {
  padding: 0,
  listStyle: 'none',
})
