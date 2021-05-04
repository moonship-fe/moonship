/** @jsx jsx */
import { Editor } from '@moonship-fe/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block void>
      <text />
    </block>
  </editor>
)
export const test = editor => {
  const block = editor.children[0]
  return Editor.isEmpty(editor, block)
}
export const output = false
