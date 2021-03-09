import React from "react"
import { render } from "@testing-library/react"
import { Title } from "../../index/Title"

describe("ComingSoon", () => {
  it("renders correctly when no input", () => {
    const { container } = render(<Title />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly when only name exist", () => {
    const { container } = render(<Title name={"Test"} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly when only shortname exist", () => {
    const { container } = render(<Title shortname={"T"} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly when both name and shortname exist", () => {
    const { container } = render(<Title name="Test" shortname={"T"} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
