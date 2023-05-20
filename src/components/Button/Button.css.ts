import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css.ts";

const buttonBase = style({
  borderRadius: 8,
  border: '1px solid transparent',
  padding: '0.6em 1.2em',
  fontSize: '1em',
  fontWeight: 500,
  fontFamily: 'inherit',
  cursor: 'pointer',
  transition: 'border-color 0.25s'
})

export const button = styleVariants(
{
  primary: vars.colors.accent,
  default: vars.colors.buttonBg
},
  (primaryColor) => [buttonBase,
    {
      backgroundColor: primaryColor,
      '& :hover': {
        borderColor: primaryColor
      },
      '& :focus, &: focus-visible': {
        outline: '4px auto -webkit-focus-ring-color'
      }
}]
)
