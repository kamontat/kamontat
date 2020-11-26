import { env, type } from "@kcutils/helper"
import { join } from "path"

import { SupportLogger } from "./SupportLogger"
import pjson from "../../package.json"

type PackageJson = typeof pjson
export class ConfigHelper extends SupportLogger {
  private pjson: PackageJson
  constructor(private rootpath: string) {
    super()
    this.pjson = pjson
  }

  isCI(): boolean {
    return env.isCI()
  }

  isProd(): boolean {
    return env.isProduction()
  }

  isDev(): boolean {
    return env.isDevelopment()
  }

  isTesting(): boolean {
    return env.isTesting()
  }

  getPackageJson<K extends keyof PackageJson = keyof PackageJson, V extends PackageJson[K] = PackageJson[K]>(
    key: K
  ): V {
    return this.pjson[key] as V
  }

  joinRootPath(...args: string[]): string {
    return join(this.rootpath, ...args)
  }

  joinPath(...args: string[]): string {
    return join(...args)
  }

  getEnv(key: string): type.WithUndefined<string> {
    const str = env.read(key, "")
    this.logger.print("info", { message: `${key}: return '${str}'`, scopes: ["env"] })

    if (str === "") return undefined
    else return str
  }

  getStringEnv(key: string): string {
    return env.read(key, "")
  }
}
