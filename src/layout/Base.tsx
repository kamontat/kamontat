import { Global } from "@emotion/react"
import React from "react"
import { css } from "twin.macro"
import { ThemeProvider } from "@emotion/react"
import { ThemeName, ThemeProperties } from "../features/theme"
import { useThemeContext } from "../features/theme/context"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BaseOptions<T = any> {
  children?: React.ReactNode
  pageContext?: T
}

interface GlobalStylesOptions extends BaseOptions {
  theme: ThemeProperties
}

const StyleImporter = ({ theme }: GlobalStylesOptions): JSX.Element => (
  <Global
    tw="flex m-0 p-0 transition-all duration-200 ease-in-out"
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

      body {
        background: ${theme.background};
        color: ${theme.text};
      }
    `}
  ></Global>
)

export default ({ children }: BaseOptions): JSX.Element => {
  const themeContext = useThemeContext(ThemeName.LIGHT)
  return (
    <React.Fragment>
      <ThemeProvider theme={themeContext}>
        <StyleImporter theme={themeContext.properties} />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
