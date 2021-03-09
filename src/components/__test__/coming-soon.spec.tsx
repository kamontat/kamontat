import React from "react"
import { render } from "@testing-library/react"
import ComingSoon from "../ComingSoon"

describe("ComingSoon", () => {
  it("renders correctly", () => {
    const { container } = render(<ComingSoon />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
