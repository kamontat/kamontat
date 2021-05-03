import { noExist } from "@kcutils/helper/lib/types/generic"
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
  if (noExist(socials)) return []

  return socials.reduce((result, social) => {
    if (noExist(social)) return result
    if (noExist(social.key)) return result
    if (noExist(social.name)) return result
    if (noExist(social.url)) return result
    return result.concat({
      key: social.key,
      name: social.name,
      url: social.url,
      username: social.username ?? undefined,
    })
  }, [] as SocialObject[])
}
