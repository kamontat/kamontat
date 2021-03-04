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
      {social.map((s) => {
        if (s.key.toLowerCase() === "facebook")
          return <Facebook key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />
        else if (s.key.toLowerCase() === "twitter")
          return <Twitter key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />
        else if (s.key.toLowerCase() === "youtube")
          return <Youtube key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />
        else if (s.key.toLowerCase() === "linkedin")
          return <Linkedin key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />
        else if (s.key.toLowerCase() === "instagram")
          return <Instagram key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />
        else if (s.key.toLowerCase() === "github")
          return <Github key={s.key} type={s.key} name={s.name} url={s.url} title={s.username} />
        else {
          console.log(`not support ${s.name} social media`)
        }
      })}
    </SocialBar>
  )
}
