import { DefaultPluginOption } from "./base"

export type Environment = "production" | "development" | "test"

export interface SentryOptions extends DefaultPluginOption {
  dsn: string
  enabled?: boolean
  debug?: boolean
  environment?: Environment
  release?: string
  sampleRate?: number
  maxBreadcrumbs?: number
  attachStacktrace?: boolean
  serverName?: string
}
