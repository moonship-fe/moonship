/** @jsx jsx  */
import { Node } from '@moonship-fe/slate'
import { jsx } from '@moonship-fe/slate-hyperscript'

export const input = <text>one</text>
export const test = value => {
  return Node.string(value)
}
export const output = `one`
