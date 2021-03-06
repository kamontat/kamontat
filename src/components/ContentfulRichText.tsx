import React from "react"
import tw, { styled } from "twin.macro"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText, ContentfulRichTextGatsbyReference } from "gatsby-source-contentful/rich-text"

import { BaseOptions } from "../layout/Base"
import { nonEmpty } from "@kcutils/helper/lib/types/generic"

const Bold = tw.span`font-bold`
const Text = styled.p(() => [tw`text-base leading-relaxed`, "white-space: pre-line"])

export interface RichTextOptions<T extends ContentfulRichTextGatsbyReference = ContentfulRichTextGatsbyReference>
  extends BaseOptions {
  raw: string
  references: T[]
}

const wrapper = (opt: Partial<RichTextOptions>): RichTextOptions => {
  return {
    ...opt,
    raw: opt.raw ?? "",
    references: opt.references ?? [],
  }
}

const RichText = (data: Partial<RichTextOptions>): JSX.Element => {
  if (nonEmpty(data.raw))
    return renderRichText(wrapper(data), {
      renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (_, children: BaseOptions["children"]) => <Text>{children}</Text>,
      },
    }) as JSX.Element
  return <p />
}

export default RichText
