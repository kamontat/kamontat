import React from "react"
import renderer from "react-test-renderer"
import ComingSoon from "../ComingSoon"

describe("ComingSoon", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ComingSoon />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
