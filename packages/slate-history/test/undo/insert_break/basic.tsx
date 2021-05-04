/** @jsx jsx */
import { Editor } from '@moonship-fe/slate'
import { jsx } from '../..'

export const run = editor => {
  editor.insertBreak()
}
export const input = (
  <editor>
    <block>
      <block>
        on
        <cursor />e
      </block>
      <block>two</block>
    </block>
  </editor>
)
export const output = input
