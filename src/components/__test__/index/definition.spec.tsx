import React from "react"
import renderer from "react-test-renderer"
import { Definition } from "../../index/Definition"

describe("ComingSoon", () => {
  it("renders correctly when no input", () => {
    const tree = renderer.create(<Definition />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when message is exist", () => {
    const tree = renderer.create(<Definition message={"Test"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
