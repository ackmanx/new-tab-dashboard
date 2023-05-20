import { style } from '@vanilla-extract/css'
import { vars } from "../../../styles/themes.css.ts";

const section = style({
  backgroundColor: vars.colors.cardBg,
  padding: '16px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  ':hover': { outline: `1px solid ${vars.colors.text}`, boxSizing: 'border-box' },
})

const icon = style({ width: '50px', filter: 'contrast(0)' })

export default {
  section,
  icon,
}
