/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.wrapNodes(editor, <block new />)
}
export const input = (
  <editor>
    <block a>
      <block b>
        <cursor />
        word
      </block>
    </block>
  </editor>
)
export const output = (
  <editor>
    <block a>
      <block new>
        <block b>
          <cursor />
          word
        </block>
      </block>
    </block>
  </editor>
)
