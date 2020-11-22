import { DefaultPluginOption } from "./base"

export interface EmotionOptions extends DefaultPluginOption {
  sourceMap?: boolean
  autoLabel?: boolean
  labelFormat?: string
  instances?: Array<string>
  cssPropOptimization?: boolean
}
