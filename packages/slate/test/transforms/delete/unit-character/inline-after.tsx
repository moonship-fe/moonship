/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor)
}
export const input = (
  <editor>
    <block>
      one
      <inline>two</inline>
      <cursor />a
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one
      <inline>two</inline>
      <cursor />
    </block>
  </editor>
)
