/** @jsx jsx  */
import { Node } from '@moonship-fe/slate'
import { jsx } from '@moonship-fe/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text key="a" />
      <text key="b" />
    </element>
  </editor>
)
export const test = value => {
  return Array.from(Node.texts(value, { reverse: true }))
}
export const output = [
  [<text key="b" />, [0, 1]],
  [<text key="a" />, [0, 0]],
]
