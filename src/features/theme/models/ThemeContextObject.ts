import { Dispatch } from "react"
import { ThemeObject } from "./ThemeObject"

export interface ThemeContextObject extends ThemeObject {
  componentMounted: boolean
  newTheme: Dispatch<Partial<ThemeObject>>
}
