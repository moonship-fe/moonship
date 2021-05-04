/** @jsx jsx */
import { jsx } from '@moonship-fe/slate-hyperscript'

export const input = (
  <editor>
    <element>
      w<anchor />
      or
      <focus />d
    </element>
  </editor>
)
export const output = {
  children: [
    {
      children: [
        {
          text: 'word',
        },
      ],
    },
  ],
  selection: {
    anchor: {
      path: [0, 0],
      offset: 1,
    },
    focus: {
      path: [0, 0],
      offset: 3,
    },
  },
}
