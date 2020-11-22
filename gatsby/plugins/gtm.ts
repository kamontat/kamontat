import { DefaultPluginOption } from "./base"

type ValueOrFunction<V> = V | (() => V)
export interface GTMOptions extends DefaultPluginOption {
  id: string

  /**
   * Include GTM in development.
   *
   * Defaults to false meaning GTM will only be loaded in production.
   */
  includeInDevelopment?: boolean

  /**
   * datalayer to be set before GTM is loaded
   * should be an object or a function that is executed in the browser
   *
   * Defaults to null
   */
  defaultDataLayer?: ValueOrFunction<Record<string, string>>

  // Specify optional GTM environment details.
  gtmAuth?: string
  gtmPreview?: string
  dataLayerName?: string

  /**
   * Name of the event that is triggered on every Gatsby route change.
   *
   * Defaults to gatsby-route-change
   */
  routeChangeEventName?: string
}
