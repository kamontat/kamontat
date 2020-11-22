import { DefaultPluginOption } from "./base"

export type Headers = Array<string>

export interface HeadersOption {
  [key: string]: Headers
}

export type HeadersTransformFn = (headers: Headers, path: string) => Headers

export interface NetlifyOptions extends DefaultPluginOption {
  headers?: HeadersOption
  /**
   * option to add headers for all pages. `Link` headers are transformed by the below criteria
   */
  allPageHeaders?: Headers
  /**
   * boolean to turn off the default security headers
   */
  mergeSecurityHeaders?: boolean
  /**
   * boolean to turn off the default gatsby js headers
   */
  mergeLinkHeaders?: boolean
  /**
   * boolean to turn off the default caching headers
   */
  mergeCachingHeaders?: boolean
  /**
   * optional transform for manipulating headers under each path (e.g.sorting), etc.
   */
  transformHeaders?: HeadersTransformFn
  /**
   * boolean to turn off automatic creation of redirect rules for client only paths
   */
  generateMatchPathRewrites?: boolean
}
