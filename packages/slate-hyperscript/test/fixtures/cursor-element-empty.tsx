/** @jsx jsx */
import { jsx } from '@moonship-fe/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <cursor />
    </element>
  </editor>
)
export const output = {
  children: [
    {
      children: [
        {
          text: '',
        },
      ],
    },
  ],
  selection: {
    anchor: {
      path: [0, 0],
      offset: 0,
    },
    focus: {
      path: [0, 0],
      offset: 0,
    },
  },
}
