import React from "react"
import { render } from "@testing-library/react"
import RichText from "../ContentfulRichText"

const mock = JSON.stringify({
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: "hello world",
          nodeType: "text",
        },
        { data: {}, marks: [{ type: "underline" }], value: "3", nodeType: "text" },
        {
          data: {},
          marks: [],
          value: " times. ",
          nodeType: "text",
        },
        { data: {}, marks: [{ type: "bold" }], value: "New word", nodeType: "text" },
        { data: {}, marks: [], value: " will create ", nodeType: "text" },
        { data: {}, marks: [{ type: "bold" }], value: "new name", nodeType: "text" },
        { data: {}, marks: [], value: ".", nodeType: "text" },
      ],
      nodeType: "paragraph",
    },
  ],
  nodeType: "document",
})

describe("Contentful.RichText", () => {
  it("generate empty component", () => {
    const { container } = render(<RichText />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("generate content from raw", () => {
    const { container } = render(<RichText raw={mock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it("generate content from raw and references", () => {
    const { container } = render(<RichText raw={mock} references={[]} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
