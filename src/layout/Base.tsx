import React from "react"
import { css } from "twin.macro"
import { Global, ThemeProvider } from "@emotion/react"

import { ThemeName, ThemeProperties } from "../features/theme"
import { useThemeContext } from "../features/theme/context"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BaseOptions<T = any> {
  key?: string
  children?: React.ReactNode
  pageContext?: T
}

interface GlobalStylesOptions extends BaseOptions {
  theme: ThemeProperties
}

const StyleImporter = ({ theme }: GlobalStylesOptions): JSX.Element => (
  <Global
    // TODO: Import correct font that we will use
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

      body {
        background: ${theme.background};
        color: ${theme.text};
        display: flex;
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
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
