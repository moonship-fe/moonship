/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>word</block>
  </editor>
)
export const run = editor => {
  Transforms.insertText(editor, 'x', { at: [0] })
}
export const output = (
  <editor>
    <block>x</block>
  </editor>
)
