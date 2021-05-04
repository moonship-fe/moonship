/** @jsx jsx */
import { Editor } from '@moonship-fe/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      <block>one</block>
    </block>
  </editor>
)
export const test = editor => {
  return Editor.above(editor, {
    at: [0, 0, 0],
    match: n => Editor.isBlock(editor, n),
    mode: 'highest',
  })
}
export const output = [
  <block>
    <block>one</block>
  </block>,
  [0],
]
