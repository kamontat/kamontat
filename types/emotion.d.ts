import "@emotion/react"
import { ThemeContextObject } from "../src/features/theme"

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeContextObject {}
}
