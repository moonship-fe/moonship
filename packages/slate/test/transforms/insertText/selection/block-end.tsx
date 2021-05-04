/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertText(editor, 'a')
}
export const input = (
  <editor>
    <block>
      word
      <cursor />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      worda
      <cursor />
    </block>
  </editor>
)
