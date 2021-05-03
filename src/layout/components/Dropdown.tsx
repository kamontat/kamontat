import React from "react"
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu"
import tw from "twin.macro"

import { BaseOptions } from "../Base"

const Button = tw(MenuButton)`
  block overflow-hidden focus:outline-none px-4 py-2 leading-none hover:border-transparent hover:text-blue-500 hover:bg-white
`

const DropdownItem = tw(MenuItem)`
  block px-4 py-2 cursor-pointer focus:outline-none hover:bg-indigo-500 hover:text-white
`

interface DropdownOptions<T> extends BaseOptions {
  current: T
  choices: T[]
  equally: (current: T, choice: T) => boolean
  toName: (t: T) => string
  onMenu: (t: T) => void
}
export const Dropdown = ({ current, choices, equally, toName, onMenu }: DropdownOptions<unknown>): JSX.Element => {
  const menu = useMenuState()

  const currentName = toName(current)

  return (
    <div tw="relative">
      <Button {...menu}>{currentName}</Button>
      <Menu {...menu} aria-label={currentName} tw="mt-3">
        {choices
          .filter((choice) => !equally(current, choice))
          .map((choice) => {
            return (
              <DropdownItem
                {...menu}
                onClick={() => {
                  menu.hide()
                  onMenu(choice)
                }}
              >
                {toName(choice as string)}
              </DropdownItem>
            )
          })}
      </Menu>
    </div>
  )
}
