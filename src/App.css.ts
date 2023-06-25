import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'auto 1fr auto',
  gap: '1rem',
  alignItems: 'flex-start',
  gridAutoRows: 'min-content'
})
