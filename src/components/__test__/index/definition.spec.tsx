import React from "react"
import { render } from "@testing-library/react"
import { Definition } from "../../index/Definition"

describe("Definition", () => {
  it("renders correctly when no input", () => {
    const { container } = render(<Definition />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly when message is exist", () => {
    const { container } = render(<Definition message="Test" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
