import React from "react"
import tw from "twin.macro"
import renderer from "react-test-renderer"

const Button = tw.div`
  flex
`

test("Button renders correctly", () => {
  expect(renderer.create(<Button>This is hotpink.</Button>).toJSON()).toMatchSnapshot()
})
