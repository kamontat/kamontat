import { DefaultPluginOption } from "./base"

export interface IntlOptions extends DefaultPluginOption {
  /**
   * language JSON resource path
   */
  path: string
  /**
   * supported language
   */
  languages: string[]
  /**
   * language file path
   */
  defaultLanguage: string
  /**
   * option to redirect to `/ko` when connecting `/`
   */
  redirect: boolean

  redirectComponent: string
}
