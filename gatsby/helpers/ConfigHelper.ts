import { env, type } from "@kcutils/helper"
import { join } from "path"
import pjson from "../../package.json"

type PackageJson = typeof pjson
export class ConfigHelper {
  private pjson: PackageJson
  constructor(private rootpath: string) {
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
    if (str === "") return undefined
    else return str
  }
}
