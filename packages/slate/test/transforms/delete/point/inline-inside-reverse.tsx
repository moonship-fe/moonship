/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.delete(editor, { reverse: true })
}
export const input = (
  <editor>
    <block>
      one
      <inline>two</inline>
      <text />
    </block>
    <block>
      <text />
      <inline>
        <cursor />
        three
      </inline>
      four
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      one
      <inline>two</inline>
      <text>
        <cursor />
      </text>
      <inline>three</inline>
      four
    </block>
  </editor>
)
