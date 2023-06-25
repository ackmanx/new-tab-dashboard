import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../../../styles/themes.css'

const drawerBase = style({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: 420,
  position: 'fixed',
  top: 0,
  transition: 'right .3s ease-in',
  height: '100vh',
  backgroundColor: vars.colors.cardBg,
  zIndex: 1,
  padding: '1.6rem',
})
export const drawer = styleVariants({
  open: [
    drawerBase,
    {
      right: 0,
    },
  ],
  default: [
    drawerBase,
    {
      right: -436,
    },
  ],
})

export const overlay = style({
  position: 'fixed',
  inset: '0 0 0 0',
  backgroundColor: 'rgba(0, 0, 0, .5)',
})

export const styles = {
  overlay,
  drawer,
}
