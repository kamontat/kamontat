import React from "react"
import tw, { styled } from "twin.macro"

import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types"
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer"

import { BaseOptions } from "../layout/Base"

const Bold = tw.span`font-bold`
const Text = styled.p(() => [tw`text-left text-base leading-relaxed`, "white-space: pre-line"])

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children: BaseOptions["children"]) => <Text>{children}</Text>,
  },
}

export interface RichTextOptions extends BaseOptions {
  json: Document
}

const RichText = ({ json }: RichTextOptions): JSX.Element => documentToReactComponents(json, options) as JSX.Element

export default RichText
