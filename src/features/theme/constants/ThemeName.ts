export enum ThemeName {
  DARK = "Dark",
  LIGHT = "Light",
  WHITE = "White",
  BLACK = "Black",
}

export const toThemeName = (name: string | undefined): ThemeName | undefined => {
  if (!name) return undefined
  if (name.toLowerCase() === ThemeName.LIGHT.toLowerCase()) return ThemeName.LIGHT
  else if (name.toLowerCase() === ThemeName.DARK.toLowerCase()) return ThemeName.DARK
  else if (name.toLowerCase() === ThemeName.BLACK.toLowerCase()) return ThemeName.BLACK
  else if (name.toLowerCase() === ThemeName.WHITE.toLowerCase()) return ThemeName.WHITE
  else return undefined
}
