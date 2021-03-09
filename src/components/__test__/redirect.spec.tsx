import React from "react"
import { render, waitFor } from "@testing-library/react"
import Redirect from "../Redirect"

describe("Redirect", () => {
  it("without redirect link specify", async () => {
    render(<Redirect />)

    let data: HTMLElementTagNameMap["meta"] | undefined = undefined
    await waitFor(() => {
      expect(document.querySelector("meta")?.getAttribute("http-equiv")).toEqual("refresh")

      data = document.querySelector("meta") ?? undefined
    })

    expect(data).toMatchSnapshot()
  })

  it("with redirect link and default delay", async () => {
    render(<Redirect link="https://google.com" />)

    let data: HTMLElementTagNameMap["meta"] | undefined = undefined
    await waitFor(() => {
      expect(document.querySelector("meta")?.getAttribute("http-equiv")).toEqual("refresh")
      data = document.querySelector("meta") ?? undefined
    })

    expect(data).toMatchSnapshot()
  })

  it("with redirect link and custom delay", async () => {
    render(<Redirect link="https://google.com" second={30} />)

    let data: HTMLElementTagNameMap["meta"] | undefined = undefined
    await waitFor(() => {
      expect(document.querySelector("meta")?.getAttribute("http-equiv")).toEqual("refresh")
      data = document.querySelector("meta") ?? undefined
    })

    expect(data).toMatchSnapshot()
  })
})
