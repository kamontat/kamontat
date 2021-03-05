import { generic } from "@kcutils/helper"
import { ContentfulSocial, Maybe } from "../../../types/gatsby-graphql"

export interface SocialObject {
  key: string
  name: string
  url: string

  username: string | undefined
}

export const builder = (
  socials: Maybe<Pick<ContentfulSocial, "name" | "key" | "username" | "url">>[] | null | undefined
): SocialObject[] => {
  if (generic.noExist(socials)) return []

  return socials.reduce((result, social) => {
    if (generic.noExist(social)) return result
    if (generic.noExist(social.key)) return result
    if (generic.noExist(social.name)) return result
    if (generic.noExist(social.url)) return result
    return result.concat({
      key: social.key,
      name: social.name,
      url: social.url,
      username: social.username ?? undefined,
    })
  }, [] as SocialObject[])
}
