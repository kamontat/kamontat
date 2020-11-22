import { DefaultPluginOption } from "./base"

export type Hostname = "cdn.contentful.com" | "preview.contentful.com"
export type Locale = {
  code: string
}

export type RichTextOption = {
  resolveFieldLocales?: boolean
}

export type LocaleFilterFn = (locale: Locale) => boolean

// https://www.gatsbyjs.org/packages/gatsby-source-contentful
export interface ContentfulOptions extends DefaultPluginOption {
  spaceId: string
  accessToken: string
  host?: Hostname
  environment?: string
  downloadLocal?: boolean
  localeFilter?: LocaleFilterFn
  forceFullSync?: boolean
  useNameForId?: boolean
  pageLimit?: number
  richText?: RichTextOption
}
