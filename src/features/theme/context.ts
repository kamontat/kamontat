import { Dispatch, useEffect, useState } from "react"

import { getLocalData, setLocalData } from "../../helpers/local-storage"
import { ThemeObject } from "./models/ThemeObject"
import { ThemeContextObject } from "./models/ThemeContextObject"
import { ThemeName, toThemeName } from "./constants/ThemeName"
import { getThemeProperties } from "./constants/ThemeProperties"
import { ThemeProperties } from "./models/ThemeProperties"

export const themeKey = "theme.name"

export const useThemeContext = (name: ThemeName): ThemeContextObject => {
  const properties = getThemeProperties(name)

  const [themeName, setThemeName] = useState<ThemeName>(name)
  const [themeProperties, setThemeProperties] = useState<ThemeProperties>(properties)
  const [componentMounted, setComponentMounted] = useState(false)

  const customSetThemeObject: Dispatch<Partial<ThemeObject>> = (themeObject: Partial<ThemeObject>) => {
    if (themeObject.name) {
      setLocalData(themeKey, themeObject.name)
      const properties = themeObject.properties ?? getThemeProperties(themeObject.name)

      setThemeName(themeObject.name)
      setThemeProperties(properties)
    }
  }

  useEffect(() => {
    const localName = getLocalData(themeKey)
    if (localName && !componentMounted) {
      const name = toThemeName(localName)
      customSetThemeObject({ name })
    }

    setComponentMounted(true)
  }, [])

  return {
    name: themeName,
    properties: themeProperties,
    componentMounted,
    newTheme: customSetThemeObject,
  }
}
