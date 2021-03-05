import { ThemeProperties } from "../models/ThemeProperties"
import { ThemeName } from "./ThemeName"

import { baseTheme } from "./properties/base"
import { lightTheme } from "./properties/light"
import { darkTheme } from "./properties/dark"
import { blackTheme } from "./properties/black"
import { whiteTheme } from "./properties/white"

// TODO: Remove white theme because it too similar with light theme
const mapper = {
  [ThemeName.LIGHT]: Object.assign({}, baseTheme, lightTheme),
  [ThemeName.DARK]: Object.assign({}, baseTheme, darkTheme),
  [ThemeName.BLACK]: Object.assign({}, baseTheme, blackTheme),
  [ThemeName.WHITE]: Object.assign({}, baseTheme, whiteTheme),
}

export const getThemeProperties = (name: ThemeName): ThemeProperties => {
  return mapper[name]
}
