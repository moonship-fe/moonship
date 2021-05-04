/** @jsx jsx */
import { Editor } from '@moonship-fe/slate'
import { jsx } from '../../../..'

export const input = (
  <editor>
    <block>one</block>
  </editor>
)
export const test = editor => {
  return Array.from(
    Editor.nodes(editor, {
      at: [],
      match: n => Editor.isBlock(editor, n),
    })
  )
}
export const output = [[<block>one</block>, [0]]]
