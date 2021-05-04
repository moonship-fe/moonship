/** @jsx jsx  */
import { Node } from '@moonship-fe/slate'
import { jsx } from '@moonship-fe/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)
export const test = value => {
  return Array.from(Node.levels(value, [0, 0]))
}
export const output = [
  [input, []],
  [input.children[0], [0]],
  [input.children[0].children[0], [0, 0]],
]
