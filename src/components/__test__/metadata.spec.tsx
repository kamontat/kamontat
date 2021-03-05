import React from "react"
import ReactDOM from "react-dom"
import { act } from "react-dom/test-utils"
import { Helmet } from "react-helmet"
import { Html } from "../Metadata"

describe("Metadata.Html", () => {
  it("with page name as title of html", () => {
    act(() => {
      ReactDOM.render(<Html pageName="page-name" lang="en" />, document.createElement("div"))
    })

    const data = Helmet.peek()
    expect(data).toMatchSnapshot()
  })

  it("with metadata", () => {
    const meta = [
      {
        name: "title",
        content: "title",
      },
      {
        name: "hello",
        content: "world",
      },
    ]

    act(() => {
      ReactDOM.render(<Html pageName="page-name" lang="en" meta={meta} />, document.createElement("div"))
    })

    const data = Helmet.peek()
    expect(data).toMatchSnapshot()
  })
})
