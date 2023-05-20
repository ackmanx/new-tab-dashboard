import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  colors: {
    mainBg: 'main-bg',
    text: 'text',
    cardBg: 'card-bg',
    buttonBg: 'button-bg',
    accent: 'accent'
  }
})

export const darkTheme = createTheme( vars, {
  colors: {
    mainBg: '#242424',
    text: 'rgba(255, 255, 255, 0.87)',
    cardBg: '#383838',
    buttonBg: '#1a1a1a',
    accent: '#3c5eb3'
  }
})

export const lightTheme = createTheme( vars, {
  colors: {
    mainBg: '#fcfcfc',
    text: '#213547',
    cardBg: '#f1f1f1',
    buttonBg: '#e4e4e4',
    accent: '#3c5eb3'
  }
})
