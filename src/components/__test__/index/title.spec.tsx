import React from "react"
import renderer from "react-test-renderer"
import { Title } from "../../index/Title"

describe("ComingSoon", () => {
  it("renders correctly when no input", () => {
    const tree = renderer.create(<Title />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when only name exist", () => {
    const tree = renderer.create(<Title name={"Test"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when only shortname exist", () => {
    const tree = renderer.create(<Title shortname={"T"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when both name and shortname exist", () => {
    const tree = renderer.create(<Title name="Test" shortname={"T"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
