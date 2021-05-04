/** @jsx jsx */
import { Editor } from '@moonship-fe/slate'
import { jsx } from '../../../..'

export const input = (
  <editor>
    <block void>one</block>
  </editor>
)
export const test = editor => {
  return Array.from(Editor.nodes(editor, { at: [] }))
}
export const output = [
  [input, []],
  [<block void>one</block>, [0]],
]
