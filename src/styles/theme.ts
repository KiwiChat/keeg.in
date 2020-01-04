import { DefaultTheme } from 'styled-components'

export interface ThemeInterface extends DefaultTheme {
  palette: Palette
  global: {
    fontSize?: string
    background: string
    textColor: string
    links: string
    hoveredLinks: string
  }
}

interface Palette {
  lightShades: string
  lightAccent: string
  mainBrand: string
  darkAccent: string
  darkShades: string
}

const palette: Palette = {
  lightShades: `#ffffff`,
  lightAccent: `#eeeeee`,
  mainBrand: `palevioletred`,
  darkShades: `#000000`,
  darkAccent: `#333333`,
}

export const baseTheme = {
  palette,
  global: {
    fontSize: `16px`,
  },
  screen: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
  },
}

export const lightTheme: ThemeInterface = {
  ...baseTheme,
  global: {
    background: palette.lightShades,
    textColor: palette.darkShades,
    links: palette.darkShades,
    hoveredLinks: palette.darkAccent,
  },
}
console.log(lightTheme)

export const darkTheme: ThemeInterface = {
  ...baseTheme,
  global: {
    background: palette.darkShades,
    textColor: palette.lightShades,
    links: palette.lightShades,
    hoveredLinks: palette.lightAccent,
  },
}

export const Theme = (darkMode: any) =>
  darkMode ? { ...darkTheme } : { ...lightTheme }
