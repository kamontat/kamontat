import React from "react"
import { render, waitFor } from "@testing-library/react"
import Metadata, { Html, SEOOptions } from "../Metadata"
import { IntlProvider } from "gatsby-plugin-intl"

describe("Metadata.Html", () => {
  it("with default configuration", async () => {
    render(<Html pageName="page-name" />)
    await waitFor(() => {
      expect(document.title).toEqual("page-name")
    })
  })

  it("with title", async () => {
    render(<Html pageName="page-name" title="website-title" />)
    await waitFor(() => {
      expect(document.title).toEqual("page-name | website-title")
    })
  })

  it("with single custom metadata tag", async () => {
    render(<Html pageName="page-name" meta={[{ name: "name", content: "content" }]} />)

    let data: NodeListOf<HTMLElementTagNameMap["meta"]> | undefined = undefined
    await waitFor(() => {
      expect(document.querySelectorAll("meta").length).toEqual(1)

      data = document.querySelectorAll("meta")
    })

    expect(data).toMatchSnapshot()
  })

  it("with multiple custom metadata tags", async () => {
    render(
      <Html
        pageName="page-name"
        meta={[
          { name: "name-1", content: "content-1" },
          { name: "name-2", content: "content-2" },
        ]}
      />
    )

    let data: NodeListOf<HTMLElementTagNameMap["meta"]> | undefined = undefined
    await waitFor(() => {
      expect(document.querySelectorAll("meta").length).toEqual(2)

      data = document.querySelectorAll("meta")
    })

    expect(data).toMatchSnapshot()
  })
})

const wrapIntl = (opt: SEOOptions) => (
  <IntlProvider locale="en">
    <Metadata {...opt} />
  </IntlProvider>
)

describe("Metadata", () => {
  it("Render page name", async () => {
    render(wrapIntl({ pageName: "page-name", description: "test" }))

    await waitFor(() => {
      expect(document.title).toEqual("page-name")
    })
  })

  it("Render custom meta", async () => {
    render(wrapIntl({ pageName: "page-name", description: "test", meta: [{ name: "name-1", content: "content-1" }] }))

    let data: NodeListOf<HTMLElementTagNameMap["meta"]> | undefined = undefined
    await waitFor(() => {
      expect(document.querySelectorAll("meta").length).toEqual(9)

      data = document.querySelectorAll("meta")
    })

    expect(data).toMatchSnapshot()
  })
})
