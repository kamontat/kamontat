import { DefaultPluginOption } from "./base"

interface MarkdownRemarkQuery {
  postPage: string
  query: string
}

export interface I18NOptions extends DefaultPluginOption {
  langKeyDefault: string
  useLangKeyLayout?: boolean
  markdownRemark?: MarkdownRemarkQuery
  langKeyForNull?: string
  pagesPaths?: string[]
  prefixDefault?: boolean
}
