import { ThemeName } from "../constants/ThemeName"
import { ThemeProperties } from "./ThemeProperties"

export interface ThemeObject {
  name: ThemeName
  properties: ThemeProperties
}
