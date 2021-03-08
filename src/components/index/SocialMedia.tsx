import React from "react"
import tw from "twin.macro"

import { BaseOptions } from "../../layout/Base"

import { Facebook } from "./socials/Facebook"
import { Github } from "./socials/Github"
import { Instagram } from "./socials/Instagram"
import { Linkedin } from "./socials/Linkedin"
import { Twitter } from "./socials/Twitter"
import { Youtube } from "./socials/Youtube"

export interface SocialObject {
  key: string
  name: string
  url: string

  username: string | undefined
}

export interface SocialOptions extends BaseOptions {
  social: SocialObject[]
}

const SocialBar = tw.div`inline-flex`

export const SocialMedia = ({ social }: SocialOptions): JSX.Element => {
  return (
    <SocialBar>
      {social.reduce((result, s) => {
        const key = s.key.toLowerCase()
        switch (key) {
          case "facebook":
            result.push(<Facebook key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />)
            break
          case "twitter":
            result.push(<Twitter key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />)
            break
          case "youtube":
            result.push(<Youtube key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />)
            break
          case "linkedin":
            result.push(<Linkedin key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />)
            break
          case "instagram":
            result.push(<Instagram key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />)
            break
          case "github":
            result.push(<Github key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />)
            break
        }

        return result
      }, [] as JSX.Element[])}
    </SocialBar>
  )
}
